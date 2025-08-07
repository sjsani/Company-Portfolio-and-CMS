// lib/queries.ts

export const siteSettingsQuery = `
  *[_type == "siteSettings"][0]{
    siteTitle,
    footerText,
    socialLinks,
    "logoUrl": siteLogo.asset->url
  }
`;

export const heroQuery = `
  *[_type == "homePage"][0]{
    heroTitle,
    heroDescription,
    callToAction,
    "imageUrl": heroImage.asset->url
  }
`;

export const aboutQuery = `
*[_type == "aboutPage"][0]{
  aboutTitle,
  aboutDescription,
  teamMembers
}
`
;

export const contactQuery = `
*[_type == "contactPage"][0]{
  title,
  description,
  email,
  phone,
  location
}
`;
// lib/queries.ts
export const servicesQuery = `
  *[_type == "services"]{
    title,
    description,
    "iconUrl": serviceIcon.asset->url
  }
`;


