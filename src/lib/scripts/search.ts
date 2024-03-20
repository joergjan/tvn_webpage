import FlexSearch from 'flexsearch';

let riegenIndex: FlexSearch.Index;
let postsIndex: FlexSearch.Index;
let leiterIndex: FlexSearch.Index;
let vorstandIndex: FlexSearch.Index;

let riegenData;
let postData;
let leiterData;
let vorstandData;

export function createIndex(
	riegen: Riege[],
	/*posts: Post[],*/ leiter: Person[],
	vorstand: Person[]
) {
	riegenIndex = new FlexSearch.Index({ tokenize: 'forward' });
	postsIndex = new FlexSearch.Index({ tokenize: 'forward' });
	leiterIndex = new FlexSearch.Index({ tokenize: 'forward' });
	vorstandIndex = new FlexSearch.Index({ tokenize: 'forward' });

	riegen.forEach((riege: Riege, i: number) => {
		const item = `${riege.name} ${riege.description} ${riege.age} ${riege.trainingszeiten[0]?.weekday.name} ${riege.trainingszeiten[1]?.weekday.name}`;
		riegenIndex.add(i, item);
	});

	/*
	posts.forEach((post: Post, i: number) => {
		const item = `${post.title} ${post.text}`;
		postsIndex.add(i, item);
	});
	*/
	leiter.forEach((leiter: Person, i: number) => {
		const item = `${leiter.name} ${leiter.firstName} ${leiter.email}`;
		leiterIndex.add(i, item);
	});
	vorstand.forEach((vorstand: Person, i: number) => {
		const item = `${vorstand.name} ${vorstand.firstName} ${vorstand.email} ${vorstand.role?.name}`;
		vorstandIndex.add(i, item);
	});

	riegenData = riegen;
	leiterData = leiter;
	vorstandData = vorstand;
}

export function searchIndex(searchTerm: string) {
	//escape special regex charactes
	const match = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const riegenResults = riegenIndex.search(match);
	/*const postsResults = postsIndex.search(match);*/
	const leiterResults = leiterIndex.search(match);
	const vorstandResults = vorstandIndex.search(match);

	const riegen: Riege[] = riegenResults
		.map((index) => riegenData[index as number])
		.map(({ id, name, description, age, trainingszeiten }) => {
			return {
				id,
				name: replaceTextWithMarker(name, searchTerm),
				description: getMatches(description, searchTerm),
				age: replaceTextWithMarker(age, searchTerm),
				trainingszeiten: trainingszeiten.map(({ weekday, ...rest }) => ({
					...rest,
					weekday: {
						...weekday,
						name: replaceTextWithMarker(weekday.name, searchTerm)
					}
				}))
			};
		});
	/*
	const posts: Post[] = postsResults
		.map((index) => posts[index as number])
		.map(({ title, text }) => {
			return { title, text };
		});
	*/
	const leiter: Person[] = leiterResults
		.map((index) => leiterData[index as number])
		.map(({ name, firstName, email }) => {
			return {
				name: replaceTextWithMarker(name, searchTerm),
				firstName: replaceTextWithMarker(firstName, searchTerm),
				email: replaceTextWithMarker(email, searchTerm)
			};
		});

	const vorstand: Person[] = vorstandResults
		.map((index) => vorstandData[index as number])
		.map(({ name, firstName, email, role: { name: roleName } }) => {
			return {
				name: replaceTextWithMarker(name, searchTerm),
				firstName: replaceTextWithMarker(firstName, searchTerm),
				email: replaceTextWithMarker(email, searchTerm),
				role: replaceTextWithMarker(roleName, searchTerm)
			};
		});

	return { riegen: riegen, /*posts: posts,*/ leiter: leiter, vorstand: vorstand };
}

function replaceTextWithMarker(text: string, searchTerm: string) {
	const words = searchTerm
		.trim()
		.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
		.replace(/\s\s+/g, ' ')
		.split(' ');
	let markedText = text;
	words.forEach((word) => {
		const regex = new RegExp(word, 'gi');
		markedText = markedText.replaceAll(regex, (match) => `<mark>${match}</mark>`);
	});
	return markedText;
}

function getMatches(text: string, searchTerm: string, limit = 1) {
	const regex = new RegExp(searchTerm, 'gi');
	const indexes = [];
	let matches = 0;
	let match;

	while ((match = regex.exec(text)) !== null && matches < limit) {
		indexes.push(match.index);
		matches++;
	}

	return indexes.map((index) => {
		const start = index - 20;
		const end = index + 40;
		const excerpt = text.substring(start, end);
		return `...${replaceTextWithMarker(excerpt, searchTerm)}...`;
	});
}
