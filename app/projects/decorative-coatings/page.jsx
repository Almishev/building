import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Декоративни покрития - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Декоративни покрития и шлайфане на бетон в София, Пловдив и Благоевград. Специализирани решения за естетични бетонови подове и мозайки.",
  keywords: "декоративни покрития, мозайки, естетични бетонови подове, декоративен бетон, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/decorative-coatings',
  },
};

const DecorativeCoatingsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">
          Декоративни покрития от бетон
        </h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Декоративни покрития от бетон"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="h2 mb-4">Артистичност и индивидуален стил</h2>
            <p className="text-muted-foreground mb-4">
              Декоративните покрития от бетон са отличен избор за създаване на уникални и впечатляващи интериорни и екстериорни пространства. Чрез различни техники и цветове, обикновеният бетон се превръща в истинско произведение на изкуството, което подчертава индивидуалността на всеки обект.
            </p>
            <p className="text-muted-foreground mb-6">
              Concrete Company предлага богато разнообразие от декоративни решения – от цветни настилки до артистични мозайки и текстури. Доверете се на нашия опит за под, който ще бъде не само функционален, но и истински акцент във вашия дом или бизнес.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Нашите декоративни възможности:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Оцветяване:</strong>
              Богата палитра от цветове, които се импрегнират в бетона за дълготраен ефект.
            </li>
            <li>
              <strong>Полиране до блясък:</strong>
              Различни нива на полиране - от сатенен мат до огледален гланц.
            </li>
            <li>
              <strong>Ефект "Терацо":</strong>
              Влагане на декоративни камъни, стъкла или мрамор в повърхностния слой за уникална мозаечна визия.
            </li>
            <li>
              <strong>Персонализирани дизайни:</strong>
              Възможност за изрязване на лога, фигури и шарки директно в бетонния под.
            </li>
          </ul>
        </div>
        
        <Link href="/#projects">
          <Button text="Обратно към проектите" />
        </Link>
      </div>

      {/* SEO текст за декоративни покрития */}
      <section className="mt-16 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
        <h2 className="h2 mb-4">Декоративни покрития – артистичност и индивидуален стил</h2>
        <p>
          Декоративните покрития от бетон са отличен избор за създаване на уникални и впечатляващи интериорни и екстериорни пространства. Чрез различни техники и цветове, обикновеният бетон се превръща в истинско произведение на изкуството, което подчертава индивидуалността на всеки обект.
        </p>
        <p className="mt-4">
          Concrete Company предлага богато разнообразие от декоративни решения – от цветни настилки до артистични мозайки и текстури. Доверете се на нашия опит за под, който ще бъде не само функционален, но и истински акцент във вашия дом или бизнес.
        </p>
      </section>
    </section>
  );
};

export default DecorativeCoatingsPage;

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Декоративни покрития",
        "description": metadata.description,
        "image": "https://www.concretecompany.online/assets/img/work/dekorativni-nastilki.jpg",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "София, Пловдив, Благоевград",
            "addressCountry": "BG"
          }
        }
      })
    }}
  />
</head> 