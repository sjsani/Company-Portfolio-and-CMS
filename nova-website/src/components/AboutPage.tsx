import { aboutQuery } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity";

export default async function AboutPage() {
  const about = await sanityClient.fetch(aboutQuery);

  return (
    <section className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 md:px-8 py-10 text-black box-border overflow-x-hidden">
      {/* Left Section - Who We Are */}
      <div className="md:w-1/2 pr-0 md:pr-6 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-base md:text-lg">{about.aboutDescription}.</p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px bg-black mx-0 md:mx-10"></div>

      {/* Right Section - Our Team */}
      <div className="md:w-1/2 pl-0 md:pl-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {about.teamMembers?.map((member: string, i: number) => (
            <div key={i} className="text-sm md:text-base text-gray-700 truncate">
              <span className="whitespace-nowrap">{member}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
