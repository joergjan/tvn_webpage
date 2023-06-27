// ageID :: 0 steht für Jugendriegen (u16) // 1 steht für Aktive und höher (ü16)

export const riegen = [
	{
		name: 'Aktive',
		time1: '19:30 - 21:15 Uhr',
		day1: 'Montag',
		time2: '20:15 - 22:00 Uhr',
		day2: 'Freitag',
		twodays: true,
		badgename: 'Aktive',
		age: 'ab 16 Jahren',
		ageID: 1,
		riegeID: 1,
		description:
			'Wir beschäftigen uns mit allen möglichen Sportarten. Im Sommer sind die Turnfester natürlich unser Highlight, wobei das Sportliche zählt, aber die Geselligkeit auch nicht zu kurz kommt.',
		imageUrl: './images/riegen/aktive.jpg',
		imageUrl2: './images/riegen/aktive2.jpg',
		imageUrl3: './images/riegen/aktive3.jpg',

		leiter: {
			name: 'Jan Jörg',
			imageUrl: './images/people/jan.jpg'
		}
	},
	{
		name: 'Eltern-Kind ElKi',
		time1: '09:15 - 10:15 Uhr',
		day1: 'Donnerstag',
		time2: '',
		day2: '',
		twodays: false,
		badgename: 'ElKi',
		age: 'ab 2 Jahren',
		ageID: 0,
		riegeID: 2,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Jan Jörg',
			imageUrl: './images/people/avatar.jpeg'
		}
	},
	{
		name: 'Kinderturnen KiTu',
		time1: '16:45 - 17:45 Uhr',
		day1: 'Mittwoch',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'KiTu',
		age: 'ab Kindergarten',
		ageID: 0,
		riegeID: 3,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Jan Jörg',
			imageUrl: './images/people/avatar.jpeg'
		}
	},
	{
		name: 'Jugendriege Klein',
		time1: '18:00 - 19:00 Uhr',
		day1: 'Mittwoch',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'Jugi Klein',
		age: 'ab 1. Klasse',
		ageID: 0,
		riegeID: 4,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Sabrina Akeret',
			imageUrl: './images/people/avatar.jpeg'
		}
	},
	{
		name: 'Jugendriege Gross',
		time1: '19:00 - 20:00 Uhr',
		day1: 'Mittwoch',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'Jugi Gross',
		age: 'ab 4. Klasse',
		ageID: 0,
		riegeID: 5,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Philipp Rot',
			imageUrl: './images/people/avatar.jpeg'
		}
	},
	{
		name: 'Männerriege',
		time1: '20:15 - 22:00 Uhr',
		day1: 'Donnerstag',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'Männerriege',
		age: 'Beitritt nach eigenem Ermessen',
		ageID: 1,
		riegeID: 6,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Philipp Rot',
			imageUrl: './images/people/avatar.jpeg'
		}
	},
	{
		name: 'Frauenriege',
		time1: '20:00 - 21:30 Uhr',
		day1: 'Mittwoch',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'Frauenriege',
		age: 'Beitritt nach eigenem Ermessen',
		ageID: 1,
		riegeID: 7,
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

		imageUrl: './images/riegen/beispiel.jpeg',
		imageUrl2: './images/riegen/beispiel.jpeg',
		imageUrl3: './images/riegen/beispiel.jpeg',

		leiter: {
			name: 'Sabrina Akeret',
			imageUrl: './images/people/avatar.jpeg'
		}
	}
];
