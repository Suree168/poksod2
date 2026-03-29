const StickyButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href="https://line.me/R/ti/p/@521ubspd"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold animate-pulse-glow text-center rounded-full px-6 py-3 text-sm shadow-2xl"
      >
        สมัครเลย
      </a>
      <a
        href="https://lin.ee/8mo8SO2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="เพิ่มเพื่อน LINE"
        className="bg-[hsl(120,60%,35%)] text-[hsl(0,0%,100%)] font-bold text-center rounded-full px-6 py-3 text-sm shadow-2xl hover:brightness-110 transition-all active:scale-[0.97]"
      >
        LINE
      </a>
    </div>
  );
};

export default StickyButton;
