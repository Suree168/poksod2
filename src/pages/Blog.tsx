import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyButton from "@/components/StickyButton";
import JsonLd from "@/components/JsonLd";
import { usePageSeo } from "@/hooks/use-page-seo";
import { buildBreadcrumbSchema, buildWebPageSchema, toAbsoluteUrl } from "@/lib/seo-schema";
import posts from "@/data/posts.json";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "บทความป๊อกเด้ง POKSOD",
  url: toAbsoluteUrl("/blog"),
  blogPost: posts.map((post, index) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    url: toAbsoluteUrl(post.href),
    position: index + 1,
  })),
};

const blogWebPageSchema = buildWebPageSchema({
  name: "บทความป๊อกเด้ง",
  path: "/blog",
  description: "รวมบทความ SEO ป๊อกเด้งสำหรับมือใหม่และผู้เล่นจริง พร้อมลิงก์ไปหน้า Pillar และโปรโมชั่น",
});

const blogBreadcrumbSchema = buildBreadcrumbSchema([
  { name: "หน้าแรก", path: "/" },
  { name: "บทความ", path: "/blog" },
]);

const Blog = () => {
  usePageSeo({
    title: "บทความป๊อกเด้ง | คู่มือ เทคนิค และกลยุทธ์",
    description: "รวมบทความ SEO ป๊อกเด้งสำหรับมือใหม่และผู้เล่นจริง พร้อมลิงก์ไปหน้า Pillar และโปรโมชั่น",
    path: "/blog",
  });

  return (
    <>
      <Navbar />
      <main className="section-dark py-16 md:py-20 min-h-[70vh]">
        <JsonLd data={[blogSchema, blogWebPageSchema, blogBreadcrumbSchema]} />
        <div className="container max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-black gold-text gold-glow mb-4">บทความป๊อกเด้ง</h1>
          <p className="text-muted-foreground mb-10">
            รวมบทความ เทคนิค และกลยุทธ์ป๊อกเด้งออนไลน์ อัปเดตใหม่ทุกวัน
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.slug} className="card-casino overflow-hidden flex flex-col">
                {post.image && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-foreground mb-3">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{post.summary}</p>
                  {post.date && (
                    <time className="text-xs text-muted-foreground/60 mb-3" dateTime={post.date}>{post.date}</time>
                  )}
                  <a href={post.href} className="btn-gold text-center">อ่านต่อ</a>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <StickyButton />
    </>
  );
};

export default Blog;
