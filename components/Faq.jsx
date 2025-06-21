import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemsData = [
  {
    title: "Колко време отнема шлайфането на бетон?",
    description:
      "Времето за изпълнение зависи от квадратурата, състоянието на основата и желаната степен на полиране. Свържете се с нас за конкретен срок.",
  },
  {
    title: "Подходящ ли е шлайфаният бетон за моя дом?",
    description:
      "Абсолютно! Полираният бетон е модерно и стилно решение не само за индустриални площи, но и за домове, офиси и търговски обекти.",
  },
  {
    title: "Каква е поддръжката на полиран бетон?",
    description:
      "Поддръжката е изключително лесна. Почиства се лесно и не задържа прах, което го прави идеален избор за дълготрайна и красива настилка.",
  },
  {
    title: "Може ли да се оцвети бетонът?",
    description:
      "Да, предлагаме богата гама от цветове и финиши, с които можем да постигнем уникална визия, съобразена с вашия интериор.",
  },
  {
    title: "Колко струва услугата?",
    description:
      "Цената се формира индивидуално според проекта. Изпратете ни запитване, за да получите своята персонализирана оферта.",
  },
  {
    title: "Колко издръжлив е шлайфаният бетон?",
    description:
      "Това е една от най-здравите и дълготрайни подови настилки. Устойчива е на интензивен трафик, износване и натоварване.",
  },
];

// animation variants for FAQ items
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, // staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/* text */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="ЧЗВ" center />
          <h2 className="h2 mb-3">Имате Въпроси? Ние имаме Отговорите</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Събрахме отговори на най-често задаваните въпроси, за да ви
            помогнем да вземете информирано решение за вашия нов под.
          </p>
        </motion.div>
        {/* faq items */}
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.8 }}
                custom={index} // pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
