import { defineType, defineField } from "sanity"

export const AboutPageType = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mission",
      title: "Mission",
      type: "text",
    }),
    defineField({
      name: "vision",
      title: "Vision",
      type: "text",
    }),
    defineField({
      name: "values",
      title: "Values",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "story",
      title: "Our Story",
      type: "blockContent",
    }),
    defineField({
      name: "storyImage",
      title: "Story Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
})

