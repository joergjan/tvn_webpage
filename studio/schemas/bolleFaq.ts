import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bolleFaq',
  title: 'Bollä Dunnschtig FAQ',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Frage',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Antwort',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
