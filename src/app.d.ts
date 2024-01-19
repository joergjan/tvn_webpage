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
		image?: Image[];
		person?: PersonRiege[];
		trainingszeiten?: Trainingszeit[];
	};

	type Role = {
		id: number;
		name: string;
		personId?: number | null;
	};

	type Person = {
		id: number;
		firstName: string;
		name: string;
		isVorstand: boolean | null;
		email: string;
		role?: Role | null;
		image?: Image | null;
		riegen?: PersonRiege[];
	};

	type Trainingszeit = {
		id: number;
		riegeId: number;
		weekdayId: number;
		from: Date;
		to: Date;
	};

	type Weekday = {
		id: number;
		name: string;
		trainingszeiten?: Trainingszeit[];
	};

	type Galery = {
		id: number;
		name: string;
		image?: Image[];
	};

	type PersonRiege = {
		personId: number;
		riegeId: number;
	};

	type Image = {
		id: number;
		url: string;
		date: Date;
		galeryId?: number;
		riegeId?: number;
		postId?: number;
		personId?: number;
	};

	type Post = {
		id: number;
		title: string;
		text: string;
		date: Date;
		image: Image[];
	};
}

export {};
