import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema, toAbsoluteUrl } from "@/lib/seo-schema";

const posts = [
  {
    title: "วิธีเล่นป๊อกเด้งออนไลน์สำหรับมือใหม่",
    summary: "พื้นฐานการนับแต้ม การจั่วไพ่ และการวางเงินแบบปลอดภัย",
    href: "/pokdeng-2-bai",
  },
  {
    title: "เทคนิคบริหารเงินในป๊อกเด้ง",
    summary: "วางงบ เล่นเป็นรอบ และตั้งจุดหยุดเพื่อควบคุมความเสี่ยง",
    href: "/pokdeng-2-bai",
  },
  {
    title: "แนวทางเลือกโต๊ะและจังหวะเล่น",
    summary: "เลือกห้องที่เหมาะกับทุน และหลีกเลี่ยงการเล่นตามอารมณ์",
    href: "/pokdeng-2-bai",
  },
  {
    title: "สูตรดูไพ่ป๊อกเด้งเบื้องต้นที่ใช้ได้จริง",
    summary: "เข้าใจรูปแบบไพ่สำคัญและจังหวะตัดสินใจจั่ว/หยุดสำหรับผู้เล่นใหม่",
    href: "/pokdeng-2-bai",
  },
  {
    title: "วางแผนทุน 500 บาทให้เล่นได้นานขึ้น",
    summary: "ตัวอย่างแผนแบ่งทุนต่อไม้ ลดความเสี่ยง และล็อกกำไรเป็นรอบ",
    href: "/pokdeng-2-bai",
  },
  {
    title: "รวมข้อผิดพลาดที่มือใหม่มักพลาดในป๊อกเด้ง",
    summary: "สรุปจุดพลาดยอดฮิต เช่น ไล่ทุน เล่นตามอารมณ์ และไม่ตั้ง stop loss",
    href: "/pokdeng-2-bai",
  },
  {
    title: "เลือกโปรโมชั่นป๊อกเด้งยังไงให้คุ้มที่สุด",
    summary: "เปรียบเทียบโบนัสสมาชิกใหม่ โปรฝากเพิ่ม และเงื่อนไขที่ควรเช็กก่อนรับ",
    href: "/promotions",
  },
  {
    title: "อ่านรีวิวเว็บป๊อกเด้งอย่างไรไม่ให้โดนหลอก",
    summary: "เช็กคะแนนจริงจากผู้ใช้ ประวัติฝากถอน และความน่าเชื่อถือของระบบ",
    href: "/reviews",
  },
  {
    title: "เช็กลิสต์เว็บป๊อกเด้งน่าเชื่อถือก่อนสมัคร",
    summary: "5 ปัจจัยสำคัญก่อนเปิดยูสเซอร์ใหม่ เช่น ความปลอดภัย ซัพพอร์ต และความเร็วระบบ",
    href: "/about",
  },
  {
    title: "แนวทางทำกำไรระยะยาวในป๊อกเด้งออนไลน์",
    summary: "วางแผนการเล่นรายวัน คุมวินัย และใช้ข้อมูลจากผลเล่นย้อนหลัง",
    href: "/pokdeng-2-bai",
  },
];

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "บทความป๊อกเด้ง POKSOD",
  url: toAbsoluteUrl("/blog"),
  blogPost: posts.map((post, index) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    url: toAbsoluteUrl(post.href),
    position: index + 1,
  })),
};

const blogWebPageSchema = buildWebPageSchema({
  name: "บทความป๊อกเด้ง",
  path: "/blog",
  description: "รวมบทความ SEO ป๊อกเด้งสำหรับมือใหม่และผู้เล่นจริง พร้อมลิงก์ไปหน้า Pillar และโปรโมชั่น",
});

const blogBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "บทความ", path: "/blog" },
]);

const Blog = () => {
  usePageSeo({
    title: "บทความป๊อกเด้ง | คู่มือ เทคนิค และกลยุทธ์",
    description: "รวมบทความ SEO ป๊อกเด้งสำหรับมือใหม่และผู้เล่นจริง พร้อมลิงก์ไปหน้า Pillar และโปรโมชั่น",
    path: "/blog",
  });

  return (
    <>
      <Navbar />
      <main className="section-dark py-16 md:py-20 min-h-[70vh]">
        <JsonLd data={[blogSchema, blogWebPageSchema, blogBreadcrumbSchema]} />
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow mb-4">บทความป๊อกเด้ง (Content Cluster)</h1>
          <p className="text-muted-foreground mb-10">
            หน้านี้อ้างอิงโครงสร้างจาก <code>pokdeng-mastery-guide-main</code> เพื่อรองรับบทความ SEO และส่งแรงลิงก์ภายในไปหน้า Pillar
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="card-casino p-6 flex flex-col">
                <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{post.summary}</p>
                <a href={post.href} className="btn-gold text-center">อ่านต่อ</a>
              </article>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <article className="card-casino p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Cluster Linking</h2>
              <p className="text-sm text-muted-foreground">
                ทุกบทความในคลัสเตอร์นี้จะส่งลิงก์กลับไปยังหน้า Pillar ที่
                <a href="/pokdeng-2-bai" className="gold-text hover:underline"> /pokdeng-2-bai</a>
                เพื่อเพิ่มความแข็งแรงด้าน SEO
              </p>
            </article>
            <article className="card-casino p-6">
              <h2 className="text-xl font-bold text-foreground mb-2">Next Step</h2>
              <p className="text-sm text-muted-foreground">
                เมื่อต้องการกระตุ้น conversion ให้ผู้ใช้งานไปยังหน้า
                <a href="/promotions" className="gold-text hover:underline"> /promotions</a>
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Blog;
