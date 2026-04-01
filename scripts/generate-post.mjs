/**
 * generate-post.mjs
 * ใช้ Google Gemini API สร้างบทความป๊อกเด้ง SEO ภาษาไทย
 * แล้วเพิ่มลง src/data/posts.json
 *
 * Usage:  GEMINI_API_KEY=xxx node scripts/generate-post.mjs
 * Or via GitHub Actions with secrets
 */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const POSTS_PATH = resolve(__dirname, "../src/data/posts.json");
const IMAGES_DIR = resolve(__dirname, "../public/blog-images");
const MAX_POSTS = 50;
const SITE_URL = "https://www.poksod.com";

// --- keyword pool สำหรับสุ่มเลือกหัวข้อ ---
const KEYWORD_POOL = [
  "วิธีเล่นป๊อกเด้ง 2 ใบ",
  "เทคนิคป๊อกเด้งมือใหม่",
  "สูตรนับแต้มป๊อกเด้ง",
  "ป๊อกเด้งออนไลน์ได้เงินจริง",
  "บริหารเงินป๊อกเด้ง",
  "เลือกโต๊ะป๊อกเด้ง",
  "โปรโมชั่นป๊อกเด้ง 2026",
  "รีวิวเว็บป๊อกเด้ง",
  "เว็บป๊อกเด้งปลอดภัย",
  "ป๊อกเด้ง ฝากถอนออโต้",
  "กลยุทธ์ป๊อกเด้งระยะยาว",
  "ป๊อกเด้ง ทุนน้อย",
  "ข้อผิดพลาดป๊อกเด้ง",
  "เกมไพ่ออนไลน์ไทย",
  "ป๊อกเด้ง วิธีชนะ",
  "ป๊อกเด้ง สมัครใหม่ โบนัส",
  "เปรียบเทียบเว็บป๊อกเด้ง",
  "ป๊อกเด้ง เล่นบนมือถือ",
  "ป๊อกเด้ง สด คาสิโน",
  "ไพ่ป๊อกเด้ง กฎกติกา",
];

// --- internal link targets ---
const INTERNAL_LINKS = [
  "/pokdeng-2-bai",
  "/promotions",
  "/blog",
  "/reviews",
  "/about",
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\u0E00-\u0E7Fa-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

async function generatePost() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY environment variable is required");
    process.exit(1);
  }

  // อ่าน posts เดิม
  let posts = [];
  try {
    posts = JSON.parse(readFileSync(POSTS_PATH, "utf-8"));
  } catch {
    posts = [];
  }

  const existingSlugs = new Set(posts.map((p) => p.slug));
  const existingTitles = posts.map((p) => p.title).join(", ");

  // สุ่ม keyword
  const keyword = pickRandom(KEYWORD_POOL);
  const href = pickRandom(INTERNAL_LINKS);

  // Gemini prompt
  const prompt = `คุณเป็นนักเขียน SEO ภาษาไทยผู้เชี่ยวชาญด้านเกมป๊อกเด้งออนไลน์
สร้างบทความ 1 บทความสำหรับเว็บ POKSOD (poksod.com) โดยใช้ keyword หลัก: "${keyword}"

กฎ:
- ชื่อบทความ (title) ต้องเป็นภาษาไทย ดึงดูด มี keyword และไม่ซ้ำกับบทความเดิม: [${existingTitles}]
- slug ภาษาอังกฤษ ตัวพิมพ์เล็ก ขั้นด้วย - (ไม่เกิน 60 ตัวอักษร)
- สรุปสั้นๆ (summary) 1-2 ประโยค ภาษาไทย มี keyword
- keywords เป็น array ของ keyword ภาษาไทย 3-5 คำ
- ตอบเป็น JSON เท่านั้น ไม่ต้องมี markdown code block

ตัวอย่าง format:
{"title":"...","slug":"...","summary":"...","keywords":["...","...."]}`;

  const genAI = new GoogleGenerativeAI(apiKey);
  const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.0-flash-lite"];

  console.log(`🔄 Generating post with keyword: "${keyword}"...`);

  let text;
  for (const modelName of MODELS) {
    try {
      console.log(`   Trying model: ${modelName}`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      text = result.response.text().trim();
      console.log(`   ✅ Success with ${modelName}`);
      break;
    } catch (err) {
      console.log(`   ⚠️ ${modelName} failed: ${err.message.slice(0, 100)}`);
      if (modelName === MODELS[MODELS.length - 1]) throw err;
    }
  }

  // parse JSON จาก response
  let parsed;
  try {
    // ลอง parse ตรงๆ ก่อน
    parsed = JSON.parse(text);
  } catch {
    // ถ้ามี markdown code block ให้ strip ออก
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("❌ Failed to parse Gemini response:", text);
      process.exit(1);
    }
    parsed = JSON.parse(jsonMatch[0]);
  }

  // validate
  if (!parsed.title || !parsed.slug || !parsed.summary) {
    console.error("❌ Missing required fields in response:", parsed);
    process.exit(1);
  }

  // ป้องกัน slug ซ้ำ
  let slug = slugify(parsed.slug);
  if (existingSlugs.has(slug)) {
    slug = `${slug}-${Date.now().toString(36)}`;
  }

  // --- สร้างรูป featured image ---
  let imagePath = "";
  try {
    imagePath = await generateImage(genAI, parsed.title, slug);
    console.log(`\u{1f5bc}\ufe0f  Image saved: ${imagePath}`);
  } catch (err) {
    console.log(`\u26a0\ufe0f  Image generation skipped: ${err.message.slice(0, 100)}`);
  }

  const today = new Date().toISOString().slice(0, 10);
  const newPost = {
    slug,
    title: parsed.title,
    summary: parsed.summary,
    href,
    date: today,
    keywords: parsed.keywords || [],
    image: imagePath || "",
  };

  // prepend (บทความใหม่อยู่บนสุด)
  posts.unshift(newPost);

  // จำกัดจำนวน
  if (posts.length > MAX_POSTS) {
    posts = posts.slice(0, MAX_POSTS);
  }

  // เขียนลงไฟล์
  writeFileSync(POSTS_PATH, JSON.stringify(posts, null, 2) + "\n", "utf-8");

  console.log(`✅ New post created: "${newPost.title}"`);
  console.log(`   slug: ${newPost.slug}`);
  console.log(`   href: ${newPost.href}`);
  console.log(`   date: ${newPost.date}`);

  // output สำหรับ GitHub Actions ใช้ใน step ถัดไป
  const output = process.env.GITHUB_OUTPUT;
  if (output) {
    const { appendFileSync } = await import("node:fs");
    appendFileSync(output, `title=${newPost.title}\n`);
    appendFileSync(output, `summary=${newPost.summary}\n`);
    appendFileSync(output, `slug=${newPost.slug}\n`);
    appendFileSync(output, `url=${SITE_URL}/blog\n`);
  }
}

// --- Image generation function ---
async function generateImage(genAI, title, slug) {
  if (!existsSync(IMAGES_DIR)) {
    mkdirSync(IMAGES_DIR, { recursive: true });
  }

  const IMAGE_MODELS = ["gemini-2.5-flash-image", "gemini-2.0-flash"];
  const imagePrompt = `Create a beautiful, high-quality featured image for a Thai online Pok Deng (\u0e1b\u0e4a\u0e2d\u0e01\u0e40\u0e14\u0e49\u0e07) blog article titled: "${title}"

Style requirements:
- Casino/card game theme with luxury gold and dark tones
- Professional, modern design suitable for a website hero image
- Include visual elements like playing cards, poker chips, or casino table
- Rich colors: deep red, gold, black background
- NO text or letters in the image
- Aspect ratio: 16:9 landscape
- Photorealistic or high-quality digital art style`;

  for (const modelName of IMAGE_MODELS) {
    try {
      console.log(`\u{1f3a8} Generating image with ${modelName}...`);
      const model = genAI.getGenerativeModel({
        model: modelName,
        generationConfig: { responseModalities: ["TEXT", "IMAGE"] },
      });

      const result = await model.generateContent(imagePrompt);
      const parts = result.response.candidates?.[0]?.content?.parts || [];

      for (const part of parts) {
        if (part.inlineData) {
          const { mimeType, data } = part.inlineData;
          const ext = mimeType === "image/png" ? "png" : mimeType === "image/webp" ? "webp" : "jpg";
          const fileName = `${slug}.${ext}`;
          const filePath = resolve(IMAGES_DIR, fileName);
          writeFileSync(filePath, Buffer.from(data, "base64"));
          return `/blog-images/${fileName}`;
        }
      }
      console.log(`   \u26a0\ufe0f ${modelName}: no image in response`);
    } catch (err) {
      console.log(`   \u26a0\ufe0f ${modelName} image failed: ${err.message.slice(0, 100)}`);
    }
  }
  return "";
}

generatePost().catch((err) => {
  console.error("\u274c Error:", err.message);
  process.exit(1);
});
