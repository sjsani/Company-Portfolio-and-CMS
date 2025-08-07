import { sanityClient } from "../../lib/sanity";
import { contactQuery, siteSettingsQuery } from "../../lib/queries";

export default async function ContactPage() {
  const contact = await sanityClient.fetch(contactQuery);
  const site = await sanityClient.fetch(siteSettingsQuery);

  return (
    <main className="flex-1 bg-white text-gray-900 px-6 py-12 max-w-4xl mx-auto">
      {/* Contact Content */}
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-4">{contact.title}</h1>
        <p className="text-lg mb-8 text-gray-700">{contact.description}</p>

        <div className="space-y-4 text-md text-gray-800">
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Location:</strong> {contact.location}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 border-t pt-6">
        {site.footerText}
      </footer>
    </main>
  );
}
