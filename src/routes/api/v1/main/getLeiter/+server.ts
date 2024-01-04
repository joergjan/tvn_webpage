import { prismaClient } from '$lib/server/db/prisma';
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	let leiter = [];

	leiter = await prismaClient.person.findMany({
		where: {
			riegen: {
				some: {}
			}
		},
		include: {
			avatar: true,
			riegen: {
				include: {
					riege: {
						include: {
							image: true,
							trainingszeiten: {
								include: {
									weekday: true
								}
							}
						}
					}
				}
			}
		}
	});

	return json({
		leiter: leiter
	});
};
