import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontaktLeiter',
  title: 'Leiter',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Name',
      type: 'string',
    }),

    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'riege',
      title: 'Riegen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'riege'}],

          options: {
            filter: ({document}) => {
              return {
                filter: 'product._ref == $id',
                params: {id: document._id},
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
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
