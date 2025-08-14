// app/testimonials/page.tsx
import { sanityClient } from "../../lib/sanity";
import { testimonialsQuery } from "../../lib/queries";
import TestimonialsLayout from "./TestimonialsLayout";

export default async function TestimonialsPage() {
  const testimonials = await sanityClient.fetch(testimonialsQuery);

  return (
    <section
      className="max-w-screen-xl mx-auto px-4 py-16 rounded-4xl"
      style={{
        background: "linear-gradient(to bottom right, #e9f2ff, #f5faff)",
      }}
    >
      <h2 className="text-black text-2xl sm:text-3xl font-bold mb-12 text-center">
        What Our Clients Say
      </h2>
      <TestimonialsLayout testimonials={testimonials} />
    </section>
  );
}
