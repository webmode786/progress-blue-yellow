import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { formatBlogDate, type BlogPost } from "@/data/blogs";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="border-border bg-card group flex h-full flex-col overflow-hidden rounded-lg border transition-colors duration-300 hover:border-accent">
      <Link to="/blogs/$slug" params={{ slug: post.slug }} className="block aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="text-muted-foreground flex items-center gap-3 text-xs">
          <span className="text-primary font-semibold tracking-wide uppercase">{post.category}</span>
          <span aria-hidden="true">•</span>
          <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" aria-hidden="true" /> {post.readMinutes} min
          </span>
        </div>
        <h3 className="text-foreground mt-3 text-lg leading-snug font-bold">
          <Link to="/blogs/$slug" params={{ slug: post.slug }} className="hover:text-primary">
            {post.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
        <Link
          to="/blogs/$slug"
          params={{ slug: post.slug }}
          className="text-primary hover:text-accent mt-5 inline-flex items-center gap-2 text-sm font-bold"
          aria-label={`Read more: ${post.title}`}
        >
          Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
