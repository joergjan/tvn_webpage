import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/mp4',
      },
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
      media: 'video',
      title: 'title',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
