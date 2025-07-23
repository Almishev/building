"use client";
import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import Button from "./Button";

import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

const workData = [
  {
    img: "/assets/img/work/industrialni-ploshti.jpg",
    name: "Индустриални халета",
    description: "Мащабни проекти за бизнеса",
    href: "/projects/industrial-halls",
  },
  {
    img: "/assets/img/work/targovski-ploshti.jpg",
    name: "Търговски площи",
    description: "Гладки подове за вашите клиенти",
    href: "/projects/commercial-spaces",
  },
  {
    img: "/assets/img/work/jilishtni-proekti.jpg",
    name: "Жилищни проекти",
    description: "Модерни решения за дома",
    href: "/projects/residential-projects",
  },
  {
    img: "/assets/img/work/dekorativni-nastilki.jpg",
    name: "Декоративни настилки",
    description: "Естетика и здравина в едно",
    href: "/projects/decorative-coatings",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Наши обекти" center />
          <h2 className="h2 mb-3">Разгледайте нашите проекти</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Гордеем се с всеки завършен обект и вниманието към детайла, което
            влагаме. Вижте част от нашите реализирани проекти.
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
            >
              <Image
                src={item.img}
                fill
                className="object-cover"
                alt={`${item.name} - ${item.description} в София, Пловдив, Благоевград`}
                quality={100}
              />
              <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
                <div className="pl-8">
                  <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <RiCheckboxCircleFill className="text-accent text-xl" />
                    <p>{item.description}</p>
                  </div>
                </div>
                <Link
                  href={item.href}
                  className="w-[44px] xl:w-[60px] xl:h-[60px] h-[44px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
                >
                  <RiArrowRightUpLine />
                </Link>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="flex flex-col items-center mt-12">
        <p className="mb-6 max-w-2xl text-center text-gray-700">
          Concrete Company реализира проекти за индустриални халета, търговски площи, жилищни сгради и декоративни настилки в София, Пловдив, Благоевград и цялата страна. Нашият екип гарантира качество, дълготрайност и индивидуален подход към всеки обект – от концепцията до финалния резултат. Разгледайте нашите реализирани проекти и се убедете в професионализма ни!
        </p>
        <Link href="/projects/">
          <Button text="Вижте всички проекти" />
        </Link>
      </div>
    </div>
  );
};

export default Work;
