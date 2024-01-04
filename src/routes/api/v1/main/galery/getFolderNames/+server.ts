import { prismaClient } from '$lib/server/db/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	let folderNames = [];

	folderNames = await prismaClient.imageFolder.findMany({});

	return json({
		folderNames: folderNames
	});
};
