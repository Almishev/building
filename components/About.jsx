import Image from "next/image";
import Pretitle from "./Pretitle";
import Button from "./Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
  return (
    <div className="pt-16 xl:pt-32" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="max-w-[540px]"
            >
              {/* pretitle */}
              <Pretitle text="За нас" />
              <h2 className="h2 mb-6">
                Фокус върху съвършенството във всеки проект
              </h2>
              <p className="mb-11">
                Concrete Company е част от "Парапанов груп" и е специализирана
                в изработката на подови настилки от шлайфан и полиран бетон.
                Нашият непоколебим ангажимент към съвършенство е в основата
                на всеки наш проект.
              </p>
              <div className="w-max flex flex-col text-right mb-10">
                <Image
                  src="/assets/img/about/signature.svg"
                  width={154}
                  height={38}
                  alt=""
                />
                <p>Управител</p>
              </div>
              {/* btn */}
              <Button text="Свържете се с нас" />
            </motion.div>
          </div>
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 xl:flex xl:justify-center"
          >
            <div className="xl:w-[444px] xl:h-[493px] relative">
              {/* bg */}
              <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
              <Image
                src={"/assets/img/about/img.jpg"}
                width={444}
                height={492}
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
