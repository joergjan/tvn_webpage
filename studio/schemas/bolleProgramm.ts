import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bolleProgramm',
  title: 'Bollä Dunnschtig Programm',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Programm',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'time',
      title: 'Zeit ab',
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})

export function ALLOWED_TIMES() {
  const times = []
  for (let h = 16; h < 24; h++) {
    for (let m = 0; m < 60; m += 15) {
      times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`)
    }
  }
  return times
}
