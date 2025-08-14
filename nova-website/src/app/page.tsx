import { sanityClient } from "../../lib/sanity";
import { heroQuery, siteSettingsQuery } from "../../lib/queries";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import ServicesPage from "@/components/ServicesPage";
import FirstPage from "@/components/FirstPage"; // <--- import this
import TestimonialsPage from "@/components/Testimonials";
import GradientWrapper from "@/components/GradientWrapper";


export default async function HomePage() {
  const hero = await sanityClient.fetch(heroQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <main className=" min-h-screen w-full overflow-x-hidden">
      <FirstPage hero={hero} site={site} />
      
      <GradientWrapper>


      <section id="services" className="py-20 sm:py-32 px-4 w-full overflow-hidden">
        
        <ServicesPage />
      </section>
      </GradientWrapper>

      <GradientWrapper>
      <section id="testimonials" className="py-20 sm:py-32 px-4 w-full overflow-hidden">
        <TestimonialsPage />
      </section>
      </GradientWrapper>

      <GradientWrapper>
      <section id="about" className="pt-16 sm:pt-20 pb-16 sm:pb-20 px-4 w-full overflow-hidden">
        <AboutPage />
      </section>
      </GradientWrapper>

      <section id="contact" className="w-full overflow-hidden">
        <ContactPage />
      </section>
    </main>
  );
}
