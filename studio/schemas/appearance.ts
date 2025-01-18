import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'appearance',
  title: 'Auftritte',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Grund für Auftritt',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Ort',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      place: 'place',
      date: 'date',
      author: 'author.name',
      title: 'title',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
