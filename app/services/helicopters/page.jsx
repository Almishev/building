import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

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
        <h1 className="text-3xl font-bold mb-6 text-center">{service.title}</h1>
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
            <h2 className="text-2xl font-semibold mb-4">Максимална производителност за мащабни проекти</h2>
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
      </div>
    </section>
  );
};

export default HelicoptersPage; 