import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Ръчни шлайф машини за бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Ръчноводими шлайф машини за прецизно обработване на бетон в София, Пловдив и Благоевград. Идеални за ъгли, ръбове и труднодостъпни места.",
  keywords: "ръчни шлайф машини, ръчноводими машини за бетон, шлайфане на ъгли, полиране на бетон, София, Пловдив, Благоевград, бетонови подове",
  alternates: {
    canonical: '/services/hand-grinders',
  },
};

const HandGrindersPage = () => {
  const service = {
    title: "Ръчноводими шлайф машини",
    description:
      "За по-малки площи, ръбове и труднодостъпни места използваме прецизни ръчноводими машини. Те гарантират внимание към детайла и безупречен финиш навсякъде, където големите машини не могат да достигнат.",
    serviceList: [
      "Обработка на ъгли, ръбове",
      "Прецизно шлайфане и полиране",
      "Жилищни площи, гаражи",
      "Ремонтни дейности",
      "Мозайки, декоративни бетони",
      "Премахване стари покрития",
    ],
    thumb: "/assets/img/services/walk-behind-grinder.jpg",
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">Ръчноводими шлайф машини за бетон</h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src={service.thumb}
              width={550}
              height={450}
              alt={service.title}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="h2 mb-4">Прецизност във всеки детайл</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <p className="text-muted-foreground mb-6">
              Тези универсални машини са незаменим помощник при обработката на площи около колони, до стени, в тесни коридори или при ремонтни дейности. С тяхна помощ можем да подготвим основи, да премахнем стари настилки и да полираме до съвършенство дори най-малките участъци.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Сфери на приложение</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.serviceList.map((item, index) => (
              <li key={index} className="p-4 border rounded-lg flex items-center gap-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
            <Link href="/#contact">
              <Button text="Свържете се с нас" />
            </Link>
        </div>

        {/* SEO текст за ръчноводими шлайф машини */}
        <section className="mt-12 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
          <h2 className="h2 mb-4">Ръчноводими шлайф машини – гъвкавост и прецизност</h2>
          <p>
            Ръчноводимите шлайф машини са незаменим помощник при обработката на труднодостъпни места, ъгли, ръбове и малки площи, където големите машини не могат да достигнат. Те позволяват изключително прецизно шлайфане и полиране, което е от съществено значение за постигане на безупречен финиш и детайлна обработка на всяка настилка.
          </p>
          <p className="mt-4">
            Благодарение на своята компактност и маневреност, ръчноводимите машини са идеални за ремонтни дейности, подготовка на основи, премахване на стари покрития и обработка на декоративни бетони и мозайки. Те осигуряват контрол и гъвкавост, които са необходими за висококачествен резултат във всякакви условия – от жилищни гаражи и коридори до обществени и търговски пространства.
          </p>
          <p className="mt-4">
            Използването на професионални ръчноводими шлайф машини гарантира не само отлична визия, но и дълготрайност и лесна поддръжка на подовата настилка. Доверете се на нашия опит за постигане на перфектен резултат дори в най-сложните и специфични проекти.
          </p>
        </section>
      </div>
    </section>
  );
};

export default HandGrindersPage; 

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ръчноводими шлайф машини за бетон",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Concrete Company - Парапанов груп"
        },
        "areaServed": "София, Пловдив, Благоевград",
        "description": metadata.description,
        "serviceType": "Шлайфане на бетон с ръчноводими машини"
      })
    }}
  />
</head> 