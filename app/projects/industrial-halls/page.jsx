import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const IndustrialHallsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Шлайфан Бетон за Индустриални Халета и Складове
        </h1>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/assets/img/work/construction.jpg" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в индустриално хале"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-4">
              Индустриалните халета, складове и производствени цехове са подложени на екстремни натоварвания – тежък трафик от мотокари, палети, машини и постоянен човекопоток. Ето защо изборът на подова настилка е от критично значение за ефективността, безопасността и дългосрочната рентабилност на обекта.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              "Concrete Company" предлага най-висок клас услуги за шлайфане на бетон, превръщайки стандартната бетонова настилка в изключително здрава, гладка и лесна за поддръжка повърхност, идеална за индустриални нужди.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Предимства на шлайфания бетон в индустрията</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Максимална здравина и износоустойчивост:</strong>
              Обработеният под издържа на висок трафик и механични въздействия.
            </li>
            <li>
              <strong>Безпрахова повърхност:</strong>
              Елиминира проблема с отделянето на прах от бетона, което е ключово за чисти производства.
            </li>
            <li>
              <strong>Лесна поддръжка:</strong>
              Гладката повърхност се почиства бързо и лесно, намалявайки оперативните разходи.
            </li>
            <li>
              <strong>Висока светлоотразителност:</strong>
              Подобрява осветеността в помещението и намалява разходите за електричество.
            </li>
            <li>
              <strong>Дългосрочна инвестиция:</strong>
              Веднъж положен и обработен, подът има изключително дълъг експлоатационен живот.
            </li>
          </ul>
        </div>
        
        <Link href="/#projects">
          <Button text="Обратно към проектите" />
        </Link>
      </div>
    </section>
  );
};

export default IndustrialHallsPage; 