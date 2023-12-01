import { Router } from 'express';
import cardRouter from './cards.routes.js';    
import membroRouter from './membros.routes.js';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Bem-Vindo(a)!');
}
);

routes.use('/cards', cardRouter);
routes.use('/membros', membroRouter);


export { routes };