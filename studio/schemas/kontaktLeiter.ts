import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kontaktLeiter',
  title: 'Leiter',
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
      name: 'riegen',
      title: 'leitet folgende Riegen',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'riege'}],
        },
      ],
    }),
    defineField({
      name: 'additionalriegen',
      title: 'ist Hilfsleiter in folgenden Riegen:',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'riege'}],
        },
      ],
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
