import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Button from "@/components/Button";
import { blogPosts } from "@/lib/blog-data";
import { site, siteUrl } from "@/lib/site-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Blog | " + site.name };
  }

  return {
    title: `${post.title} | ${site.name}`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@id": `${siteUrl}/#person` },
    publisher: { "@id": `${siteUrl}/#business` },
    articleSection: post.category,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={`${post.category} · ${publishedDate} · ${post.readTime}`}
        title={post.title}
        description={post.excerpt}
      />

      <article className="container-page py-16 md:py-24">
        <div className="max-w-2xl mx-auto space-y-6">
          {post.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2 key={i} className="font-display text-xl md:text-2xl font-bold mt-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "list") {
              return (
                <ul key={i} className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2 text-dark/70">
                      <span className="text-lime mt-1">◆</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-dark/70 leading-relaxed">
                {block.text}
              </p>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-lime p-8 md:p-12 text-center max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-dark">
            Want this applied to your business?
          </h2>
          <div className="mt-6 flex justify-center">
            <Button href="/contact" variant="dark">
              {site.ctaPrimary}
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
