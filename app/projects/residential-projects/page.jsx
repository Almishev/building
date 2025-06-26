import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata = {
  title: "Жилищни проекти - Шлайфане на бетон в София, Пловдив, Благоевград | Concrete Company",
  description: "Шлайфане на бетон за жилищни проекти в София, Пловдив и Благоевград. Специализирани решения за апартаменти, къщи и гаражи.",
  keywords: "жилищни проекти, апартаменти, къщи, гаражи, бетонови подове, шлайфане на бетон, София, Пловдив, Благоевград",
  alternates: {
    canonical: '/projects/residential-projects',
  },
};

const ResidentialProjectsPage = () => {
  return (
    <section className="py-12 xl:py-24">
      <div className="container mx-auto">
        <h1 className="h1 text-center mb-6">
          Шлайфан бетон за жилищни проекти
        </h1>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Image */}
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/assets/logo.png" // Placeholder image
              width={550}
              height={450}
              alt="Шлайфан бетон в жилищни проекти"
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          {/* Text */}
          <div className="flex-1">
            <h2 className="h2 mb-4">Комфорт и стил за вашия дом</h2>
            <p className="text-muted-foreground mb-4">
              Шлайфаният бетон е все по-предпочитан избор за модерни домове, апартаменти и гаражи. Той съчетава издръжливост, лесна поддръжка и възможност за персонализация според вкуса на всеки клиент.
            </p>
            <p className="text-muted-foreground mb-6">
              Concrete Company изпълнява жилищни проекти с внимание към детайла и индивидуалните изисквания на клиента. Доверете се на нашия екип за под, който ще бъде едновременно красив, здрав и лесен за поддръжка години наред.
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

      {/* SEO текст за жилищни проекти */}
      <section className="mt-16 max-w-3xl mx-auto text-base text-gray-700 leading-relaxed">
        <h2 className="h2 mb-4">Жилищни проекти – комфорт, стил и индивидуалност</h2>
        <p>
          Шлайфаният бетон е все по-предпочитан избор за модерни домове, апартаменти и гаражи. Той съчетава издръжливост, лесна поддръжка и възможност за персонализация според вкуса на всеки клиент. Полираната повърхност придава усещане за простор и светлина, а разнообразието от цветове и финиши позволява уникален интериорен дизайн.
        </p>
        <p className="mt-4">
          Concrete Company изпълнява жилищни проекти с внимание към детайла и индивидуалните изисквания на клиента. Доверете се на нашия екип за под, който ще бъде едновременно красив, здрав и лесен за поддръжка години наред.
        </p>
      </section>
    </section>
  );
};

export default ResidentialProjectsPage; 

<head>
  <title>{metadata.title}</title>
  <meta name="description" content={metadata.description} />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Project",
        "name": "Жилищни проекти",
        "description": metadata.description,
        "image": "https://www.concretecompany.online/assets/img/work/jilishtni-proekti.jpg",
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