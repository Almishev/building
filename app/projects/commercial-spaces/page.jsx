import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Търговски площи - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Шлайфане на бетон за търговски площи в София, Пловдив и Благоевград. Специализирани решения за търговски центрове, магазини и офис пространства.",
  keywords: "търговски площи, търговски центрове, магазини, офис пространства, бетонови подове, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/commercial-spaces',
  },
};

const CommercialSpacesPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">
          Шлайфан бетон за търговски площи
        </h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в търговски площи"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="h2 mb-4">Стил и функционалност за вашия бизнес</h2>
            <p className="text-muted-foreground mb-4">
              Търговските площи изискват настилка, която да съчетава представителна визия, здравина и лесна поддръжка. Шлайфаният бетон е идеалното решение за магазини, шоуруми и офиси, където дизайнът и практичността са еднакво важни.
            </p>
            <p className="text-muted-foreground mb-6">
              "Concrete Company" предлага индивидуални решения за всеки търговски обект – от избора на цвят и финиш до изпълнението в кратки срокове и с минимално прекъсване на работния процес.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Защо шлайфан бетон за вашия бизнес?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-bold">Представителна визия:</span>
              Създава модерна и луксозна атмосфера, която привлича клиенти.
            </li>
            <li>
              <span className="font-bold">Неограничени дизайнерски възможности:</span>
              Може да се оцветява и обработва за постигане на уникални ефекти.
            </li>
            <li>
              <span className="font-bold">Изключителна хигиеничност:</span>
              Без фуги, където да се събира мръсотия, подът се почиства перфектно.
            </li>
            <li>
              <span className="font-bold">Устойчивост на износване:</span>
              Идеален за зони с висок трафик, без да се притеснявате от износване или надраскване.
            </li>
            <li>
              <span className="font-bold">Оптимизация на разходите:</span>
              Дългосрочно решение, което спестява средства от ремонти и скъпи поддръжки.
            </li>
          </ul>
        </div>
        
        <Link href="/#projects">
          <Button text="Обратно към проектите" />
        </Link>
      </div>

      {/* SEO текст за търговски площи */}
      <section className="mt-16 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
        <h2 className="h2 mb-4">Търговски площи – стил, функционалност и лесна поддръжка</h2>
        <p>
          В търговските обекти подовата настилка трябва да съчетава естетика, здравина и удобство за клиентите. Шлайфаният и полиран бетон е идеален избор за магазини, шоуруми и офиси, където визията и практичността са еднакво важни. Нашите решения осигуряват модерен вид, лесно почистване и устойчивост на интензивно натоварване.
        </p>
        <p className="mt-4">
          Concrete Company предлага индивидуален подход към всеки търговски проект – от избора на цвят и финиш до изпълнението в кратки срокове и с минимално прекъсване на работния процес. Доверете се на нашия опит за под, който ще впечатли вашите клиенти и ще служи безотказно години наред.
        </p>
      </section>
    </section>
  );
};

export default CommercialSpacesPage;

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Търговски площи",
        "description": metadata.description,
        "image": "https://www.concretecompany.online/assets/img/work/targovski-ploshti.jpg",
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