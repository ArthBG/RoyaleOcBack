import { Router } from 'express';
import cardRouter from './cards.routes.js';    
import membroRouter from './membros.routes.js';
import contatosRoutes from './contatos.routes.js';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Server On!');
}
);

routes.use('/cards', cardRouter);
routes.use('/membros', membroRouter);
routes.use('/contatos', contatosRoutes);


export { routes };