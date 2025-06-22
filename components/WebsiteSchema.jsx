export default function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Concrete Company - Парапанов груп",
    "description": "Професионално шлайфане на бетон в София, Пловдив и Благоевград. Хеликоптери, ръчни машини и цялостни решения за индустриални подове.",
    "url": "https://www.concretecompany.online",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.concretecompany.online/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Concrete Company - Парапанов груп",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.concretecompany.online/assets/logo.png"
      }
    },
    "inLanguage": "bg-BG",
    "isAccessibleForFree": true,
    "copyrightYear": 2025,
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Concrete Company - Парапанов груп"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
} 