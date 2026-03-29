import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  { name: "คุณเอ็ม", text: "เล่นป๊อกเด้งออนไลน์กับ Poksod มาเกือบปี ฝากถอนไว ไม่เคยมีปัญหาเลยครับ", amount: "+12,500 บาท" },
  { name: "คุณแนน", text: "ชอบมากค่ะ เว็บป๊อกเด้งที่จ่ายจริง ถอนได้ทุกครั้ง ระบบเสถียรมาก", amount: "+8,300 บาท" },
  { name: "คุณบอส", text: "เคยเล่นเว็บอื่นมาก่อน มาเจอ Poksod ดีกว่าเยอะ โปรเยอะ ได้เงินจริง", amount: "+23,000 บาท" },
];

const ReviewSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="section-crimson py-20 md:py-28">
      <div className="container">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-center mb-4 text-balance">
          รีวิวเว็บป๊อกเด้ง จากผู้เล่นจริง
        </h2>
        <p className="scroll-reveal text-center text-muted-foreground mb-12" style={{ transitionDelay: "80ms" }}>
          เสียงจากสมาชิกที่เล่นป๊อกเด้งได้เงินจริงกับเรา
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="scroll-reveal card-casino p-6"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center gold-text font-bold">
                  {r.name[3]}
                </div>
                <div>
                  <div className="font-bold text-foreground">{r.name}</div>
                  <div className="text-xs gold-text font-semibold">{r.amount}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">"{r.text}"</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
