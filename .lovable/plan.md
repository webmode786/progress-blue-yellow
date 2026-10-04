# Product navigation and sitemap

## Changes
- Make product detail URLs use the existing solid header treatment so the coloured Skyline logo and dark navigation are visible immediately.
- Add a public `/sitemap` page listing the main site pages, all product categories, all products, and all blog articles.
- Add a Sitemap link in the footer.
- Keep the existing generated `/sitemap.xml` endpoint and robots.txt declaration, extending route decisions only where needed for the new page.

## Verification
- Check the product detail header, footer link, sitemap page links, sitemap XML response, and mobile layout.
- Confirm the project builds without errors.

## Technical details
- Reuse the structured product, category, blog, route, header, and footer data already in the project.
- Give the sitemap page unique SEO metadata and include it in the generated XML sitemap.
