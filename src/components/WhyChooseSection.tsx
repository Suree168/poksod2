import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import whyChoose from "@/assets/why-choose.jpg";
import { Shield, Clock, Zap, Headphones } from "lucide-react";

const features = [
  { icon: Zap, title: "ฝากถอนออโต้", desc: "ระบบฝากถอนอัตโนมัติ รวดเร็วภายใน 3 วินาที ไม่ต้องรอแอดมิน" },
  { icon: Clock, title: "เล่นป๊อกเด้งออนไลน์ 24 ชม.", desc: "เปิดให้บริการตลอด 24 ชั่วโมง เล่นได้ทุกที่ทุกเวลา" },
  { icon: Shield, title: "ระบบเสถียร ปลอดภัย 100%", desc: "เซิร์ฟเวอร์มาตรฐานสากล เข้ารหัส SSL 256-bit" },
  { icon: Headphones, title: "ทีมงานดูแลตลอด", desc: "สอบถามได้ตลอดเวลา ทั้งไลน์และแชทสด" },
];

const WhyChooseSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-crimson py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow mb-4 text-balance">
              ทำไมต้องเลือกเว็บป๊อกเด้งของเรา?
            </h2>
            <p className="scroll-reveal text-foreground/70 mb-10" style={{ transitionDelay: "80ms" }}>
              Poksod.com คือเว็บป๊อกเด้งออนไลน์ที่ผู้เล่นไว้วางใจมากที่สุด ด้วยระบบที่ทันสมัยและบริการระดับพรีเมียม
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className="scroll-reveal card-casino p-6"
                  style={{ transitionDelay: `${(i + 2) * 80}ms` }}
                >
                  <f.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="scroll-reveal hidden lg:block" style={{ transitionDelay: "200ms" }}>
            <img
              src={whyChoose}
              alt="เว็บป๊อกเด้งออนไลน์ ฝากถอนออโต้ ปลอดภัย"
              className="rounded-xl gold-border-glow w-full"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center mt-12 scroll-reveal" style={{ transitionDelay: "100ms" }}>
          <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold">สมัครเล่นป๊อกเด้งออนไลน์</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
