import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  { num: "1", title: "สมัครสมาชิก", desc: "กรอกข้อมูลง่ายๆ ไม่ถึง 30 วินาที ผ่านเว็บหรือแอดไลน์" },
  { num: "2", title: "ฝากเงิน", desc: "ฝากขั้นต่ำเพียง 1 บาท ระบบออโต้ เข้าภายใน 3 วินาที" },
  { num: "3", title: "เลือกเกมป๊อกเด้ง", desc: "เลือกห้องเล่นป๊อกเด้ง 2 ใบ ตามงบประมาณที่ต้องการ" },
  { num: "4", title: "ถอนเงิน", desc: "ชนะแล้วถอนได้ทันที ไม่มีขั้นต่ำ ไม่ต้องทำเทิร์น" },
];

const HowToPlaySection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="content" className="section-dark py-20 md:py-28">
      <div className="container max-w-3xl">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-center mb-4 text-balance">
          วิธีเล่นป๊อกเด้ง 2 ใบ
        </h2>
        <p className="scroll-reveal text-center text-muted-foreground mb-12" style={{ transitionDelay: "80ms" }}>
          เริ่มเล่นป๊อกเด้งออนไลน์ได้เงินจริงง่ายๆ เพียง 4 ขั้นตอน
        </p>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="scroll-reveal card-casino p-6 flex gap-5 items-start"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black text-xl shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal" style={{ transitionDelay: "100ms" }}>
          <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold">สมัครเล่นป๊อกเด้งเลย</a>
        </div>
      </div>
    </section>
  );
};

export default HowToPlaySection;
