import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BlogPostCard from "@/components/BlogPostCard";
import Badge from "@/components/Badge";
import { blogCategories, blogPosts } from "@/lib/blog-data";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog | " + site.name,
  description:
    "Local SEO insights on Google Business Profile optimization, citation building, reviews & reputation, and AEO/GEO for AI search.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Local SEO Insights"
        description="Practical guides on Google Business Profile, local SEO strategy, reviews, citations and showing up in AI-powered search."
      />

      <section className="container-page py-16 md:py-24">
        <div className="flex flex-wrap gap-2 mb-10">
          {blogCategories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
