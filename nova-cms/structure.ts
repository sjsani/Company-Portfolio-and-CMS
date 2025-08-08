// deskStructure.ts
import { StructureResolver } from 'sanity/structure'

export const Structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Home Page
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
        ),

      // Singleton: Site Settings
      S.listItem()
        .title('Site Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      // Singleton: About Page
      S.listItem()
        .title('About Page')
        .child(
          S.editor()
            .id('aboutPage')
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),

      // Singleton: Contact Page
      S.listItem()
        .title('Contact Page')
        .child(
          S.editor()
            .id('contactPage')
            .schemaType('contactPage')
            .documentId('contactPage')
        ),

      // All other document types (like services)
      ...S.documentTypeListItems().filter((item) =>
        !['homePage', 'siteSettings', 'aboutPage', 'contactPage'].includes(item.getId() || '')
      )
    ])
