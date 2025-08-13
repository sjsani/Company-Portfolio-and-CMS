import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";
import { contactQuery, siteSettingsQuery } from "../../lib/queries";

export default async function ContactPage() {
  const contact = await sanityClient.fetch(contactQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <>
      {/* 
        Make sure you have <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        in your _document.tsx or _app.tsx for proper mobile scaling.
      */}

      {/* Contact Section */}
      <section className="bg-[#0A0A0A] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{contact.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{contact.description}</p>
            <Link
              href="/contact"
              className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition"
            >
              Tell us about your project
            </Link>
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
            {site.logoUrl && (
              <Image
                src={site.logoUrl}
                alt="Logo"
                width={128}
                height={64}
                className="w-32 mb-4 h-auto"
              />
            )}
            <p>{site.footerText}</p>
          </div>

          {/* Social Links */}
          <div className="pl-12">
            <h3 className="text-white font-semibold mb-4 whitespace-nowrap">
              Follow Us
            </h3>
            <ul className="flex flex-wrap gap-4 text-xl">
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
                      className="hover:text-gray-400 text-white"
                    >
                      {title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
