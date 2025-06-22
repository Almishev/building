export default function ContactSchema() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Контакти - Concrete Company",
    "description": "Свържете се с нас за професионално шлайфане на бетон в София, Пловдив и Благоевград",
    "url": "https://building-gray.vercel.app/#contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Concrete Company - Парапанов груп",
      "description": "Професионално шлайфане на бетон в западна и централна България",
      "url": "https://building-gray.vercel.app",
      "logo": "https://building-gray.vercel.app/assets/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+359-XXX-XXX-XXX",
          "contactType": "customer service",
          "areaServed": ["BG"],
          "availableLanguage": ["Bulgarian"]
        },
        {
          "@type": "ContactPoint",
          "email": "info@concrete-company.bg",
          "contactType": "customer service",
          "areaServed": ["BG"],
          "availableLanguage": ["Bulgarian"]
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "София",
        "addressCountry": "BG"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "София"
        },
        {
          "@type": "City",
          "name": "Пловдив"
        },
        {
          "@type": "City",
          "name": "Благоевград"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "42.6977",
          "longitude": "23.3219"
        },
        "geoRadius": "150000"
      },
      "openingHours": "Mo-Fr 08:00-18:00",
      "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
      "currenciesAccepted": "BGN"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
    />
  );
} 