export default {
  title: "Botox",
  name: "botox",
  type: "document",

  fields: [
    {
      title: "Treatment title",
      name: "title",
      type: "string",
      description: "Name of the treatment",
    },

    {
      title: "About the treatment",
      name: "description",
      type: "text",
      description: "Describe the treatment",
    },

    {
      title: "Before treatment",
      name: "before",
      type: "image",
      description: "Photo before treatment",
      options: {
        hotspot: true,
      },
    },

    {
      title: "After treatment",
      name: "after",
      type: "image",
      description: "Photo after treatment",
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
