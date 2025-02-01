import {defineField, defineType} from 'sanity'
import training from './training'

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
      validation: (rule) =>
        rule
          .max(4)
          .error('Maximal 4 Fotos erlaubt. Verwende die Galerie, um weitere Fotos hinzuzufügen.'),
    }),
    defineField({
      name: 'training',
      title: 'Trainingszeiten',
      type: 'array',
      of: [{type: 'training'}],
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
