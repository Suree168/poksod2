import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import goldCoins from "@/assets/gold-coins.jpg";

const promos = [
  { title: "สมาชิกใหม่ โบนัส 100%", desc: "สมัครวันนี้รับโบนัสเพิ่มทันที 100% สูงสุด 5,000 บาท", tag: "🔥 ยอดนิยม" },
  { title: "ฝากรายวัน รับเพิ่ม 20%", desc: "ฝากทุกวัน รับโบนัสเพิ่มสูงสุด 2,000 บาท ทุกยอดฝาก", tag: "💰 ทุกวัน" },
  { title: "คืนยอดเสีย 10%", desc: "ไม่ว่าผลจะเป็นอย่างไร คืนยอดเสียให้ทุกสัปดาห์", tag: "🎁 ทุกสัปดาห์" },
];

const PromotionSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="promotion" className="section-crimson py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-reveal hidden lg:block">
            <img
              src={goldCoins}
              alt="โปรโมชั่นเว็บป๊อกเด้ง โบนัสจัดเต็ม"
              className="rounded-xl gold-border-glow w-full"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow mb-4 text-balance">
              โปรโมชั่นเว็บป๊อกเด้ง
            </h2>
            <p className="scroll-reveal text-foreground/70 mb-8" style={{ transitionDelay: "80ms" }}>
              รับโบนัสสุดพิเศษเมื่อสมัครเล่นป๊อกเด้งออนไลน์กับเรา สมัครวันนี้เท่านั้น!
            </p>

            <div className="space-y-4">
              {promos.map((p, i) => (
                <div
                  key={p.title}
                  className="scroll-reveal card-casino p-5 flex gap-4 items-start"
                  style={{ transitionDelay: `${(i + 2) * 80}ms` }}
                >
                  <div className="flex-1">
                    <span className="text-xs gold-text font-semibold">{p.tag}</span>
                    <h3 className="font-bold text-foreground mt-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                  <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-4 py-2 shrink-0">
                    รับโบนัส
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;
