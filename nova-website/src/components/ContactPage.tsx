import { sanityClient } from "../../lib/sanity";
import { contactQuery, siteSettingsQuery } from "../../lib/queries";

import Link from "next/link";

export default async function ContactPage() {
  const contact = await sanityClient.fetch(contactQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <>
      {/* Contact Section */}
      <section className="bg-[#0A0A0A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{contact.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{contact.description}</p>
            <a
              href="/contact"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Tell us about your project
            </a>
          </div>

          {/* Right */}
          <div className="space-y-6 text-gray-300">
            <div>
              <p className="text-sm font-semibold text-white">Email</p>
              <p>{contact.email}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Phone</p>
              <p>{contact.phone}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Address</p>
              <p className="whitespace-pre-line">{contact.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {/* Logo + About */}
          <div>
            <img src={site.logoUrl} alt="Logo" className="w-32 mb-4" />
            <p>{site.footerText}</p>
          </div>



          {/* Social Links */}
          <div className="pl-50"> {/* Use pl-12 instead of px-50 */}
            <h3 className="text-white font-semibold mb-4 whitespace-nowrap">
              Follow Us
            </h3>
            <div className="flex space-x-4 text-xl">
              {site.socialLinks?.map((rawUrl: string, index: number) => {
                const safeUrl = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;

                let hostname = "";
                try {
                  hostname = new URL(safeUrl).hostname.replace("www.", "");
                  hostname = hostname.split(".")[0]; // keeps only "instagram", "x", etc.
                } catch (e) {
                  console.log("Invalid URL:", rawUrl);
                }


                const title = hostname.charAt(0).toUpperCase() + hostname.slice(1);

                return (
                  <li key={index} className="flex items-center space-x-2">
                      {index !== 0 && <span className="text-gray-500">|</span>}
                    <a
                      href={safeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400 text-white"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}


            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
