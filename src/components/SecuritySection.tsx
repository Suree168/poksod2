import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import securityShield from "@/assets/pokdeng-security-ssl-shield.jpg";

const SecuritySection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-crimson py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow mb-4 text-balance">
              เว็บป๊อกเด้งปลอดภัย มั่นใจได้ 100%
            </h2>
            <p className="scroll-reveal text-foreground/70 mb-6" style={{ transitionDelay: "80ms" }}>
              Poksod.com ให้ความสำคัญกับความปลอดภัยของสมาชิกทุกท่าน ด้วยระบบรักษาความปลอดภัยระดับสากล เพื่อให้คุณเล่นป๊อกเด้งออนไลน์ได้อย่างอุ่นใจ
            </p>
            <ul className="scroll-reveal space-y-3 text-foreground/80" style={{ transitionDelay: "160ms" }}>
              {[
                "เข้ารหัส SSL 256-bit ทุกธุรกรรม",
                "ระบบยืนยันตัวตน 2 ชั้น (2FA)",
                "เซิร์ฟเวอร์มาตรฐาน ISO 27001",
                "ได้รับใบอนุญาตถูกต้องตามกฎหมาย",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="gold-text">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="scroll-reveal hidden lg:block" style={{ transitionDelay: "200ms" }}>
            <img
              src={securityShield}
              alt="ระบบความปลอดภัย SSL 256-bit เว็บป๊อกเด้ง POKSOD มาตรฐาน ISO 27001"
              className="rounded-xl gold-border-glow w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
