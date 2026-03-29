import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import pokerChips from "@/assets/poker-chips.jpg";
import playingCards from "@/assets/playing-cards.jpg";

const games = [
  { img: pokerChips, title: "ป๊อกเด้ง 2 ใบ", desc: "เกมป๊อกเด้งออนไลน์ยอดฮิต เล่นง่าย ได้เงินจริง", alt: "เล่นป๊อกเด้ง 2 ใบ ได้เงินจริง" },
  { img: playingCards, title: "ไพ่ป๊อกเด้งออนไลน์", desc: "เกมไพ่ได้เงินจริง ถ่ายทอดสดจากคาสิโน", alt: "เกมไพ่ป๊อกเด้งออนไลน์ได้เงินจริง" },
  { img: pokerChips, title: "คาสิโนได้เงินจริง", desc: "รวมเกมคาสิโนออนไลน์ครบวงจร pokdeng online", alt: "คาสิโนออนไลน์ได้เงินจริง" },
];

const GameSection = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} id="games" className="section-dark py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="scroll-reveal text-3xl md:text-4xl font-bold gold-text gold-glow text-balance">
            ป๊อกเด้งออนไลน์ได้เงินจริง
          </h2>
          <p className="scroll-reveal text-muted-foreground mt-3 max-w-xl mx-auto" style={{ transitionDelay: "80ms" }}>
            เลือกเล่นเกมป๊อกเด้งได้เงินจริง หลากหลายรูปแบบ ทั้ง pokdeng online และเกมไพ่คาสิโนยอดนิยม
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((g, i) => (
            <div
              key={g.title}
              className="scroll-reveal card-casino group"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={g.img}
                  alt={g.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{g.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{g.desc}</p>
                <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold inline-block text-sm px-6 py-3">
                  เล่นเลย
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
