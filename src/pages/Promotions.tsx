import Navbar from "@/components/Navbar";
import PromotionSection from "@/components/PromotionSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo-schema";

const promoHighlights = [
  "สมาชิกใหม่รับโบนัสเพิ่มทันทีสูงสุด 100%",
  "ฝากรายวันรับเพิ่มต่อเนื่องตามเงื่อนไข",
  "คืนยอดเสียรายสัปดาห์เพื่อรักษาทุน",
];

const promotionsWebPageSchema = buildWebPageSchema({
  name: "โปรโมชั่นป๊อกเด้ง",
  path: "/promotions",
  description: "รวมโปรโมชั่นป๊อกเด้งล่าสุด: โบนัสสมาชิกใหม่ ฝากแรกรับเพิ่ม และโปรคืนยอดเสีย",
});

const promotionsBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "โปรโมชั่น", path: "/promotions" },
]);

const promoFaq = [
  {
    q: "โปรโมชั่นสมาชิกใหม่รับยังไง?",
    a: "สมัครสมาชิกผ่าน LINE แล้วยืนยันข้อมูล ระบบจะแสดงโปรโมชั่นที่รับได้ทันที",
  },
  {
    q: "โปรโมชั่นคืนยอดเสียคำนวณเมื่อไหร่?",
    a: "คำนวณตามรอบที่ระบบกำหนด และเครดิตคืนจะเข้าอัตโนมัติตามเงื่อนไข",
  },
  {
    q: "รับหลายโปรโมชั่นพร้อมกันได้ไหม?",
    a: "ได้บางรายการ ขึ้นกับเงื่อนไขของแต่ละโปรโมชั่นในช่วงเวลานั้น",
  },
];

const Promotions = () => {
  usePageSeo({
    title: "โปรโมชั่นป๊อกเด้ง แจกเครดิตฟรี 2026 | POKSOD",
    description: "รวมโปรโมชั่นป๊อกเด้งล่าสุด: โบนัสสมาชิกใหม่ ฝากแรกรับเพิ่ม และโปรคืนยอดเสีย พร้อมปุ่มสมัครผ่าน LINE",
    path: "/promotions",
  });

  return (
    <>
      <Navbar />
      <main>
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: promoFaq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.a,
                },
              })),
            },
            promotionsWebPageSchema,
            promotionsBreadcrumbSchema,
          ]}
        />
        <section className="section-dark py-16 md:py-20">
          <div className="container max-w-4xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow">โปรโมชั่นป๊อกเด้ง</h1>
            <p className="text-muted-foreground">
              หน้านี้ดึงแนวทางและคอนเทนต์จาก <code>pokdeng-bonus-hub-main</code> เพื่อรวมโปรโมชั่นที่เน้นการ
              conversion และ CTA ชัดเจน
            </p>

            <div className="card-casino p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">จุดเด่นโปรโมชั่นรอบนี้</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {promoHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                ต้องการวิธีเล่นก่อนรับโปร ดูที่ <a href="/pokdeng-2-bai" className="gold-text hover:underline">/pokdeng-2-bai</a>
              </p>
            </div>
          </div>
        </section>

        <PromotionSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Promotions;
