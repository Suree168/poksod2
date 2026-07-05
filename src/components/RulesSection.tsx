import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const RulesSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="rules" className="section-dark py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-center mb-4 text-balance">
          กติกาและแต้มไพ่
        </h2>
        <p className="scroll-reveal text-center text-muted-foreground mb-10" style={{ transitionDelay: "80ms" }}>
          ศึกษากติกาป๊อกเด้งและแต้มไพ่ให้ชนะง่ายขึ้น
        </p>

        <div className="scroll-reveal card-casino p-4 md:p-6 overflow-hidden" style={{ transitionDelay: "160ms" }}>
          <img
            src="/rules.jpg"
            alt="กติกาและแต้มไพ่ป๊อกเด้ง"
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
