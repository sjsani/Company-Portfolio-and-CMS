// components/TestimonialsLayout.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export default function TestimonialsLayout({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 10000 }}
  breakpoints={{
    640: { slidesPerView: 1 },
    1024: { slidesPerView: 2 },
  }}
  className="w-full"
>

      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative bg-gradient-to-br from-[#e9f2ff] to-[#f5faff] rounded-xl shadow-lg p-8 text-center max-w-md mx-auto overflow-hidden"
            style={{
              minHeight: "320px",
            }}
          >
            {/* subtle pattern overlay */}
            <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10 pointer-events-none"></div>

            {testimonial.imageUrl && (
              <div className="w-20 h-20 mx-auto mb-4 relative rounded-full overflow-hidden ring-2 ring-blue-200">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            )}

            {/* speech bubble style */}
            <p className="relative text-sm sm:text-base italic mb-6 text-gray-900 before:content-['“'] before:text-3xl before:absolute before:-top-2 before:-left-2 after:content-['”'] after:text-3xl after:absolute after:-bottom-2 after:-right-2">
              {testimonial.quote}
            </p>

            <h3 className="text-lg sm:text-xl text-black font-semibold">{testimonial.name}</h3>
            <p className="text-xs sm:text-sm text-gray-700">
              {testimonial.role} @ {testimonial.company}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
