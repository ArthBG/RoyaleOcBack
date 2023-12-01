import { Router } from 'express';
import cardRouter from './cards.routes.js';    
import membroRouter from './membros.routes.js';

const routes = Router();

routes.use('/cards', cardRouter);
routes.use('/membros', membroRouter);

routes.get('/', (req, res) => {
    res.send('Bem-Vindo(a)!');
}
);

export { routes }