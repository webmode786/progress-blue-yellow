import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Serves AI-readable Markdown (*.md), /llms.txt and /llms-full.txt from live site data.
const markdownMiddleware = createMiddleware().server(async ({ next, request }) => {
  const { pathname } = new URL(request.url);
  if (request.method === "GET" && (pathname.endsWith(".md") || pathname === "/llms.txt" || pathname === "/llms-full.txt")) {
    const md = await import("./lib/markdown");
    if (pathname === "/llms.txt") return md.textResponse(md.llmsTxt(), "text/plain");
    if (pathname === "/llms-full.txt") return md.textResponse(md.llmsFullTxt(), "text/plain");
    const body = md.markdownForPath(pathname);
    if (body) return md.textResponse(body, "text/markdown");
  }
  return next();
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, markdownMiddleware, csrfMiddleware],
}));
