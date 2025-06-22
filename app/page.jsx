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
    </div>
  );
};

export default Home;
