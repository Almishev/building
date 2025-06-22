import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Декоративни покрития - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Декоративни покрития и шлайфане на бетон в София, Пловдив и Благоевград. Специализирани решения за естетични бетонови подове и мозайки.",
  keywords: "декоративни покрития, мозайки, естетични бетонови подове, декоративен бетон, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/decorative-coatings',
  },
};

const DecorativeCoatingsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Декоративни Настилки: Изкуство под Краката Ви
        </h1>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/assets/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Декоративна подова настилка от шлайфан бетон"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-4">
              Кой казва, че бетонът трябва да бъде сив и скучен? Съвременните технологии ни позволяват да превърнем шлайфания бетон в истинско произведение на изкуството. Чрез добавяне на оцветители, специални агрегати и различни техники на полиране, можем да създадем уникални по рода си подови настилки.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              От ефект "терацо" до огледален блясък в различни цветове, "Concrete Company" може да реализира вашите най-смели дизайнерски идеи, комбинирайки ги с безкомпромисната здравина на бетона.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Нашите декоративни възможности:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Оцветяване:</strong>
              Богата палитра от цветове, които се импрегнират в бетона за дълготраен ефект.
            </li>
            <li>
              <strong>Полиране до блясък:</strong>
              Различни нива на полиране - от сатенен мат до огледален гланц.
            </li>
            <li>
              <strong>Ефект "Терацо":</strong>
              Влагане на декоративни камъни, стъкла или мрамор в повърхностния слой за уникална мозаечна визия.
            </li>
            <li>
              <strong>Персонализирани дизайни:</strong>
              Възможност за изрязване на лога, фигури и шарки директно в бетонния под.
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

export default DecorativeCoatingsPage; 