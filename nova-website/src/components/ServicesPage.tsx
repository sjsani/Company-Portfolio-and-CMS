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
    <section className="text-black px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center">
        z
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition w-full"
          >
            {service.iconUrl && (
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={service.iconUrl}
                  alt={`${service.title} icon`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 64px, (max-width: 1024px) 64px, 64px"
                />
              </div>
            )}
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm sm:text-base text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
