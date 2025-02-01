import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'training',
  title: 'Trainingszeit',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Tag',
      type: 'string',
      options: {
        list: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
      },
    }),
    defineField({
      name: 'start',
      title: 'Startzeit',
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
    }),
    defineField({
      name: 'end',
      title: 'Endzeit',
      type: 'string',
      options: {
        list: ALLOWED_TIMES(),
      },
    }),
  ],
  preview: {
    select: {
      title: 'day',
      start: 'start',
      end: 'end',
    },
  },
})

export function ALLOWED_TIMES() {
  const times = []
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 5) {
      times.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`)
    }
  }
  return times
}
