import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Хеликоптери за шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Мощни хеликоптери с оператор за шлайфане на големи индустриални площи в София, Пловдив и Благоевград. Висока производителност за складове, търговски центрове и подземни паркинги.",
  keywords: "хеликоптери за бетон, двойни пердашки, шлайфане на големи площи, индустриални подове, София, Пловдив, Благоевград, бетонови машини",
  alternates: {
    canonical: '/services/helicopters',
  },
};

const HelicoptersPage = () => {
  const service = {
    title: "Хеликоптери с оператор (двойни)",
    description:
      "Нашите мощни хеликоптери с оператор са предназначени за обработка на големи индустриални площи. Те осигуряват несравнима производителност и перфектно гладка повърхност, която е основата на всеки качествен индустриален под.",
    serviceList: [
      "Шлайфане на големи площи",
      "Висока производителност",
      "Индустриални складове",
      "Търговски центрове",
      "Подземни паркинги",
      "Бързо изпълнение",
    ],
    thumb: "/assets/img/services/ride-on-trowel.jpg",
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">Хеликоптери за шлайфане на бетон</h1>
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
            <h2 className="h2 mb-4">Максимална производителност за мащабни проекти</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <p className="text-muted-foreground mb-6">
              Когато става въпрос за обработка на хиляди квадратни метри, скоростта и качеството са от първостепенно значение. Нашите двойни пердашки машини, управлявани от опитни оператори, позволяват бързо и ефикасно заглаждане и шлайфане на прясно положен бетон, гарантирайки идеално равна и уплътнена повърхност.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Ключови приложения и предимства</h2>
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

        {/* SEO текст за хеликоптери */}
        <section className="mt-12 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
          <h2 className="h2 mb-4">Хеликоптери за шлайфане на бетон – предимства и приложения</h2>
          <p>
            Хеликоптерите за бетон са незаменим инструмент при обработката на големи индустриални площи, където се изисква максимална производителност и перфектно гладка повърхност. Тези машини позволяват бързо и равномерно шлайфане и заглаждане на прясно положен бетон, като гарантират висока плътност и устойчивост на настилката. С помощта на опитни оператори, хеликоптерите осигуряват отлични резултати дори при мащабни проекти, като складове, производствени халета, паркинги и търговски центрове.
          </p>
          <p className="mt-4">
            Използването на хеликоптери значително намалява времето за изпълнение и риска от човешки грешки, като същевременно подобрява качеството на крайния резултат. Повърхността става устойчива на износване, лесна за почистване и поддръжка, а също така придобива модерен и професионален вид. Хеликоптерите са подходящи и за обекти с високи изисквания към здравината и дълготрайността на пода, където стандартните ръчни машини не са достатъчни.
          </p>
          <p className="mt-4">
            Инвестицията в професионално шлайфане с хеликоптери е гаранция за дълготрайност, минимални разходи за поддръжка и отлична визия на всяко индустриално или търговско пространство. Доверете се на нашия опит и модерно оборудване за постигане на най-добрите резултати при обработката на бетонни настилки.
          </p>
        </section>
      </div>
    </section>
  );
};

export default HelicoptersPage; 

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Хеликоптери за шлайфане на бетон",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Concrete Company - Парапанов груп"
        },
        "areaServed": "София, Пловдив, Благоевград",
        "description": metadata.description,
        "serviceType": "Шлайфане на бетон с хеликоптери"
      })
    }}
  />
</head> 