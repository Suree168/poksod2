import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema, toAbsoluteUrl } from "@/lib/seo-schema";

const coreTips = [
  "เริ่มเล่นด้วยทุนที่ยอมรับการขาดทุนได้ และแบ่งเป็นรอบย่อย",
  "แต้ม 0-4 ควรจั่วเพิ่ม, แต้ม 7+ ควรหยุดเพื่อลดความเสี่ยง",
  "ตั้งเป้ากำไรและจุดหยุดขาดทุนก่อนเล่นทุกครั้ง",
  "หลีกเลี่ยงการไล่ทุนเมื่อแพ้ต่อเนื่อง",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "ป๊อกเด้ง 2 ใบ เล่นยังไงให้ได้เปรียบ",
  description:
    "รวมกติกา วิธีเล่น และเทคนิคป๊อกเด้ง 2 ใบ สำหรับมือใหม่และผู้เล่นจริง พร้อมแนวทางบริหารทุน",
  mainEntityOfPage: toAbsoluteUrl("/pokdeng-2-bai"),
  author: {
    "@type": "Organization",
    name: "POKSOD",
  },
  publisher: {
    "@type": "Organization",
    name: "POKSOD",
  },
};

const pokdengWebPageSchema = buildWebPageSchema({
  name: "ป๊อกเด้ง 2 ใบ เล่นยังไงให้ได้เปรียบ",
  path: "/pokdeng-2-bai",
  description: "รวมกติกา วิธีเล่น และเทคนิคป๊อกเด้ง 2 ใบ สำหรับมือใหม่และผู้เล่นจริง พร้อมแนวทางบริหารทุน",
});

const pokdengBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "ป๊อกเด้ง 2 ใบ", path: "/pokdeng-2-bai" },
]);

const Pokdeng2Bai = () => {
  usePageSeo({
    title: "ป๊อกเด้ง 2 ใบ เล่นยังไง | สูตร+วิธีเล่นอัปเดต 2026",
    description: "รวมกติกา วิธีเล่น และเทคนิคป๊อกเด้ง 2 ใบ สำหรับมือใหม่และผู้เล่นจริง พร้อมแนวทางบริหารทุนและลิงก์สมัครผ่าน LINE",
    path: "/pokdeng-2-bai",
  });

  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={[articleSchema, pokdengWebPageSchema, pokdengBreadcrumbSchema]} />
        <HeroSection />

        <section className="section-dark py-16 md:py-20">
          <div className="container max-w-4xl space-y-5 text-foreground/85">
            <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow">ป๊อกเด้ง 2 ใบ เล่นยังไงให้ได้เปรียบ</h1>
            <p>
              หน้านี้ดึงโครงเนื้อหาจากโปรเจค <code>poksod-royal-flush-main</code> และจัดเข้ากับเว็บหลัก เพื่อเป็น
              Pillar Page ของคีย์เวิร์ด <strong>ป๊อกเด้ง 2 ใบ</strong> โดยตรง
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>กติกาและการนับแต้มแบบเข้าใจง่าย</li>
              <li>เทคนิควางเงินและจังหวะจั่วไพ่</li>
              <li>FAQ ครบสำหรับมือใหม่และผู้เล่นจริง</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6 pt-4">
              <article className="card-casino p-5">
                <h2 className="text-xl font-bold text-foreground mb-2">ลำดับเป้าหมายเวลาเล่น</h2>
                <p className="text-sm text-muted-foreground mb-3">โฟกัสความสม่ำเสมอ มากกว่าการทบแบบไม่มีแผน</p>
                <ol className="list-decimal pl-5 text-sm text-muted-foreground space-y-2">
                  <li>ตั้งทุนต่อรอบให้ชัดเจน</li>
                  <li>เก็บกำไรเป็นช่วงและออกเมื่อถึงเป้า</li>
                  <li>พักทันทีเมื่อถึงจุดขาดทุนที่กำหนด</li>
                </ol>
              </article>

              <article className="card-casino p-5">
                <h2 className="text-xl font-bold text-foreground mb-2">เทคนิคจากหน้า Pillar ต้นทาง</h2>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  {coreTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="text-sm text-muted-foreground">
              ดูโปรล่าสุดที่หน้า <a href="/promotions" className="gold-text hover:underline">/promotions</a> และอ่านบทความเสริมที่ <a href="/blog" className="gold-text hover:underline">/blog</a>
            </p>
          </div>
        </section>

        <HowToPlaySection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Pokdeng2Bai;
