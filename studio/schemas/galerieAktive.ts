import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'galerieAktive',
  title: 'Galerie Aktive',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.max(40).required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
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
