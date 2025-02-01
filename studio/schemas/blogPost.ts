import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
    }),

    defineField({
      name: 'description',
      title: 'description',
      type: 'text',
    }),
    defineField({
      name: 'body',
      title: 'Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Fotos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'images[0]',
      body: 'body',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
