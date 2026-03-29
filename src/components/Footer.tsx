const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="text-xl font-black gold-text gold-glow">POKSOD</span>
            <p className="text-sm text-muted-foreground mt-3">
              เว็บป๊อกเด้งออนไลน์อันดับ 1 ฝากถอนออโต้ เล่นป๊อกเด้ง 2 ใบ ได้เงินจริง
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">เกมยอดนิยม</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/pokdeng-2-bai" className="hover:text-primary transition-colors">ป๊อกเด้ง 2 ใบ</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">บทความกลยุทธ์</a></li>
              <li><a href="/reviews" className="hover:text-primary transition-colors">รีวิวผู้เล่น</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">ข้อมูล</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/promotions" className="hover:text-primary transition-colors">โปรโมชั่น</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">เกี่ยวกับเรา</a></li>
              <li><a href="https://lin.ee/8mo8SO2" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ติดต่อเรา</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-3">ติดต่อ</h3>
            <p className="text-sm text-muted-foreground">LINE: @poksod</p>
            <p className="text-sm text-muted-foreground mt-1">บริการ 24 ชั่วโมง</p>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © 2026 Poksod.com — เว็บป๊อกเด้งออนไลน์ได้เงินจริง | pokdeng online
        </div>
      </div>
    </footer>
  );
};

export default Footer;
