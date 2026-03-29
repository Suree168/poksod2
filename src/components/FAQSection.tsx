import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const faqs = [
  {
    q: "ป๊อกเด้งออนไลน์ได้เงินจริงไหม?",
    a: "ได้เงินจริง 100% ครับ Poksod.com เป็นเว็บป๊อกเด้งที่จ่ายจริงทุกยอด ถอนได้ไม่มีขั้นต่ำ ระบบออโต้ภายใน 3 วินาที สมาชิกกว่า 50,000 คนไว้วางใจ",
  },
  {
    q: "เว็บป๊อกเด้งที่ดีที่สุดคืออะไร?",
    a: "Poksod.com คือเว็บป๊อกเด้งอันดับ 1 ในไทย ด้วยระบบฝากถอนออโต้ที่เร็วที่สุด โบนัสสูงสุด 100% ระบบเสถียร ปลอดภัย และมีเกมป๊อกเด้ง 2 ใบ ให้เลือกเล่นหลากหลายรูปแบบ",
  },
  {
    q: "ฝากขั้นต่ำเท่าไหร่?",
    a: "ฝากขั้นต่ำเพียง 1 บาท เท่านั้น ไม่ว่าจะงบน้อยหรืองบมาก ก็สามารถเล่นป๊อกเด้งออนไลน์กับเราได้",
  },
  {
    q: "ถอนเงินนานไหม?",
    a: "ไม่นานเลยครับ ระบบถอนออโต้ทำรายการภายใน 3 วินาที ไม่มีขั้นต่ำ ไม่ต้องทำเทิร์น ถอนได้ตลอด 24 ชั่วโมง",
  },
];

const FAQSection = () => {
  const ref = useScrollReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section ref={ref} className="section-crimson py-20 md:py-28">
      <div className="container max-w-3xl">
        <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-center mb-12 text-balance">
          คำถามที่พบบ่อยเกี่ยวกับป๊อกเด้งออนไลน์
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="scroll-reveal card-casino"
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
              >
                <h3 className="font-bold text-foreground">{faq.q}</h3>
                <span className="gold-text text-xl shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
