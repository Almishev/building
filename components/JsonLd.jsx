export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Concrete Company - Парапанов груп",
    "description": "Професионално шлайфане на бетон в София, Пловдив и Благоевград. Хеликоптери, ръчни машини и цялостни решения за индустриални подове.",
    "url": "https://building-gray.vercel.app/",
    "logo": "https://building-gray.vercel.app/assets/logo.png",
    "image": "https://building-gray.vercel.app/assets/logo.png",
    "telephone": "0894320214",
    "email": "infoconcretecompany@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "София",
      "addressCountry": "BG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "42.6977",
      "longitude": "23.3219"
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
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Услуги за шлайфане на бетон",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Хеликоптери с оператор",
            "description": "Шлайфане на големи индустриални площи с мощни хеликоптери"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ръчноводими шлайф машини",
            "description": "Прецизно шлайфане на по-малки площи и труднодостъпни места"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ръчноводими пердашки машини",
            "description": "Финална обработка на прясно положен бетон"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Цялостни решения",
            "description": "Пълно обслужване от подготовка до финално запечатване"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/concretecompany",
      "https://www.linkedin.com/company/concrete-company"
    ],
    "openingHours": "Mo-Fr 08:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "BGN"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
} 