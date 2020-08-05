import {Router} from 'express'
import indexRouter from './index.routes';
import contextRouter from './context.routes';

const routes = Router();

routes.use('/main', indexRouter)
routes.use('/context', contextRouter)

export default routes;