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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      validation: (rule) => rule.required().max(150).error('Maximal 150 Zeichen erlaubt.'),
    }),
    defineField({
      name: 'dateFrom',
      title: 'Datum von',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'dateTo',
      title: 'Datum bis',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Link für weitere Infos (Bsp: https://www.tvnussbaumen.ch/',
      type: 'string',
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
