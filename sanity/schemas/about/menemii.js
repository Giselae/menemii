export default {
  title: "About Menemii",
  name: "menemii",
  type: "document",

  fields: [
    {
      title: "About Menemii",
      name: "about",
      type: "text",
      description: "Describe the company",
    },

    {
      title: "Image of your choice",
      name: "image",
      type: "image",
      description: "Choose a photo that you think represents Menemii",
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
