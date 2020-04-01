import { Router } from 'express';

import OngsController from './app/controller/OngController';
import IncidentsController from './app/controller/IncidentController';
import ProfileController from './app/controller/ProfileController';
import SessionsController from './app/controller/SessionController';

import sessionValidator from './app/validator/sessionValidator';
import ongsValidator from './app/validator/ongsValidator';
import incidentsValidator from './app/validator/incidentsValidator';

import authMiddlewar from './app/middlewares/auth';

const routes = new Router();

routes.post(
  '/sessions',
  sessionValidator.cereateSession,
  SessionsController.store
);

routes.get('/ongs', OngsController.index);

routes.post('/ongs', ongsValidator.cereateOng, OngsController.store);

routes.get(
  '/incidents',
  incidentsValidator.listIncidents,
  IncidentsController.index
);

routes.use(authMiddlewar);

routes.get('/profile', ProfileController.index);

routes.post(
  '/incidents',
  incidentsValidator.createIncident,
  IncidentsController.store
);

routes.delete(
  '/incidents/:id',
  incidentsValidator.deleteIncident,
  IncidentsController.delete
);

export default routes;
