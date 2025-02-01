import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontaktVorstand',
  title: 'Vorstand',
  type: 'document',
  fields: [
    defineField({
      name: 'fullname',
      title: 'Vorname und Nachname',
      type: 'string',
    }),
    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Vorstandsfunktion',
      type: 'string',
      options: {
        list: [
          'Präsident',
          'Präsidentin',
          'Vizepräsident',
          'Vizepräsidentin',
          'Kassier',
          'Kassierin',
          'Aktuar',
          'Aktuarin',
          'Oberturner',
          'Oberturnerin',
        ],
      },
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
