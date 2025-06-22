export default function WebsiteSchema() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Concrete Company - Парапанов груп",
    "description": "Професионално шлайфане на бетон в София, Пловдив и Благоевград. Хеликоптери, ръчни машини и цялостни решения за индустриални подове.",
    "url": "https://building-gray.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://building-gray.vercel.app/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Concrete Company - Парапанов груп",
      "logo": {
        "@type": "ImageObject",
        "url": "https://building-gray.vercel.app/assets/logo.png"
      }
    },
    "inLanguage": "bg-BG",
    "isAccessibleForFree": true,
    "copyrightYear": 2024,
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