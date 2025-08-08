import { aboutQuery } from "../../lib/queries"
import { sanityClient } from "../../lib/sanity"


export default async function AboutPage() {
  const  about = await sanityClient.fetch(aboutQuery)
  return (
<section className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-10 text-black">
  {/* Left Section - Who We Are */}
  <div className="md:w-1/2 pr-6 mb-10 md:mb-0">
    <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
    <p className="text-lg">{about.aboutDescription}.</p>
  </div>

  {/* Vertical Divider */}
  <div className="hidden md:block w-1 bg-black mx-10"></div>

  {/* Right Section - Our Team */}
  <div className="md:w-1/2 pl-10">
    <h2 className="text-3xl font-bold mb-6">Our Team</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
      {about.teamMembers?.map((member: string, i: number) => (
        <div key={i} className="text-sm text-gray-700">
          <span className="whitespace-nowrap">{member}</span>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}
