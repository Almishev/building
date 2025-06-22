import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Търговски площи - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Шлайфане на бетон за търговски площи в София, Пловдив и Благоевград. Специализирани решения за търговски центрове, магазини и офис пространства.",
  keywords: "търговски площи, търговски центрове, магазини, офис пространства, бетонови подове, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/commercial-spaces',
  },
};

const CommercialSpacesPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          Елегантни и Устойчиви Решения за Търговски Площи
        </h1>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <Image
              src="/assets/img/work/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в търговски обект"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <p className="text-lg text-muted-foreground mb-4">
              Подът в един магазин, шоурум или ресторант е първото нещо, което клиентите забелязват. Той трябва да бъде не само красив и представителен, но и изключително издръжлив, за да устои на постоянния човекопоток. Шлайфаният и полиран бетон е модерното решение, което съчетава естетика и функционалност.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Ние от "Concrete Company" създаваме подове, които впечатляват с блясък и стил, като същевременно осигуряват лесна поддръжка и дълготрайност, необходими за всеки успешен бизнес.
            </p>
          </div>
        </div>

        <div className="my-12">
          <h2 className="text-2xl font-semibold mb-4">Защо шлайфан бетон за вашия бизнес?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Представителна визия:</strong>
              Създава модерна и луксозна атмосфера, която привлича клиенти.
            </li>
            <li>
              <strong>Неограничени дизайнерски възможности:</strong>
              Може да се оцветява и обработва за постигане на уникални ефекти.
            </li>
            <li>
              <strong>Изключителна хигиеничност:</strong>
              Без фуги, където да се събира мръсотия, подът се почиства перфектно.
            </li>
            <li>
              <strong>Устойчивост на износване:</strong>
              Идеален за зони с висок трафик, без да се притеснявате от износване или надраскване.
            </li>
            <li>
              <strong>Оптимизация на разходите:</strong>
              Дългосрочно решение, което спестява средства от ремонти и скъпи поддръжки.
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

export default CommercialSpacesPage; 