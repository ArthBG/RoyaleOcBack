import { Router } from 'express';
import cardRouter from './cards.routes.js';    

const routes = Router();

routes.use('/cards', cardRouter);

export { routes }