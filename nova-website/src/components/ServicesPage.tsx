// components/ServicesPage.tsx
import { sanityClient } from "../../lib/sanity";
import { servicesQuery } from "../../lib/queries";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  iconUrl: string;
}

export default async function ServicesPage() {
  const services: Service[] = await sanityClient.fetch(servicesQuery);
  console.log("Services fetched:", services);

  return (
    
    <section
      className="text-black px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full py-16 rounded-lg border-t-4 border-blue-500"
      style={{ backgroundColor: "#f5f9ff" }}
    >
      
      <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full"
            style={{
              background: "linear-gradient(to bottom, #f5f9ff, #ffffff)",
              minHeight: "300px", // equal card height
            }}
          >
            {service.iconUrl && (
              <div className="w-20 h-20 mb-4 relative flex items-center justify-center p-3">
                <Image
                  src={service.iconUrl}
                  alt={`${service.title} icon`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 80px, 80px"
                />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-sm sm:text-base text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
