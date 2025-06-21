import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const IndustrialHallsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Шлайфан Бетон за Индустриални Халета и Складове
        </h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/img/work/construction.jpg" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в индустриално хале"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Надеждност и ефективност за вашия бизнес</h2>
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
              <h3 className="font-semibold text-xl mb-2">1. Подготовка и грубо шлайфане</h3>
              <p className="text-muted-foreground">Премахваме всички неравности, стари покрития и замърсявания от повърхността. Започваме с едри диамантени дискове, за да изравним основата перфектно.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">2. Нанасяне на втвърдител (импрегнатор)</h3>
              <p className="text-muted-foreground">Нанасяме специален силикатен импрегнатор, който прониква в дълбочина, заздравява бетона, уплътнява го и го прави безпрахов.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">3. Фино шлайфане и полиране</h3>
              <p className="text-muted-foreground">Продължаваме с поетапна обработка с все по-фини диамантени дискове, докато постигнем желаната гладкост и блясък на повърхността.</p>
            </li>
            <li className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-2">4. Финално запечатване (опционално)</h3>
              <p className="text-muted-foreground">За максимална защита от петна и течности, може да се нанесе финално защитно покритие (силант), което улеснява почистването и поддръжката.</p>
            </li>
          </ul>
        </div>

        <div className="my-12">
          <h2 className="h2 text-center mb-8">Предимства на шлайфания бетон в индустрията</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <li className="p-4 border rounded-lg"><strong>Максимална здравина:</strong> Издържа на висок трафик и тежки товари.</li>
            <li className="p-4 border rounded-lg"><strong>Безпрахова повърхност:</strong> Ключова за чисти производства и складове.</li>
            <li className="p-4 border rounded-lg"><strong>Лесна поддръжка:</strong> Намалява оперативните разходи.</li>
            <li className="p-4 border rounded-lg"><strong>Висока светлоотразителност:</strong> Подобрява осветеността и пести енергия.</li>
            <li className="p-4 border rounded-lg"><strong>Устойчивост на химикали:</strong> Защита от масла и други агресивни вещества.</li>
            <li className="p-4 border rounded-lg"><strong>Дългосрочна инвестиция:</strong> Изключително дълъг експлоатационен живот.</li>
          </ul>
        </div>
        
        <div className="text-center">
            <Link href="/#contact">
              <Button text="Свържете се с нас за оферта" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustrialHallsPage; 