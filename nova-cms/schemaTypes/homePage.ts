import { defineType } from 'sanity'


const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
    },
    {
      name: 'callToAction',
      title: 'Call To Action',
      type: 'string',
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    },

  ],
})

export default homePage
