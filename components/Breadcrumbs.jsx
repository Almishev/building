"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbMap = {
    services: "Услуги",
    projects: "Проекти",
    helicopters: "Хеликоптери",
    "hand-grinders": "Ръчни машини",
    "power-trowels": "Пердашки машини",
    "total-solutions": "Цялостни решения",
    "industrial-halls": "Индустриални халета",
    "commercial-spaces": "Търговски площи",
    "residential-projects": "Жилищни проекти",
    "decorative-coatings": "Декоративни покрития",
  };

  return (
    <nav className="bg-gray-50 py-4">
      <div className="container mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-primary hover:text-accent transition-colors">
              Начало
            </Link>
          </li>
          {pathSegments.map((segment, index) => (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              {index === pathSegments.length - 1 ? (
                <span className="text-gray-600 font-medium">
                  {breadcrumbMap[segment] || segment}
                </span>
              ) : (
                <Link
                  href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                  className="text-primary hover:text-accent transition-colors"
                >
                  {breadcrumbMap[segment] || segment}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs; 