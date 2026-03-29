const Navbar = () => {
  return (
    <nav aria-label="เมนูหลัก" className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="text-xl font-black gold-text gold-glow tracking-tight">
          POKSOD
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm text-foreground/70">
          <a href="/pokdeng-2-bai" className="hover:text-primary transition-colors">ป๊อกเด้ง 2 ใบ</a>
          <a href="/promotions" className="hover:text-primary transition-colors">โปรโมชั่น</a>
          <a href="/blog" className="hover:text-primary transition-colors">บทความ</a>
          <a href="/reviews" className="hover:text-primary transition-colors">รีวิว</a>
          <a href="/about" className="hover:text-primary transition-colors">เกี่ยวกับเรา</a>
        </div>
        <a href="https://line.me/R/ti/p/@521ubspd" target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-5 py-2.5">สมัคร</a>
      </div>
    </nav>
  );
};

export default Navbar;
