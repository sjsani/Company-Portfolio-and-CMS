// app/testimonials/page.tsx
import { sanityClient } from "../../lib/sanity";
import { testimonialsQuery } from "../../lib/queries";
import TestimonialsLayout from "./TestimonialsLayout";

export default async function TestimonialsPage() {
  const testimonials = await sanityClient.fetch(testimonialsQuery);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className=" text-black text-2xl sm:text-3xl font-bold mb-10 text-center">
        What Our Clients Say
      </h2>
      <TestimonialsLayout testimonials={testimonials} />
    </section>
  );
}
