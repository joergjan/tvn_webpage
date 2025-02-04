import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bolle',
  title: 'Bollä Dunnschtig Datum und Beschreibung',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      validation: (rule) => rule.max(300).required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
      title: 'description',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
