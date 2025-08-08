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
  console.log("Services fetched:", services)

  return (
    <section className=" text-black  px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {service.iconUrl && (
            <Image
              src={service.iconUrl}
              alt={`${service.title} icon`}
              width={64} // w-16 = 4rem = 64px
              height={64} // h-16 = 4rem = 64px
              className="mb-4"
            />
            )}
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-black">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
