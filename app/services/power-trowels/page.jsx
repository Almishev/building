import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Пердашки машини за бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Ръчноводими пердашки машини за финална обработка на прясно положен бетон в София, Пловдив и Благоевград. Идеални за по-малки площи и коридори.",
  keywords: "пердашки машини, ръчноводими пердашки, заглаждане на бетон, финална обработка, София, Пловдив, Благоевград, бетонови подове",
  alternates: {
    canonical: '/services/power-trowels',
  },
};

const PowerTrowelsPage = () => {
  const service = {
    title: "Ръчноводими пердашки машини",
    description:
      "За финалната обработка на прясно положен бетон използваме единични пердашки. Те са идеални за по-малки до средни площи, както и за достигане на места, недостъпни за големите хеликоптери, осигурявайки перфектно гладък и уплътнен завършек.",
    serviceList: [
      "Заглаждане на пресен бетон",
      "Финишна обработка",
      "По-малки площи и коридори",
      "Обработка до стени и колони",
      "Гарантирана равност",
      "Подготовка за импрегниране",
    ],
    thumb: "/assets/img/services/perdashka-za-beton.webp",
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">Ръчноводими пердашки машини за бетон</h1>
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
            <h2 className="h2 mb-4">Финалният щрих за перфектен под</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <p className="text-muted-foreground mb-6">
              Тези машини са ключови за постигане на плътна и здрава повърхност. Чрез въртящите се лопатки, те ефективно затварят порите на бетона, премахват излишната вода и подготвят пода за последващо импрегниране или полиране. Резултатът е значително по-устойчива на износване и напукване настилка.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Основни предимства и приложения</h2>
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

        {/* SEO текст за ръчноводими пердашки машини */}
        <section className="mt-12 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
          <h2 className="h2 mb-4">Ръчноводими пердашки машини – финалният щрих за здрав и красив под</h2>
          <p>
            Ръчноводимите пердашки машини са ключов инструмент за финалната обработка на прясно положен бетон. Те позволяват постигане на изключително гладка, плътна и устойчива повърхност, която е основа за дълготрайност и лесна поддръжка на пода. Чрез въртящите се лопатки, машините ефективно затварят порите на бетона и премахват излишната влага.
          </p>
          <p className="mt-4">
            Този тип машини са особено подходящи за по-малки площи, коридори, пространства до стени и колони, където големите хеликоптери не могат да работят. Те осигуряват равномерно заглаждане и подготвят настилката за последващо импрегниране или полиране, което повишава устойчивостта на износване и напукване.
          </p>
          <p className="mt-4">
            Използването на професионални пердашки машини гарантира отличен финиш, висока здравина и естетика на пода. Доверете се на нашия екип за перфектен резултат при всеки проект – от малки гаражи до мащабни индустриални обекти.
          </p>
        </section>
      </div>
    </section>
  );
};

export default PowerTrowelsPage;

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Ръчноводими пердашки машини за бетон",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Concrete Company - Парапанов груп"
        },
        "areaServed": "София, Пловдив, Благоевград",
        "description": metadata.description,
        "serviceType": "Заглаждане и обработка на бетон с пердашки"
      })
    }}
  />
</head> 