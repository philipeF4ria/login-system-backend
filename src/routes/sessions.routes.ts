import { Router } from 'express';

import AuthenticatedService from '../services/AuthenticatedService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
	try {
		const { email, password } = request.body;

		const authenticatedUser = new AuthenticatedService();

		const { user, token } = await authenticatedUser.execute({
			email,
			password,
		});

		delete user.password;

		return response.json({
			user,
			token,
		});
	} catch (err) {
		return response.status(400).json({ error: err.message });
	}
});

export default sessionRouter;
