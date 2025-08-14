import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import { contactQuery, siteSettingsQuery } from "../../lib/queries";

export default async function ContactPage() {
  const contact = await sanityClient.fetch(contactQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <footer className="bg-gradient-to-b from-[#081123] to-black text-white border-t-4 border-[#2ab4ff]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Top: Contact Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{contact.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{contact.description}</p>
            <h1
              
              className="inline-block text-white font-semibold  py-12 text-2xl"
            >
              Tell us about your project
            </h1>
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

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom: Footer Info */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo + About */}
          <div>
            {site.logoUrl && (
              <Image
                src={site.logoUrl}
                alt="Logo"
                width={160}
                height={80}
                className="w-40 h-auto mb-4"
                priority
              />
            )}
            <p className="leading-relaxed text-gray-400">{site.footerText}</p>
          </div>

          {/* Social Links */}
          <div className="pl-0 md:pl-12">
            <h3 className="text-white font-semibold mb-4 whitespace-nowrap">
              Follow Us
            </h3>
            <ul className="flex flex-wrap gap-4 text-lg">
              {site.socialLinks?.map((rawUrl: string, index: number) => {
                const safeUrl = rawUrl.startsWith("http")
                  ? rawUrl
                  : `https://${rawUrl}`;

                let hostname = "";
                try {
                  hostname = new URL(safeUrl).hostname.replace("www.", "");
                  hostname = hostname.split(".")[0];
                } catch (e) {
                  console.log("Invalid URL:", rawUrl);
                }

                const title =
                  hostname.charAt(0).toUpperCase() + hostname.slice(1);

                return (
                  <li key={index} className="flex items-center space-x-2">
                    {index !== 0 && <span className="text-gray-500">|</span>}
                    <a
                      href={safeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#2ab4ff] transition-colors duration-200"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
