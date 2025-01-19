import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'riege',
  title: 'Riegen',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'age',
      title: 'Alter',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Beschreibung',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Bilder',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      author: 'author.name',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
