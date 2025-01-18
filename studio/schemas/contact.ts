import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Kontaktperson',
  type: 'document',
  fields: [
    defineField({
      name: 'firstname',
      title: 'Vorname',
      type: 'string',
    }),
    defineField({
      name: 'lastname',
      title: 'Nachname',
      type: 'string',
    }),
    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'street',
      title: 'Strasse & Hausnummer',
      type: 'string',
    }),
    defineField({
      name: 'postcode',
      title: 'PLZ',
      type: 'number',
    }),
    defineField({
      name: 'place',
      title: 'Ort',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      date: 'date',
      author: 'author.name',
      title: 'mail',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
