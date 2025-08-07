import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partners } from "../data/partners";
import "swiper/css";

export const Partners: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-secondary text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-300">
            Découvrez les entreprises et organisations qui nous font confiance
            pour leurs projets digitaux.
          </p>
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
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="partners-carousel"
        >
          {partners.map((partner) => (
            <SwiperSlide
              key={partner.id}
              className="flex justify-center items-center"
            >
              <img
                src={partner.image || "/placeholder.svg"}
                alt={partner.name}
                className="h-16 w-auto object-contain  transition-all duration-300 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
