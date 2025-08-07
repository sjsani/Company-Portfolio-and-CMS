import { defineType } from 'sanity'

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of:[{
        name:'platformUrl',
        title:'Platform Url',
        type:'url',
        
      },]
    },
    {
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
    },
  ],
})

export default siteSettings
