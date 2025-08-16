import { aboutQuery } from "../../lib/queries";
import { sanityClient } from "../../lib/sanity";

export default async function AboutPage() {
  const about = await sanityClient.fetch(aboutQuery);

  return (
    <section
      className="flex flex-col md:flex-row max-w-6xl w-full mx-auto px-4 md:px-15 py-15 
      text-black box-border overflow-x-hidden bg-[#f7faff] border-t-4 border-l-4 border-r-4 border-[#2ab4ff] rounded-lg "
    >
      {/* Left Section - Who We Are */}
      <div className="md:w-1/2 pr-0 md:pr-6 mb-10 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
        <p className="text-base md:text-lg text-gray-800 leading-relaxed">
          {about.aboutDescription}.
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="hidden md:block w-px bg-gradient-to-b from-[#2ab4ff] to-transparent mx-0 md:mx-10"></div>

      {/* Right Section - Our Team */}
      <div className="md:w-1/2 pl-0 md:pl-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Our Team</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {about.teamMembers?.map((member: string, i: number) => (
            <div
              key={i}
              className="px-3 py-2 bg-white shadow-sm rounded-md border border-gray-100 
                         text-center text-sm md:text-base text-gray-700 hover:shadow-md 
                         transition-shadow duration-200"
            >
              {member}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
