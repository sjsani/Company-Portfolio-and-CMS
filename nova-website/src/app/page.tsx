import { sanityClient } from "../../lib/sanity";
import { heroQuery, siteSettingsQuery } from "../../lib/queries";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import ServicesPage from "@/components/ServicesPage";
import FirstPage from "@/components/FirstPage"; // <--- import this
import TestimonialsPage from "@/components/Testimonials";

export default async function HomePage() {
  const hero = await sanityClient.fetch(heroQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <FirstPage hero={hero} site={site} />

      <section id="services" className="py-20 sm:py-32 px-4 w-full overflow-hidden">
        <ServicesPage />
      </section>
      <section id="testimonials" className="py-20 bg-gray-200 sm:py-32 px-4 w-full overflow-hidden">
        <TestimonialsPage />
      </section>

      <section id="about" className="pt-16 sm:pt-20 bg-gray-300 pb-16 sm:pb-20 px-4 w-full overflow-hidden">
        <AboutPage />
      </section>

      <section id="contact" className="w-full overflow-hidden">
        <ContactPage />
      </section>
    </main>
  );
}
