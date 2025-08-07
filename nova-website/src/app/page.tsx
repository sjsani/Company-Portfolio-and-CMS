import { sanityClient } from "../../lib/sanity";
import { heroQuery, siteSettingsQuery } from "../../lib/queries";
import AboutPage from "@/components/AboutPage";
import ContactPage from "@/components/ContactPage";
import ServicesPage from "@/components/ServicesPage";

export default async function HomePage() {
  const hero = await sanityClient.fetch(heroQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <main className=" bg-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-6 py-4 flex justify-between items-center  bg-opacity-80  ">
        
        <img src={site.logoUrl} alt="Logo" className="h-10" />
        <div className=" text-gray-600 flex space-x-6 text-sm md:text-base">
          <a href="#" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#services" className="hover:text-blue-400 transition">Services</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
        <section className="h-screen relative flex items-center justify-center text-center px-6">
          {/* Lightly Blurred Background */}
          <div
            className="absolute inset-0 bg-center bg-cover blur-sm scale-105"
            style={{
              backgroundImage: `url(${hero.imageUrl})`,
              filter: 'blur(2px)', // Lighter blur than default
            }}
          ></div>



        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
            {hero.heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            {hero.heroDescription}
          </p>
          <a
            href="#"
            className="text-white inline-block px-6 py-3 bg-blue-600 rounded font-medium hover:bg-blue-700 transition"
          >
            {hero.callToAction}
          </a>
        </div>
      </section>

      {/* Dummy Sections for Scroll (optional) */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
        <AboutPage />
      </section>

      <section id="services" className="py-24 px-6 max-w-5xl mx-auto">
            <ServicesPage />
      </section>

      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
              <ContactPage />
      </section>

      
    </main>
  );
}
