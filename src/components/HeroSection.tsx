import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroCasino from "@/assets/hero-casino.jpg";

const HeroSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroCasino}
          alt="เว็บป๊อกเด้ง 2 ใบ ออนไลน์"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-6">
          <div className="scroll-reveal">
            <span className="inline-block border border-border px-4 py-1.5 rounded-full text-sm gold-text mb-4">
              🏆 เว็บป๊อกเด้งอันดับ 1 ในไทย
            </span>
          </div>

          <h1 className="scroll-reveal text-4xl md:text-5xl lg:text-6xl font-black gold-text gold-glow text-balance leading-[1.1]" style={{ transitionDelay: "80ms" }}>
            เว็บป๊อกเด้ง 2 ใบ อันดับ 1 เล่นง่าย ได้เงินจริง
          </h1>

          <p className="scroll-reveal text-lg md:text-xl text-foreground/80 max-w-lg" style={{ transitionDelay: "160ms" }}>
            รวมเกมป๊อกเด้งออนไลน์ ฝากถอนออโต้ โบนัสจัดเต็ม สมัครง่ายภายใน 30 วินาที
          </p>

          <div className="scroll-reveal flex flex-wrap gap-4 pt-4" style={{ transitionDelay: "240ms" }}>
            <a
              href="https://line.me/R/ti/p/@521ubspd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold animate-pulse-glow text-center"
            >
              สมัครสมาชิก
            </a>
            <a
              href="https://lin.ee/8mo8SO2"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-bold text-lg border border-border text-foreground hover:bg-muted transition-all duration-300 active:scale-[0.97] text-center"
            >
              แอดไลน์ @poksod
            </a>
          </div>

          <div className="scroll-reveal flex gap-8 pt-6 text-sm text-muted-foreground" style={{ transitionDelay: "320ms" }}>
            <div><span className="gold-text font-bold text-2xl">50,000+</span><br />สมาชิกทั่วไทย</div>
            <div><span className="gold-text font-bold text-2xl">3 วิ</span><br />ฝาก-ถอนออโต้</div>
            <div><span className="gold-text font-bold text-2xl">24/7</span><br />บริการตลอดวัน</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
