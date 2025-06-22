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
            <h2 className="text-2xl font-semibold mb-4">От концепция до перфектен финиш</h2>
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
              <Button text="Поискайте консултация" />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default TotalSolutionsPage; 