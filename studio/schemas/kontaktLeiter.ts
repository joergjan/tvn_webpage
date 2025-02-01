import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontaktLeiter',
  title: 'Leiter',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Vornmae und Nachname',
      type: 'string',
    }),

    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'riege',
      title: 'Leitet folgende Riegen:',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'riege'}],
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Profilbild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      date: 'date',
      author: 'author.name',
      title: 'fullname',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
