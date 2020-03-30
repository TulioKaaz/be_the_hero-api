import { Router } from 'express';

import OngsController from './controller/OngController';
import IncidentsController from './controller/IncidentController';
import ProfileController from './controller/ProfileController';
import SessionsController from './controller/SessionController';

import sessionValidator from './validator/sessionValidator';
import ongsValidator from './validator/ongsValidator';
import profileValidator from './validator/profileValidator';
import incidentsValidator from './validator/incidentsValidator';

import authMiddlewar from './middlewares/auth';

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

routes.get('/profile', profileValidator.listProfile, ProfileController.index);

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
