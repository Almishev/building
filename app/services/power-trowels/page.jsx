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
            <h2 className="text-2xl font-semibold mb-4">Финалният щрих за перфектен под</h2>
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
      </div>
    </section>
  );
};

export default PowerTrowelsPage; 