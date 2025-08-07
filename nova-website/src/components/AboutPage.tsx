import { aboutQuery } from "../../lib/queries"
import { sanityClient } from "../../lib/sanity"


export default async function AboutPage() {
  const  about = await sanityClient.fetch(aboutQuery)
  return (
    <section  className=" text-black max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{about.aboutTitle}</h1>
      <p className="text-lg mb-6">{about.aboutDescription}</p>
      <ul className="list-disc pl-5 space-y-2">
        {about.teamMembers?.map((member: string, i: number) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
    </section>
  )
}
