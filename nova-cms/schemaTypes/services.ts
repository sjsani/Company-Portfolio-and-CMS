import { defineType } from 'sanity'


const services = defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Service Description',
      type: 'text',
    },
    {
      name: 'serviceIcon',
      title: 'Service Icon',
      type: 'image',
    },

  ],
})

export default services
