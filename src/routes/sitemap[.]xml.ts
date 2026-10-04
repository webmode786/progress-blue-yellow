import { createFileRoute } from "@tanstack/react-router";
import { getRouterInstance } from "@tanstack/react-start";
import {
  isSitemapRouteIncluded,
  sitemapPathForLocation,
  sitemapStaticPaths,
  sitemapXML,
  type SitemapEntry,
} from "@/lib/sitemap";
import { productCategories, products } from "@/data/products";
import { blogs } from "@/data/blogs";

const BASE_URL = "https://progress-blue-yellow.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  staticData: { sitemap: false },
  server: {
    handlers: {
      GET: async () => {
        const router = await getRouterInstance();
        const entries: SitemapEntry[] = sitemapStaticPaths(router).map((path) => ({ path }));

        const categoryRouteId = "/products/$category/";
        if (isSitemapRouteIncluded(router.routesById[categoryRouteId])) {
          for (const category of productCategories) {
            const location = router.buildLocation({
              to: "/products/$category",
              params: { category: category.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, categoryRouteId);
            if (path) entries.push({ path });
          }
        }

        const productRouteId = "/products/$category/$product";
        if (isSitemapRouteIncluded(router.routesById[productRouteId])) {
          for (const product of products) {
            const location = router.buildLocation({
              to: "/products/$category/$product",
              params: { category: product.categorySlug, product: product.slug },
              search: () => ({}),
              hash: "",
            });
            const path = sitemapPathForLocation(router, location, productRouteId);
            if (path) entries.push({ path });
          }
        }

        for (const b of blogs) entries.push({ path: `/blogs/${b.slug}` });

        if (entries.length === 0) {
          return new Response(
            'No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting "exclude-subtree" on the root excludes the entire site.',
            { status: 404, headers: { "Cache-Control": "no-store" } },
          );
        }
        return new Response(sitemapXML(BASE_URL, entries), {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
