import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ComparisonSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-dark py-20 md:py-28">
      <div className="container max-w-3xl">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-center mb-12 text-balance">
          เปรียบเทียบเว็บป๊อกเด้ง Poksod กับเว็บอื่น
        </h2>

        <div className="scroll-reveal overflow-x-auto" style={{ transitionDelay: "100ms" }}>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted-foreground font-semibold">คุณสมบัติ</th>
                <th className="py-4 px-4 gold-text font-bold text-center">Poksod.com</th>
                <th className="py-4 px-4 text-muted-foreground text-center">เว็บทั่วไป</th>
              </tr>
            </thead>
            <tbody className="text-foreground/80">
              {[
                ["ฝากถอนออโต้", "✅ 3 วินาที", "❌ รอ 5-30 นาที"],
                ["ขั้นต่ำ", "✅ 1 บาท", "❌ 100-300 บาท"],
                ["โบนัสสมาชิกใหม่", "✅ 100%", "❌ 20-50%"],
                ["ป๊อกเด้งออนไลน์ 24 ชม.", "✅ ตลอดวัน", "❌ จำกัดเวลา"],
                ["ระบบความปลอดภัย", "✅ SSL 256-bit", "❌ ไม่มี"],
                ["คืนยอดเสีย", "✅ 10% ทุกสัปดาห์", "❌ ไม่มี"],
              ].map(([feature, us, them]) => (
                <tr key={feature} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-3 px-4 font-medium">{feature}</td>
                  <td className="py-3 px-4 text-center">{us}</td>
                  <td className="py-3 px-4 text-center">{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-10 scroll-reveal" style={{ transitionDelay: "200ms" }}>
          <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold">เลือก Poksod วันนี้</a>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
