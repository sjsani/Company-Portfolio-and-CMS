
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
      modules={[Navigation, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
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
          <div className="bg-gray-100 rounded-lg shadow-md p-6 text-center max-w-md mx-auto">
            {testimonial.imageUrl && (
              <div className="w-16 h-16 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={testimonial.imageUrl}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
            )}
            <p className="text-sm italic mb-4 text-gray-900">
              {testimonial.quote}
            </p>
            <h3 className="text-lg text-black font-semibold">{testimonial.name}</h3>
            <p className="text-xs text-gray-800">
              {testimonial.role} @ {testimonial.company}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
