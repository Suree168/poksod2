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

        <section className="section-dark py-12 md:py-16">
          <div className="container max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold gold-text gold-glow mb-6">โครงสร้างเนื้อหาเว็บไซต์</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <a href="/pokdeng-2-bai" className="card-casino p-4 hover:brightness-110 transition-all">
                <h3 className="font-bold text-foreground mb-1">Pillar</h3>
                <p className="text-xs text-muted-foreground">/pokdeng-2-bai</p>
              </a>
              <a href="/blog" className="card-casino p-4 hover:brightness-110 transition-all">
                <h3 className="font-bold text-foreground mb-1">Content</h3>
                <p className="text-xs text-muted-foreground">/blog</p>
              </a>
              <a href="/reviews" className="card-casino p-4 hover:brightness-110 transition-all">
                <h3 className="font-bold text-foreground mb-1">Review</h3>
                <p className="text-xs text-muted-foreground">/reviews</p>
              </a>
              <a href="/about" className="card-casino p-4 hover:brightness-110 transition-all">
                <h3 className="font-bold text-foreground mb-1">Trust</h3>
                <p className="text-xs text-muted-foreground">/about</p>
              </a>
              <a href="/promotions" className="card-casino p-4 hover:brightness-110 transition-all">
                <h3 className="font-bold text-foreground mb-1">Promotion</h3>
                <p className="text-xs text-muted-foreground">/promotions</p>
              </a>
            </div>
          </div>
        </section>

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
