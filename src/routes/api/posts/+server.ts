export const GET = async ({request, url}) => {
	const authHeader = request.headers.get('Authorization');
	
	if (authHeader !== '123') {
		return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
	}

	const limit = Number(url.searchParams.get('limit') ?? "10");
	const skip = Number(url.searchParams.get('skip') ?? "0");

	const res = await fetch('https://dummyjson.com/posts?limit=' + limit + '&skip=' + skip);
	const data = await res.json();

	return new Response(JSON.stringify({ message: data }), { status: 200 });
};

export const POST = async ({request, url}) => {
	const authHeader = request.headers.get('Authorization');
	
	if (authHeader !== '123') {
		return new Response(JSON.stringify({ message: 'Unauthorized' }), { status: 401 });
	}
	
	const body = await request.json();

	console.log(body)
	return new Response(JSON.stringify({ message: 'Post created' }), { status: 201 });
}