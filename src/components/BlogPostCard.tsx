import Link from "next/link";
import Badge from "./Badge";
import { BlogPost } from "@/lib/blog-data";

export default function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl border border-line bg-white p-6 hover:border-dark/30 transition-colors"
    >
      <div className="flex items-center justify-between gap-2 mb-3">
        <Badge variant="dark">{post.category}</Badge>
        <span className="text-xs text-dark/40">{post.readTime}</span>
      </div>
      <h3 className="font-display text-xl font-bold mb-2 group-hover:underline">{post.title}</h3>
      <p className="text-sm text-dark/60">{post.excerpt}</p>
      <p className="mt-4 text-xs text-dark/40">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </Link>
  );
}
