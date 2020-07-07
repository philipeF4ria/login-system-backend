import { Router } from 'express';

import userRoutes from './users.routes';
import sessionRouter from './sessions.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRouter);

export default routes;
