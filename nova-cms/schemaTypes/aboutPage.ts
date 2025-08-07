import { defineType } from 'sanity'

const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
    },
    {
      name: 'aboutDescription',
      title: 'About Description',
      type: 'text',
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of:[
        {
          name:'name',
          title:'Name',
          type:'string',
        }
      ]
    },

  ],
})

export default aboutPage