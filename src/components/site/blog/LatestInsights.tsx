import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { BlogCard } from "./BlogCard";

export function LatestInsights() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Blog"
          title="Latest Insights"
          description="Stay informed with practical guides, industry insights, and expert tips on electrical and building material solutions."
          align="center"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 6).map((post, i) => (
            <Reveal key={post.slug} delay={i * 70} className="h-full">
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-bold"
          >
            View All Blogs <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
