import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Индустриални халета - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Професионално шлайфане на бетон за индустриални халета в София, Пловдив и Благоевград. Специализирани решения за производствени помещения и складове.",
  keywords: "индустриални халета, производствени помещения, складове, бетонови подове, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/industrial-halls',
  },
};

const IndustrialHallsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">
          Шлайфан бетон за индустриални халета и складове
        </h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в индустриално хале"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="h2 mb-4">Надеждност и ефективност за вашия бизнес</h2>
            <p className="text-muted-foreground mb-4">
              Индустриалните халета, складове и производствени цехове са подложени на екстремни натоварвания – тежък трафик от мотокари, палети, машини и постоянен човекопоток. Ето защо изборът на подова настилка е от критично значение за ефективността, безопасността и дългосрочната рентабилност на обекта.
            </p>
            <p className="text-muted-foreground mb-6">
              "Concrete Company" предлага най-висок клас услуги за шлайфане на бетон. Чрез прецизна обработка с диамантени дискове и специализирани машини, ние превръщаме стандартната бетонова настилка в изключително здрава, гладка и лесна за поддръжка повърхност, идеална за индустриални нужди.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Как протича процесът?</h2>
          <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">Процесът на шлайфане на бетон е многоетапен и изисква прецизност и професионално оборудване. Нашият екип следва утвърдена технология, за да гарантира перфектен краен резултат:</p>
          <ul className="grid md:grid-cols-2 gap-8">
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="h3 mb-2">1. Подготовка и грубо шлайфане</h3>
              <p className="text-muted-foreground">Премахваме всички неравности, стари покрития и замърсявания от повърхността. Започваме с едри диамантени дискове, за да изравним основата перфектно.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="h3 mb-2">2. Нанасяне на втвърдител (импрегнатор)</h3>
              <p className="text-muted-foreground">Нанасяме специален силикатен импрегнатор, който прониква в дълбочина, заздравява бетона, уплътнява го и го прави безпрахов.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="h3 mb-2">3. Фино шлайфане и полиране</h3>
              <p className="text-muted-foreground">Продължаваме с поетапна обработка с все по-фини диамантени дискове, докато постигнем желаната гладкост и блясък на повърхността.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="h3 mb-2">4. Финално запечатване (опционално)</h3>
              <p className="text-muted-foreground">За максимална защита от петна и течности, може да се нанесе финално защитно покритие (силант), което улеснява почистването и поддръжката.</p>
            </li>
          </ul>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Предимства на шлайфания бетон в индустрията</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 border rounded-lg"><span className="font-bold">Максимална здравина:</span> Издържа на висок трафик и тежки товари.</li>
            <li className="p-4 border rounded-lg"><span className="font-bold">Безпрахова повърхност:</span> Ключова за чисти производства и складове.</li>
            <li className="p-4 border rounded-lg"><span className="font-bold">Лесна поддръжка:</span> Намалява оперативните разходи.</li>
            <li className="p-4 border rounded-lg"><span className="font-bold">Висока светлоотразителност:</span> Подобрява осветеността и пести енергия.</li>
            <li className="p-4 border rounded-lg"><span className="font-bold">Устойчивост на химикали:</span> Защита от масла и други агресивни вещества.</li>
            <li className="p-4 border rounded-lg"><span className="font-bold">Дългосрочна инвестиция:</span> Изключително дълъг експлоатационен живот.</li>
          </ul>
        </div>
        
        <div className="text-center">
            <Link href="/#contact">
              <Button text="Свържете се с нас за оферта" />
            </Link>
        </div>
      </div>

      {/* SEO текст за индустриални халета */}
      <section className="mt-16 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
        <h2 className="h2 mb-4">Индустриални халета – здравина, ефективност и дълготрайност</h2>
        <p>
          Шлайфаният бетон е най-доброто решение за индустриални халета, където натоварванията са големи, а изискванията към пода – максимални. Нашите технологии гарантират равна, устойчива и лесна за поддръжка настилка, която издържа на тежки машини, интензивен трафик и агресивни среди. Всяко хале се изпълнява с индивидуален подход според спецификата на производството и нуждите на клиента.
        </p>
        <p className="mt-4">
          Инвестицията в професионално шлайфане и полиране на бетон в индустриални халета осигурява дългосрочна експлоатация, минимални разходи за поддръжка и отлична визия на работната среда. Доверете се на Concrete Company за безкомпромисно качество и сигурност във всеки детайл.
        </p>
      </section>
    </section>
  );
};

export default IndustrialHallsPage;

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Индустриални халета",
        "description": metadata.description,
        "image": "https://www.concretecompany.online/assets/img/work/industrialni-ploshti.jpg",
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