/**
 * post-social.mjs
 * โพสต์บทความใหม่ไปยัง Facebook Page, LINE OA, Twitter/X
 *
 * Usage:  node scripts/post-social.mjs --title "..." --summary "..." --url "..."
 * Environment variables (from GitHub Secrets):
 *   FB_PAGE_ID, FB_PAGE_ACCESS_TOKEN
 *   LINE_CHANNEL_ACCESS_TOKEN
 *   TWITTER_API_KEY, TWITTER_API_SECRET, TWITTER_ACCESS_TOKEN, TWITTER_ACCESS_SECRET
 */

import { createHmac } from "node:crypto";

// --- Parse CLI args ---
function getArg(name) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx !== -1 && process.argv[idx + 1] ? process.argv[idx + 1] : "";
}

const title = getArg("title");
const summary = getArg("summary");
const url = getArg("url");

if (!title || !url) {
  console.error("Usage: node post-social.mjs --title '...' --summary '...' --url '...'");
  process.exit(1);
}

const message = `📝 บทความใหม่: ${title}\n\n${summary}\n\n🔗 อ่านเพิ่มเติม: ${url}\n\n#ป๊อกเด้ง #ป๊อกเด้งออนไลน์ #POKSOD`;

// =====================
// 1. Facebook Page Post
// =====================
async function postFacebook() {
  const pageId = process.env.FB_PAGE_ID;
  const token = process.env.FB_PAGE_ACCESS_TOKEN;
  if (!pageId || !token) {
    console.log("⏭️  Facebook: skipped (no FB_PAGE_ID or FB_PAGE_ACCESS_TOKEN)");
    return;
  }

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${pageId}/feed`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message,
          link: url,
          access_token: token,
        }),
      }
    );
    const data = await res.json();
    if (data.id) {
      console.log(`✅ Facebook: posted (id: ${data.id})`);
    } else {
      console.error("❌ Facebook error:", JSON.stringify(data));
    }
  } catch (err) {
    console.error("❌ Facebook error:", err.message);
  }
}

// =====================
// 2. LINE OA Broadcast
// =====================
async function postLINE() {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!token) {
    console.log("⏭️  LINE: skipped (no LINE_CHANNEL_ACCESS_TOKEN)");
    return;
  }

  try {
    const res = await fetch(
      "https://api.line.me/v2/bot/message/broadcast",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          messages: [
            {
              type: "text",
              text: message,
            },
          ],
        }),
      }
    );

    if (res.ok) {
      console.log("✅ LINE: broadcast sent");
    } else {
      const data = await res.json();
      console.error("❌ LINE error:", JSON.stringify(data));
    }
  } catch (err) {
    console.error("❌ LINE error:", err.message);
  }
}

// =====================
// 3. Twitter/X Post
// =====================
function percentEncode(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

function generateOAuthSignature(method, baseUrl, params, consumerSecret, tokenSecret) {
  const sortedParams = Object.keys(params)
    .sort()
    .map((k) => `${percentEncode(k)}=${percentEncode(params[k])}`)
    .join("&");

  const signatureBase = `${method}&${percentEncode(baseUrl)}&${percentEncode(sortedParams)}`;
  const signingKey = `${percentEncode(consumerSecret)}&${percentEncode(tokenSecret)}`;

  return createHmac("sha1", signingKey).update(signatureBase).digest("base64");
}

async function postTwitter() {
  const apiKey = process.env.TWITTER_API_KEY;
  const apiSecret = process.env.TWITTER_API_SECRET;
  const accessToken = process.env.TWITTER_ACCESS_TOKEN;
  const accessSecret = process.env.TWITTER_ACCESS_SECRET;

  if (!apiKey || !apiSecret || !accessToken || !accessSecret) {
    console.log("⏭️  Twitter: skipped (missing TWITTER_* env vars)");
    return;
  }

  // สร้างข้อความสั้นสำหรับ Twitter (280 chars limit)
  const tweetText = `📝 ${title}\n\n${summary.slice(0, 150)}\n\n🔗 ${url}\n\n#ป๊อกเด้ง #POKSOD`.slice(0, 280);

  const tweetUrl = "https://api.twitter.com/2/tweets";
  const oauthParams = {
    oauth_consumer_key: apiKey,
    oauth_nonce: Math.random().toString(36).slice(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: accessToken,
    oauth_version: "1.0",
  };

  const signature = generateOAuthSignature("POST", tweetUrl, oauthParams, apiSecret, accessSecret);
  oauthParams.oauth_signature = signature;

  const authHeader =
    "OAuth " +
    Object.keys(oauthParams)
      .sort()
      .map((k) => `${percentEncode(k)}="${percentEncode(oauthParams[k])}"`)
      .join(", ");

  try {
    const res = await fetch(tweetUrl, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: tweetText }),
    });

    const data = await res.json();
    if (data.data?.id) {
      console.log(`✅ Twitter: posted (id: ${data.data.id})`);
    } else {
      console.error("❌ Twitter error:", JSON.stringify(data));
    }
  } catch (err) {
    console.error("❌ Twitter error:", err.message);
  }
}

// =====================
// Run all
// =====================
console.log("🚀 Posting to social media...");
console.log(`   Title: ${title}`);
console.log(`   URL: ${url}\n`);

await Promise.allSettled([postFacebook(), postLINE(), postTwitter()]);

console.log("\n✅ Social media posting complete");
