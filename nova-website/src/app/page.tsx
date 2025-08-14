// app/page.tsx
import { sanityClient } from "../../lib/sanity";
import { siteSettingsQuery ,heroQuery } from "../../lib/queries";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import ServicesPage from "@/components/ServicesPage";
import FirstPage from "@/components/FirstPage";
import TestimonialsPage from "@/components/Testimonials";
import GradientWrapper from "@/components/GradientWrapper";
import SEO from "@/components/SEO"; // your SEO component

export default async function HomePage() {
  const site = await sanityClient.fetch(siteSettingsQuery);
  const hero = await sanityClient.fetch(heroQuery);

  return (
    <>

      <SEO siteSeo={site.seo} />

      <main className="min-h-screen w-full overflow-x-hidden">
        <section id="home">
          <FirstPage hero={hero} site={site} />
        </section>

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
    </>
  );
}
