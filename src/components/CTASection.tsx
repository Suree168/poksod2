import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const CTASection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="register" className="section-dark py-20 md:py-28">
      <div className="container max-w-2xl text-center">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow mb-4 text-balance">
          สมัครเว็บป๊อกเด้งวันนี้ รับโบนัสทันที
        </h2>
        <p className="scroll-reveal text-foreground/70 mb-8" style={{ transitionDelay: "80ms" }}>
          อย่ารอช้า สมัครเล่นป๊อกเด้ง 2 ใบ ออนไลน์ได้เงินจริงกับเว็บอันดับ 1 ของไทย โปรโมชั่นนี้มีจำนวนจำกัด สมัครวันนี้เท่านั้น!
        </p>
        <div className="scroll-reveal flex flex-wrap justify-center gap-4" style={{ transitionDelay: "160ms" }}>
          <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold animate-pulse-glow text-xl px-12 py-5">
            สมัครสมาชิกเลย
          </a>
          <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="px-12 py-5 rounded-lg font-bold text-xl border border-border text-foreground hover:bg-muted transition-all duration-300 active:scale-[0.97]">
            สมัครเล่นป๊อกเด้งเลย
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
