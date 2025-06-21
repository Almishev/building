import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

const ResidentialProjectsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Шлайфан Бетон: Модерният Избор за Вашия Дом
        </h1>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/assets/img/work/renovation.jpg" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в модерен интериор"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-4">
              Шлайфаният бетон отдавна не е запазена марка само за индустрията. Все повече собственици на жилища и интериорни дизайнери го избират заради неговата минималистична визия, изключителна здравина и лесна поддръжка. Той е перфектното решение за гаражи, мазета, тераси, а също и за модерни интериори в стил "лофт".
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              "Concrete Company" може да превърне всяка бетонна повърхност във вашия дом в гладко, стилно и практично подово покритие, което ще ви служи вярно години наред.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Приложения в дома и гаража:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Гаражи и паркоместа:</strong>
              Несравнимо по-устойчив на петна от масло и износване от гуми в сравнение с обикновения бетон.
            </li>
            <li>
              <strong>Мазета и складови помещения:</strong>
              Предотвратява влагата и мухъла, като създава чиста и лесна за поддръжка среда.
            </li>
            <li>
              <strong>Тераси и външни площадки:</strong>
              Издържа на атмосферни влияния и предлага модерна алтернатива на традиционните настилки.
            </li>
            <li>
              <strong>Интериорни решения:</strong>
              Идеален за кухни, коридори и всекидневни, като придава уникален индустриален шик.
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

export default ResidentialProjectsPage; 