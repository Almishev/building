import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="w-full xl:h-[730px] shadow-custom p-4 xl:p-8 xl:px-[90px] xl:py-[36px] border-t-4 border-accent">
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px]">
            {/* info */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-[640px]">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Свържете се с нас
              </h4>
              <p className="mb-9">
                Имате въпроси или искате да обсъдим вашия проект? Нашият екип е
                на разположение.
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-[40px] mb-16">
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Пишете ни
                    </h5>
                    <p className="mb-4">Нашият екип е на ваше разположение.</p>
                    <p className="font-semibold text-primary">
                      <a href="mailto:infoconcretecompany@gmail.com" className="hover:text-orange-500 transition-colors">
                         infoconcretecompany@gmail.com
                       </a>

                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiMapPin2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                    Нашата база
                    </h5>
                    
                    <p className="font-semibold text-primary">
                      Работим из цялата страна
                    </p>
                  </div>
                </div>
                {/* contact item */}
                <div className="flex items-start gap-[20px]">
                  <div>
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Телефон
                    </h5>
                    <p className="mb-4">Понеделник - Петък, от 7:00 до 19:00</p>
                    <p className="font-semibold text-primary">
                      <a href="tel:0894320214" className="hover:text-orange-500 transition-colors">
                        0894320214
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <Socials
                containerStyles="flex gap-[40px]"
                iconStyles="text-primary text-[20px]"
              />
            </div>
            {/* form */}
            <div className="flex-1">
              <h2 className="h2 mb-3">Изпратете запитване</h2>
              <p className="mb-9">
                Попълнете формата и ние ще се свържем с вас, за да подготвим
                индивидуална оферта за вашия проект.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
