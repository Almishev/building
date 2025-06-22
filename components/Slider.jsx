"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import SliderBtns from "./SliderBtns";

const Slider = () => {
  return (
    <Swiper className="bg-white shadow-custom w-full max-w-[630px] h-[200px]">
      {/* slide 1 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img 

          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Клиент на Concrete Company - Парапанов груп"
            />
          </div>
          */}
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Надминаха очакванията ми! Работата беше свършена в срок, в рамките
              на бюджета и с отлично качество. Горещо препоръчвам шлайфане на бетон от Конкрет Компани!
            </p>
            <p className="font-primary font-semibold text-primary">Иван Русков</p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 2 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          {/*}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Клиент на Concrete Company - Парапанов груп"
            />
          </div>
          */}
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Изключителни професионалисти. Подът в нашия офис стана невероятен
              - модерен, лъскав и много лесен за почистване.
            </p>
            <p className="font-primary font-semibold text-primary">
              Петър Безаков
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* slide 3 */}
      <SwiperSlide>
        <div className="px-12 md:pl-[60px] flex items-center gap-9 h-full">
          {/* avatar img */}
          {/*}
          <div className="relative hidden xl:flex w-[90px] h-[90px]">
            <Image
              src="/assets/img/testimonials/avatar.jpg"
              fill
              className="object-contain"
              quality={100}
              alt="Клиент на Concrete Company - Парапанов груп"
            />
          </div>
          */}
          {/* text */}
          <div className="flex-1 xl:max-w-[340px] flex flex-col gap-2">
            <p>
              Екипът беше много отзивчив и изпълни всичко според нашите
              изисквания. Резултатът е подова настилка от най-висок клас.
            </p>
            <p className="font-primary font-semibold text-primary">
              Георги Джаников
            </p>
          </div>
        </div>
      </SwiperSlide>

      {/* slider btns */}
      <SliderBtns />
    </Swiper>
  );
};

export default Slider;
