
export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Meta Title",
      type: "string",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
    },
    {
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "ogImage",
      title: "Open Graph Image",
      type: "image",
      options: { hotspot: true },
    },
  ],
};
