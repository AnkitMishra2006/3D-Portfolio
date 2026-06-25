import { personalInfo, faqs, projects, experiences } from "@/data/portfolio";

/**
 * Builds a single, fully-linked schema.org `@graph` for the site.
 *
 * Using one connected graph (with `@id` cross-references) instead of several
 * disconnected JSON-LD blocks is the modern best practice: it lets search
 * engines resolve every entity to the same Person/WebSite node, which is what
 * powers a strong "Ankit Mishra" knowledge entity in search.
 */
export function buildStructuredData() {
  const { baseUrl } = personalInfo;

  const personId = `${baseUrl}/#person`;
  const websiteId = `${baseUrl}/#website`;
  const webpageId = `${baseUrl}/#webpage`;
  const ogImageUrl = `${baseUrl}${personalInfo.ogImage}`;

  const person = {
    "@type": "Person",
    "@id": personId,
    name: personalInfo.name,
    alternateName: [personalInfo.shortName, personalInfo.name.toUpperCase()],
    url: baseUrl,
    image: {
      "@type": "ImageObject",
      url: ogImageUrl,
      caption: `${personalInfo.name} — ${personalInfo.role}`,
    },
    jobTitle: personalInfo.title,
    description: personalInfo.metaDescription,
    email: `mailto:${personalInfo.email}`,
    telephone: personalInfo.phone,
    knowsAbout: personalInfo.expertise,
    knowsLanguage: personalInfo.languages,
    sameAs: [personalInfo.linkedin, personalInfo.github, personalInfo.leetcode],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: personalInfo.university,
    },
    worksFor: {
      "@type": "Organization",
      name: personalInfo.currentCompany,
    },
    nationality: {
      "@type": "Country",
      name: "India",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: baseUrl,
    name: `${personalInfo.shortName} Portfolio`,
    alternateName: `${personalInfo.name} Portfolio`,
    description: personalInfo.metaDescription,
    inLanguage: "en-US",
    publisher: { "@id": personId },
    author: { "@id": personId },
  };

  const webpage = {
    "@type": "ProfilePage",
    "@id": webpageId,
    url: baseUrl,
    name: personalInfo.siteTitle,
    description: personalInfo.metaDescription,
    isPartOf: { "@id": websiteId },
    about: { "@id": personId },
    mainEntity: { "@id": personId },
    inLanguage: "en-US",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
    ],
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${baseUrl}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const projectList = {
    "@type": "ItemList",
    "@id": `${baseUrl}/#projects`,
    name: `Projects by ${personalInfo.name}`,
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.name,
        description: p.description,
        url: p.demoUrl,
        codeRepository: p.githubUrl,
        keywords: p.tech.join(", "),
        author: { "@id": personId },
      },
    })),
  };

  // Surface real work history so the entity has verifiable, dated experience.
  const workHistory = experiences
    .filter((e) => e.type === "work")
    .map((e) => ({
      "@type": "OrganizationRole",
      roleName: e.title,
      worksFor: {
        "@type": "Organization",
        name: e.company,
      },
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      { ...person, hasOccupation: workHistory },
      website,
      webpage,
      breadcrumb,
      faqPage,
      projectList,
    ],
  };
}
