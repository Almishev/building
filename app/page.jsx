// components
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Concrete Company - Шлайфане на бетон в София, Пловдив, Благоевград | Парапанов груп",
  description: "Професионално шлайфане на бетон в София, Пловдив и Благоевград. Хеликоптери, ръчни машини и цялостни решения за индустриални подове. Безплатна консултация и оферта.",
  keywords: "шлайфане на бетон, хеликоптери за бетон, ръчни шлайф машини, пердашки за бетон, индустриални подове, София, Пловдив, Благоевград, Парапанов груп, полиране на бетон, бетонови подове",
  alternates: {
    canonical: '/',
  },
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Topbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      {/* Секция Цени */}
      <section id="prices" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Цени за шлайфане на бетон</h2>
          <p className="mb-4 text-lg">
            Шлайфане на бетон е процес, който изисква професионализъм и модерна техника, за да се постигне идеално гладка и устойчива повърхност. Нашите услуги за шлайфане на бетон са подходящи както за индустриални, така и за жилищни и търговски обекти. Използваме най-съвременни машини и материали, за да гарантираме дълготрайност и отлична визия на всяка настилка.
          </p>
          <p className="mb-6 text-base text-gray-700">
            Цената за шлайфане на бетон се определя индивидуално за всеки обект. Влияят фактори като площ, състояние на бетона, желано ниво на полиране и достъпност. Винаги препоръчваме оглед и консултация за най-точна оферта. Инвестицията в качествено шлайфане на бетон гарантира дълготрайност, лесна поддръжка и отлична визия на пода.
          </p>
          <a href="/prices/" className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary-dark transition">Вижте подробни цени</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
