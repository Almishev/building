import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Цялостни решения за индустриални подове в София, Пловдив, Благоевград | Concrete Company",
  description: "Цялостни решения за индустриални бетонови подове в София, Пловдив и Благоевград. От подготовка до финално запечатване с гарантирано качество.",
  keywords: "цялостни решения, индустриални подове, бетонови подове, подготовка на бетон, запечатване на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/services/total-solutions',
  },
};

const TotalSolutionsPage = () => {
  const service = {
    title: "Цялостни решения за индустриални подове",
    description:
      "От първоначалната подготовка до финалното запечатване, ние предлагаме цялостни решения, съобразени с вашите нужди и спецификата на обекта. Доверете се на нашия опит за изграждането на здрав и дълготраен индустриален под.",
    serviceList: [
      "Анализ на състоянието",
      "Подготовка на основата",
      "Избор на технология",
      "Цялостно изпълнение",
      "Контрол на качеството",
      "Гаранционно обслужване",
    ],
    thumb: "/assets/img/services/usluga-polagane-na-beton.jpg",
  };

  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">Цялостни решения за индустриални подове</h1>
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
            <h2 className="h2 mb-4">От концепция до перфектен финиш</h2>
            <p className="text-muted-foreground mb-6">{service.description}</p>
            <p className="text-muted-foreground mb-6">
              Ние разбираме, че всеки проект е уникален. Затова предлагаме пълен цикъл от услуги - от първоначална консултация и анализ на съществуващата основа, през избор на най-подходящата технология за шлайфане и обработка, до финално запечатване и инструкции за поддръжка. Нашият подход гарантира качество и предвидимост на всеки етап.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Нашият процес за цялостно решение</h2>
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
              <Button text="Поискайте оферта" />
            </Link>
        </div>

        {/* SEO текст за цялостни решения за индустриални подове */}
        <section className="mt-12 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
          <h2 className="h2 mb-4">Цялостни решения за индустриални подове – сигурност и качество на всяка стъпка</h2>
          <p>
            Изграждането на индустриален под изисква комплексен подход и внимание към всеки детайл. Нашите цялостни решения обхващат всички етапи – от първоначалния анализ и подготовка на основата, през избора на най-подходящата технология, до финалното изпълнение и гаранционно обслужване. Така гарантираме дълготрайност, здравина и отлична визия на всяка настилка.
          </p>
          <p className="mt-4">
            Работим с модерно оборудване и висококачествени материали, което ни позволява да изпълняваме проекти с различна сложност и мащаб. Всеки етап се контролира стриктно, за да се постигне максимална устойчивост на натоварване, износване и въздействие на външни фактори. Нашият екип е винаги на разположение за консултации и индивидуални решения според нуждите на клиента.
          </p>
          <p className="mt-4">
            Доверете се на нашия опит и професионализъм за цялостно изграждане и поддръжка на индустриални подове, които ще служат безотказно години наред. С нас получавате сигурност, качество и спокойствие на всяка стъпка от процеса.
          </p>
        </section>
      </div>
    </section>
  );
};

export default TotalSolutionsPage;

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Цялостни решения за индустриални подове",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Concrete Company - Парапанов груп"
        },
        "areaServed": "София, Пловдив, Благоевград",
        "description": metadata.description,
        "serviceType": "Цялостни решения за индустриални подове"
      })
    }}
  />
</head> 