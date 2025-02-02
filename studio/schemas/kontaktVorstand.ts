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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mail',
      title: 'Email',
      type: 'string',
      options: {
        list: [
          {title: 'info@tvnussbaumen.ch', value: 'info@tvnussbaumen.ch'},
          {title: 'jugend@tvnussbaumen.ch', value: 'jugend@tvnussbaumen.ch'},
          {title: 'praesi@tvnussbaumen.ch', value: 'praesi@tvnussbaumen.ch'},
          {title: 'oberturner@tvnussbaumen.ch', value: 'oberturner@tvnussbaumen.ch'},
          {title: 'kassier@tvnussbaumen.ch', value: 'kassier@tvnussbaumen.ch'},
          {title: 'vize@tvnussbaumen.ch', value: 'vize@tvnussbaumen.ch'},
        ],
      },
      validation: (rule) => rule.required(),
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
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Profilbild (sollte quadratisch sein!!)',
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
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
