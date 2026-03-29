import Navbar from "@/components/Navbar";
import WhyChooseSection from "@/components/WhyChooseSection";
import SecuritySection from "@/components/SecuritySection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema, toAbsoluteUrl } from "@/lib/seo-schema";

const trustSignals = [
  "ระบบเข้ารหัสข้อมูลและตรวจสอบธุรกรรมทุกขั้นตอน",
  "ทีมซัพพอร์ตพร้อมดูแลผู้เล่นตลอด 24 ชั่วโมง",
  "โครงสร้างเว็บไซต์รองรับ SEO และการใช้งานมือถือ",
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "เกี่ยวกับเรา POKSOD",
  url: toAbsoluteUrl("/about"),
  mainEntity: {
    "@type": "Organization",
    name: "POKSOD",
    url: toAbsoluteUrl("/"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["th"],
    },
  },
};

const aboutWebPageSchema = buildWebPageSchema({
  name: "เกี่ยวกับเรา POKSOD",
  path: "/about",
  description: "รู้จักทีมงาน POKSOD มาตรฐานความปลอดภัย ระบบบริการ และแนวทางดูแลผู้เล่นแบบมืออาชีพ",
});

const aboutBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "เกี่ยวกับเรา", path: "/about" },
]);

const About = () => {
  usePageSeo({
    title: "เกี่ยวกับเรา POKSOD | เว็บป๊อกเด้งน่าเชื่อถือ",
    description: "รู้จักทีมงาน POKSOD มาตรฐานความปลอดภัย ระบบบริการ และแนวทางดูแลผู้เล่นแบบมืออาชีพ",
    path: "/about",
  });

  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={[aboutSchema, aboutWebPageSchema, aboutBreadcrumbSchema]} />
        <section className="section-dark py-16 md:py-20">
          <div className="container max-w-4xl space-y-4">
            <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow">เกี่ยวกับเรา POKSOD</h1>
            <p className="text-muted-foreground">
              หน้านี้อ้างอิงแนวคอนเทนต์จาก <code>poksod-trust-hub-main</code> เพื่อเน้นความน่าเชื่อถือของแบรนด์,
              ระบบความปลอดภัย และมาตรฐานการบริการ
            </p>
            <ul className="list-disc pl-5 text-muted-foreground space-y-2">
              <li>ระบบฝากถอนอัตโนมัติและรวดเร็ว</li>
              <li>ความปลอดภัยระดับมาตรฐานสากล</li>
              <li>ทีมซัพพอร์ตพร้อมดูแลตลอด 24 ชั่วโมง</li>
            </ul>

            <div className="card-casino p-5">
              <h2 className="text-lg font-bold text-foreground mb-3">Trust Signals</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                {trustSignals.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                ดูรีวิวผู้เล่นจริงที่ <a href="/reviews" className="gold-text hover:underline">/reviews</a>
              </p>
            </div>
          </div>
        </section>

        <WhyChooseSection />
        <SecuritySection />
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default About;
