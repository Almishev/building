"use client";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";


const Hero = () => {
  return (
    <section className="h-[70vh] relative overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/img/hero/bg.jpg"
        alt="Професионално шлайфане на бетон в София, Пловдив и Благоевград"
        fill
        className="object-cover"
        priority
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/50 to-black/70 z-10"></div>
      <div className="container mx-auto h-full flex items-center relative z-20">
        <div className="text-white text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 text-white mb-4"
          >
            <span className="text-accent">Професинално Шлайфане</span> на бетон
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9"
          >
            Предлагаме цялостни решения за машинно шлайфане на индустриални подове до стилни декоративни решения. 
            От концепция до завършване, ние гарантираме, 
            че всеки детайл е оптимизиран за здравина и издръжливост.
          </motion.p>
          {/* btn */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
          <Link href='/#projects'>
            <Button text="Вижте нашите проекти" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
