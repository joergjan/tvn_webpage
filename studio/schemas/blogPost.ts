import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required().max(50).error('Maximal 50 Zeichen erlaubt'),
    }),
    defineField({
      name: 'date',
      title: 'Datum',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      validation: (rule) => rule.max(350).required().error('Maximal 350 Zeichen erlaubt'),
    }),
    defineField({
      name: 'body',
      title: 'Bericht / Text',
      type: 'blockContent',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Fotos',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (rule) => rule.max(8).error('Maximal 8 Fotos erlaubt'),
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
