import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import GameSection from "@/components/GameSection";
import PromotionSection from "@/components/PromotionSection";
import HowToPlaySection from "@/components/HowToPlaySection";
import ReviewSection from "@/components/ReviewSection";
import ComparisonSection from "@/components/ComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema } from "@/lib/seo-schema";

const homeSchema = buildWebPageSchema({
  name: "POKSOD เว็บป๊อกเด้งออนไลน์อันดับ 1",
  path: "/",
  description: "เว็บหลัก POKSOD รวมหน้าเล่นป๊อกเด้ง บทความ รีวิว และโปรโมชั่น พร้อมสมัครผ่าน LINE",
});

const homeBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
]);

const Index = () => {
  usePageSeo({
    title: "POKSOD เว็บป๊อกเด้งออนไลน์อันดับ 1 | ฝากถอนออโต้",
    description: "เว็บหลัก POKSOD รวมหน้าเล่นป๊อกเด้ง บทความ รีวิว และโปรโมชั่น พร้อมสมัครผ่าน LINE",
    path: "/",
  });

  return (
    <>
      <Navbar />
      <main>
        <JsonLd data={[homeSchema, homeBreadcrumbSchema]} />
        <HeroSection />
        <WhyChooseSection />
        <GameSection />
        <PromotionSection />
        <HowToPlaySection />
        <ReviewSection />
        <ComparisonSection />
        <SecuritySection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Index;
