import Link from 'next/link';

export const metadata = {
  title: "Нашите проекти и начин на работа | Concrete Company",
  description: "Разберете повече за нашия доказан процес на работа - от първоначалната консултация и оферта до финалното изпълнение на проекти за индустриални и жилищни площи.",
  keywords: "начин на работа, процес, проекти за бетон, консултация, оферта за бетон, изпълнение на проекти, индустриални халета, търговски площи, жилищни проекти",
  alternates: {
    canonical: '/projects',
  },
};

const projectList = [
  { name: 'Индустриални халета', href: '/projects/industrial-halls', description: 'Мащабни проекти, изискващи максимална здравина и равност на настилката за тежко натоварване.' },
  { name: 'Търговски площи', href: '/projects/commercial-spaces', description: 'Решения за магазини и шоуруми, където естетиката и лесната поддръжка са от ключово значение.' },
  { name: 'Жилищни проекти', href: '/projects/residential-projects', description: 'Модерни и стилни решения за подове в къщи, апартаменти и гаражи с полиран или декоративен бетон.' },
  { name: 'Декоративни покрития', href: '/projects/decorative-coatings', description: 'Артистични и цветни настилки, които превръщат обикновения бетон в уникален интериорен акцент.' },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
        Нашите проекти и начин на работа
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Всеки успешен проект започва с ясен план и прозрачна комуникация. В Concrete Company следваме доказан процес, който гарантира качество, срокове и пълно удовлетворение за нашите клиенти.
      </p>

      <div className="prose lg:prose-xl max-w-none mx-auto text-gray-700">
        <h2 className="text-3xl font-semibold mb-4">Нашият процес стъпка по стъпка</h2>
        <p>
          За да осигурим най-добрия възможен резултат, ние разделяме всеки проект на няколко ключови етапа:
        </p>

        <ol className="list-decimal pl-5 space-y-4">
          <li>
            <strong className="font-semibold">Първоначална консултация и оглед:</strong> Всичко започва с разговор. Свързвате се с нас, обсъждаме вашите нужди и, ако е необходимо, организираме оглед на обекта. Този етап е ключов, за да разберем мащаба, спецификата на основата и вашите очаквания.
          </li>
          <li>
            <strong className="font-semibold">Изготвяне на индивидуална оферта:</strong> Въз основа на събраната информация, ние изготвяме детайлна и прозрачна оферта. В нея са описани всички дейности, необходими материали, срокове за изпълнение и крайна цена, без скрити такси.
          </li>
          <li>
            <strong className="font-semibold">Планиране и подготовка:</strong> След приемане на офертата, нашият екип планира всеки детайл от изпълнението. Подготвяме необходимата техника и логистика, за да сме сигурни, че работата ще протече гладко и в уговорените срокове.
          </li>
          <li>
            <strong className="font-semibold">Изпълнение на проекта:</strong> Това е основният етап, в който прилагаме нашия опит и използваме професионалната си техника за шлайфане на бетона. Работим прецизно, спазвайки всички технологични изисквания за постигане на перфектна повърхност.
          </li>
          <li>
            <strong className="font-semibold">Финална обработка и почистване:</strong> След приключване на шлайфането, нанасяме финални защитни покрития (ако са предвидени в проекта) и почистваме обекта. Предаваме ви готова за експлоатация, чиста и здрава настилка.
          </li>
        </ol>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Разгледайте типовете проекти, по които работим</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectList.map((project) => (
            <Link key={project.name} href={project.href} className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-xl transition-shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{project.name}</h5>
              <p className="font-normal text-gray-600">{project.description}</p>
              <span className="inline-block mt-4 font-semibold text-yellow-600 hover:text-yellow-700">Научете повече →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 