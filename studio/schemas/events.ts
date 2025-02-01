import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Anlässe',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
    }),
    defineField({
      name: 'dateFrom',
      title: 'Datum von',
      type: 'date',
    }),
    defineField({
      name: 'dateTo',
      title: 'Datum bis',
      type: 'date',
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
