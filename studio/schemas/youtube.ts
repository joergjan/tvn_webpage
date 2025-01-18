import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'Youtube Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link zu Youtube Video',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
      title: 'title',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
