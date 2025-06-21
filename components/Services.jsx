"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Button from "./Button";

import {
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";

const serviceData = [
  {
    name: "Хеликоптери",
    icon: <PiUserGearFill />,
    title: "Хеликоптери с оператор (двойни)",
    description:
      "Нашите мощни хеликоптери с оператор са предназначени за обработка на големи индустриални площи. Те осигуряват несравнима производителност и перфектно гладка повърхност.",
    serviceList: [
      "Шлайфане на големи площи",
      "Висока производителност",
      "Индустриални складове",
      "Търговски центрове",
      "Подземни паркинги",
      "Бързо изпълнение",
    ],
    thumbs: [
      { url: "/assets/img/services/ride-on-trowel.jpg" },
      { url: "/assets/img/services/thumb-1.jpg" },
    ],
  },
  {
    name: "Ръчни машини",
    icon: <PiWrenchFill />,
    title: "Ръчноводими шлайф машини",
    description:
      "За по-малки площи, ръбове и труднодостъпни места използваме прецизни ръчноводими машини. Те гарантират внимание към детайла и безупречен финиш навсякъде.",
    serviceList: [
      "Обработка на ъгли и ръбове",
      "Прецизно шлайфане и полиране",
      "Жилищни площи и гаражи",
      "Ремонтни дейности",
      "Мозайки и декоративни бетони",
      "Премахване на стари покрития",
    ],
    thumbs: [
      { url: "/assets/img/services/walk-behind-grinder.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
  {
    name: "Решения",
    icon: <PiWrenchFill />,
    title: "Цялостни решения за индустриални подове",
    description:
      "От първоначалната подготовка до финалното запечатване, ние предлагаме цялостни решения, съобразени с вашите нужди и спецификата на обекта. Доверете се на нашия опит.",
    serviceList: [
      "Анализ на състоянието",
      "Подготовка на основата",
      "Избор на технология",
      "Цялостно изпълнение",
      "Контрол на качеството",
      "Гаранционно обслужване",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-2.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "Консултации",
    icon: <PiUserGearFill />,
    title: "Консултации и изготвяне на оферта",
    description:
      "Всеки проект започва с добра идея и ясен план. Нашият екип ще ви консултира за най-подходящите технологии и материали и ще изготви детайлна оферта без ангажимент.",
    serviceList: [
      "Безплатен оглед на място",
      "Техническа консултация",
      "Индивидуална оферта",
      "Оптимизация на разходите",
      "Професионални съвети",
      "Дългосрочно партньорство",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-5.jpg" },
      { url: "/assets/img/services/thumb-6.jpg" },
    ],
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("Хеликоптери");
  return (
    <section className="pt-16 xl:pt-32" id="services">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto mb-20"
        >
          <Pretitle text="Нашите Услуги" center />
          <h2 className="h2 mb-3">Технологии за перфектния под</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Разполагаме с модерно оборудване за шлайфане и полиране на бетон,
            което ни позволява да изпълняваме проекти с всякакъв мащаб и
            сложност.
          </p>
        </motion.div>

        {/* tabs */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="Хеликоптери"
            onValueChange={(value) => setActiveTab(value)}
            className="flex flex-col xl:flex-row w-full gap-[30px]"
          >
            <TabsList className="grid grid-cols-1 gap-[30px] h-full w-full rounded-none p-0 bg-transparent xl:max-w-[345px]">
              {serviceData.map((item) => {
                return (
                  <TabsTrigger
                    key={item.name}
                    value={item.name}
                    className="w-full rounded-none h-[100px] flex items-center relative shadow-custom p-0 outline-none"
                  >
                    <div
                      className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                        activeTab === item.name
                          ? "bg-primary text-white"
                          : "bg-accent text-primary"
                      }`}
                    >
                      <div className="text-4xl">{item.icon}</div>
                    </div>
                    <div className="uppercase font-primary text-base font-semibold tracking-[.6px] ml-[120px] text-left">
                      {item.name}
                    </div>
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {/* tabs content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="hidden"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* images */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image src={thumb.url} fill alt="" />
                        </div>
                      ))}
                    </div>
                    {/* text & button */}
                    <div>
                      <div>
                        <h3 className="h3 mb-6">{item.title}</h3>
                        <p className="mb-10">{item.description}</p>
                        {/* service list */}
                        <ul className="grid grid-cols-2 gap-4 mb-12">
                          {item.serviceList.map((service, index) => {
                            return (
                              <li
                                key={index}
                                className="flex items-center gap-4"
                              >
                                <div className="w-[6px] h-[6px] bg-accent"></div>
                                <div className="capitalize font-medium text-primary">
                                  {service}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                        {/* btn */}
                        <Button text="Научете повече" />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
