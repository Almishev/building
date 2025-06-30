import { DM_Sans, Barlow } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSchema from "@/components/FaqSchema";
import ContactSchema from "@/components/ContactSchema";
import WebsiteSchema from "@/components/WebsiteSchema";

const dmSans = DM_Sans({
  variable: "--font-dmSans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Concrete Company - Шлайфане на бетон",
  description: "Професионално шлайфане на бетон в София, Пловдив и Благоевград. Хеликоптери, ръчни машини и цялостни решения за индустриални подове. Безплатна консултация и оферта.",
  keywords: "шлайфане на бетон, хеликоптери за бетон, ръчни шлайф машини, пердашки за бетон, индустриални подове, София, Пловдив, Благоевград, Парапанов груп",
  authors: [{ name: "Concrete Company - Парапанов груп" }],
  creator: "Concrete Company",
  publisher: "Concrete Company",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.concretecompany.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Concrete Company - Шлайфане на бетон в София, Пловдив, Благоевград",
    description: "Професионално шлайфане на бетон с модерно оборудване. Хеликоптери, ръчни машини и цялостни решения за индустриални подове.",
    url: 'https://www.concretecompany.online',
    siteName: 'Concrete Company - Парапанов груп',
    locale: 'bg_BG',
    type: 'website',
    images: [
      {
        url: '/assets/logo.png',
        width: 1200,
        height: 630,
        alt: 'Concrete Company - Шлайфане на бетон',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Concrete Company - Шлайфане на бетон в София, Пловдив, Благоевград",
    description: "Професионално шлайфане на бетон с модерно оборудване. Хеликоптери, ръчни машини и цялостни решения.",
    images: ['/assets/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'IADpND0Ud-AkKZl4tI5MW1TfW5aaK-gRlO_R-jlxNxU',
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bg">
      <head>
        <JsonLd />
        <FaqSchema />
        <ContactSchema />
        <WebsiteSchema />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Concrete Company - Парапанов груп",
              "image": "https://www.concretecompany.online/assets/logo.png",
              "url": "https://www.concretecompany.online",
              "telephone": "+359 88 123 4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Георги Раковски 1",
                "addressLocality": "Гоце Делчев",
                "addressCountry": "BG"
              },
              "openingHours": "Mo-Fr 09:00-18:00",
              "sameAs": [
                "https://www.facebook.com/concretecompanybg",
                "https://www.instagram.com/concretecompanybg/"
              ]
            })
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17054174704"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17054174704');
          `
        }} />
      </head>
      <body className={`${dmSans.variable} ${barlow.variable} antialiased`}>
        <Header />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
