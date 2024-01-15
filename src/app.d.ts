declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
	}

	type Riege = {
		id: number;
		name: string;
		description: string;
		age: string;
		person: [];
		trainingszeiten: Trainingszeit[];
		image: Image[];
	};

	type Role = {
		id: number;
		name: string;
	};

	type Person = {
		id: number;
		firstName: string;
		name: string;
		isVorstand: boolean;
		email: string;
		roleId: number;
		avatar?: Avatar;
		riegen: [];
	};

	type Trainingszeit = {
		id: number;
		riege: Riege;
		riegeId: number;
		weekday: Weekday;
		weekdayId: number;
		from: Date;
		to: Date;
	};

	type Weekday = {
		id: number;
		name: string;
		trainingszeiten: Trainingszeit[];
	};

	type ImageFolder = {
		id: number;
		name: string;
		image: Image[];
	};

	type Image = {
		id: number;
		url: string;
		date: Date;
		riege: Riege;
		riegeId: number;
		imageFolder: ImageFolder;
		imageFolderId: number;
	};

	type Avatar = {
		id: number;
		url: string;
		date: Date;
		person: Person;
		personId: number;
	};

	type Post = {
		id: number;
	};
}

export {};
