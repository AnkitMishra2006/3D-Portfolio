import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { personalInfo } from "@/data/portfolio";
import { buildStructuredData } from "@/lib/seo";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => {
    const ogImageUrl = `${personalInfo.baseUrl}${personalInfo.ogImage}`;
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: personalInfo.siteTitle },
        {
          name: "description",
          content: personalInfo.metaDescription,
        },
        {
          name: "keywords",
          content:
            "Ankit Mishra, Ankit Kumar Mishra, Ankit Mishra web developer, web developer portfolio, full stack developer, software engineer, React developer, Next.js, Node.js, Python, New Delhi",
        },
        {
          name: "google-site-verification",
          content: "1exsCnp8jDl45AjztvI1dnBkjsMJ8Arp58oSqh70s60",
        },
        { name: "author", content: personalInfo.name },
        { name: "robots", content: "index, follow, max-image-preview:large" },
        { name: "theme-color", content: "#0a0a0a" },
        // Open Graph
        { property: "og:title", content: personalInfo.siteTitle },
        { property: "og:description", content: personalInfo.metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: personalInfo.baseUrl },
        { property: "og:image", content: ogImageUrl },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: `${personalInfo.name} — ${personalInfo.role}`,
        },
        { property: "og:locale", content: "en_US" },
        { property: "og:site_name", content: `${personalInfo.shortName} Portfolio` },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: personalInfo.siteTitle },
        { name: "twitter:description", content: personalInfo.metaDescription },
        { name: "twitter:image", content: ogImageUrl },
        {
          name: "twitter:image:alt",
          content: `${personalInfo.name} — ${personalInfo.role}`,
        },
      ],
      links: [
        { rel: "canonical", href: personalInfo.baseUrl },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap",
        },
        { rel: "stylesheet", href: appCss },
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const structuredData = buildStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
