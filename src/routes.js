import { Router } from 'express';

import OngsController from './controller/OngController';
import IncidentsController from './controller/IncidentController';
import ProfileController from './controller/ProfileController';
import SessionsController from './controller/SessionController';

const routes = new Router();

routes.post('/sessions', SessionsController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

export default routes;
