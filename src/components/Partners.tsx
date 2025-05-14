import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partners } from "../data/partners";
import "swiper/css";

export const Partners: React.FC = () => {
  return (
    <section className="py-12 mt-8 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-white font-medium">Ils nous font confiance</p>
        </div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="partners-carousel"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <img
                src={partner.image}
                alt={partner.name}
                className="w-36 brightness-0 invert opacity-50 hover:brightness-100 hover:invert-0 hover:opacity-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
