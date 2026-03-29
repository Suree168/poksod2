import Navbar from "@/components/Navbar";
import ReviewSection from "@/components/ReviewSection";
import ComparisonSection from "@/components/ComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema, toAbsoluteUrl } from "@/lib/seo-schema";

const scoreItems = [
  { label: "ความเสถียรระบบ", score: "9.0/10" },
  { label: "ความเร็วฝากถอน", score: "9.5/10" },
  { label: "คุณภาพบริการ", score: "9.0/10" },
  { label: "ประสบการณ์ใช้งาน", score: "9.2/10" },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Organization",
    name: "POKSOD",
    url: toAbsoluteUrl("/"),
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "9",
    bestRating: "10",
  },
  reviewBody:
    "รีวิวป๊อกเด้งออนไลน์จากการใช้งานจริง เน้นความเสถียรระบบ ฝากถอน และความโปร่งใสของบริการ",
};

const reviewsWebPageSchema = buildWebPageSchema({
  name: "รีวิวป๊อกเด้งออนไลน์",
  path: "/reviews",
  description: "รวมรีวิวผู้เล่นจริง คะแนนระบบ และตารางเปรียบเทียบ เพื่อใช้ประกอบการตัดสินใจก่อนสมัคร",
});

const reviewsBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "รีวิว", path: "/reviews" },
]);

const Reviews = () => {
  usePageSeo({
    title: "รีวิวป๊อกเด้งออนไลน์ | คะแนนจริงจากผู้เล่น",
    description: "รวมรีวิวผู้เล่นจริง คะแนนระบบ และตารางเปรียบเทียบ เพื่อใช้ประกอบการตัดสินใจก่อนสมัคร",
    path: "/reviews",
  });

  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={[reviewSchema, reviewsWebPageSchema, reviewsBreadcrumbSchema]} />
        <section className="section-dark py-16 md:py-20">
          <div className="container max-w-4xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow">รีวิวผู้เล่นและคะแนนเว็บ</h1>
            <p className="text-muted-foreground">
              หน้านี้ดึงทิศทางคอนเทนต์จาก <code>pok-deng-pro-main</code> โดยโฟกัสรีวิวจริง เปรียบเทียบ และความโปร่งใส
              เพื่อเพิ่ม Trust ให้ก่อนตัดสินใจสมัคร
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {scoreItems.map((item) => (
                <div key={item.label} className="card-casino p-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                  <span className="font-bold gold-text">{item.score}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              ดูหน้าเกี่ยวกับความน่าเชื่อถือเพิ่มเติมที่
              <a href="/about" className="gold-text hover:underline"> /about</a>
            </p>
          </div>
        </section>

        <ReviewSection />
        <ComparisonSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Reviews;
