// ageID :: 0 steht für Jugendriegen (u16) // 1 steht für Aktive und höher (ü16)

export const riegen = [
	{
		name: 'Aktive',
		time1: '20:15 - 22:00 Uhr',
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
		imageUrl3: './images/riegen/aktive3.jpg'
	},
	{
		name: 'Eltern-Kind ElKi',
		time1: '09:15 - 10:15 Uhr',
		day1: 'Freitag',
		time2: '',
		day2: '',
		twodays: false,
		badgename: 'ElKi',
		age: 'ab 2 Jahren',
		ageID: 0,
		riegeID: 2,
		description:
			'Die Jugendriege ist ein wichtiges Standbein unseres Vereins und so liegt es uns sehr am Herzen, unseren Nachwuchs optimal zu fördern. Bei uns steht jedoch nicht nur die Leichtathletik oder das Geräteturnen im Vordergrund, sondern auch Spiel und Spass. In der Jugendriege hast du die Möglichkeit, die Freude an der Bewegung zu entdecken und auszuleben, aber auch soziale Werte werden dir hier vermittelt. So lernst du dich in einer Gruppe zu integrieren und gemeinsam mit anderen ein Ziel zu erreichen. Bei uns ist also stets was los!',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
	},
	{
		name: 'Kinderturnen KiTu',
		time1: '16:45 - 17:55 Uhr',
		day1: 'Donnerstag',
		time2: '',
		day2: '',
		twodays: false,
		badgename: 'KiTu',
		age: 'ab Kindergarten',
		ageID: 0,
		riegeID: 3,
		description:
			'Die Jugendriege ist ein wichtiges Standbein unseres Vereins und so liegt es uns sehr am Herzen, unseren Nachwuchs optimal zu fördern. Bei uns steht jedoch nicht nur die Leichtathletik oder das Geräteturnen im Vordergrund, sondern auch Spiel und Spass. In der Jugendriege hast du die Möglichkeit, die Freude an der Bewegung zu entdecken und auszuleben, aber auch soziale Werte werden dir hier vermittelt. So lernst du dich in einer Gruppe zu integrieren und gemeinsam mit anderen ein Ziel zu erreichen. Bei uns ist also stets was los!',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
	},
	{
		name: 'Jugendriege Klein',
		time1: '18:00 - 19:00 Uhr',
		day1: 'Donnerstag',
		time2: '',
		day2: '',

		twodays: false,
		badgename: 'Jugi Klein',
		age: 'ab 1. Klasse',
		ageID: 0,
		riegeID: 4,
		description:
			'Die Jugendriege ist ein wichtiges Standbein unseres Vereins und so liegt es uns sehr am Herzen, unseren Nachwuchs optimal zu fördern. Bei uns steht jedoch nicht nur die Leichtathletik oder das Geräteturnen im Vordergrund, sondern auch Spiel und Spass. In der Jugendriege hast du die Möglichkeit, die Freude an der Bewegung zu entdecken und auszuleben, aber auch soziale Werte werden dir hier vermittelt. So lernst du dich in einer Gruppe zu integrieren und gemeinsam mit anderen ein Ziel zu erreichen. Bei uns ist also stets was los!',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
	},
	{
		name: 'Jugendriege Gross',
		time1: '19:00 - 20:00 Uhr',
		day1: 'Donnerstag',
		time2: '',
		day2: '',
		twodays: false,
		badgename: 'Jugi Gross',
		age: 'ab 4. Klasse',
		ageID: 0,
		riegeID: 5,
		description:
			'Die Jugendriege ist ein wichtiges Standbein unseres Vereins und so liegt es uns sehr am Herzen, unseren Nachwuchs optimal zu fördern. Bei uns steht jedoch nicht nur die Leichtathletik oder das Geräteturnen im Vordergrund, sondern auch Spiel und Spass. In der Jugendriege hast du die Möglichkeit, die Freude an der Bewegung zu entdecken und auszuleben, aber auch soziale Werte werden dir hier vermittelt. So lernst du dich in einer Gruppe zu integrieren und gemeinsam mit anderen ein Ziel zu erreichen. Bei uns ist also stets was los!',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
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
			'Unsere Männerriege richtet sich an Männer, welche gerne weiterhin etwas für ihre Gesundheit tun möchten, denen aber auch die Geselligkeit wichtig ist. Die Leiter bieten ein abwechslungsreiches Training, dabei steht die Erhaltung der Beweglichkeit im Vordergrund. Daneben werden aber auch die verschiedenen Bereiche Kraft, Ausdauer und Geschicklichkeit berücksichtigt. Einmal monatlich findet ein Spielabend in der Turnhalle, sowie ein sozialer Anlass ausserhalb des Turnbetriebes statt.',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
	},
	{
		name: 'Frauenriege',
		time1: '19:30 - 21:00 Uhr',
		day1: 'Mittwoch',
		time2: '',
		day2: '',
		twodays: false,
		badgename: 'Frauenriege',
		age: 'Beitritt nach eigenem Ermessen',
		ageID: 1,
		riegeID: 7,
		description:
			'Hast du auch Lust zu turnen? Da es mit mehr Frauen auch mehr Spass macht, turnen wir gemeinsam mit Hüttwilen. Unser Programm gestaltet sich sehr abwechslungsreich und jede Turnerin hat auch die Möglichkeit,, sich selbst einzubringen. Unser Programm besteht aus Yoga, Pilates, Aerobic, Leichtathletik, Geräteturnen, Ausdauer, Kraft und Spielen. Unsere Stunden finden in Nussbaumen und Hüttwilen statt. Ist dein Interesse geweckt? Melde dich doch bei uns. Bei uns kannst du jederzeit reinschauen. Wir freuen uns auf dich!',
		imageUrl: './images/riegen/alleRiegen.jpg',
		imageUrl2: '',
		imageUrl3: ''
	}
];
