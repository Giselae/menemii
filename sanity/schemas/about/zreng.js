export default {
  title: "About Zreng",
  name: "zreng",
  type: "document",

  fields: [
    {
      title: "About yourself",
      name: "about",
      type: "text",
      description: "Describe yourself and your competence",
    },

    {
      title: "Image of you",
      name: "image",
      type: "image",
      description: "Choose a photo that you want as profile pic",
      options: {
        hotspot: true,
      },
    },

    {
      name: "slug",
      hidden: "true",
      type: "slug",
      options: {
        source: "name",
        maxLength: "100",
      },
    },
  ],
};
