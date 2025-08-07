import { defineType } from 'sanity'

const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    {
      name: 'contactTitle',
      title: 'Contact Title',
      type: 'string',
    },
    {
      name: 'contactDescription',
      title: 'Contact Description',
      type: 'text',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name:'location',
      title:'Location',
      type:'text',
    },
  ],
})

export default contactPage
