import { Router } from 'express';


import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabilityController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabilityController from '../controllers/ProviderDayAvailabilityController';


const providersRouter = Router();
const appointmentsController = new ProvidersController();
const providerMonthAvalabilityController = new ProviderMonthAvailabilityController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();


providersRouter.use(ensureAuthenticated);


providersRouter.get('/', appointmentsController.index);
providersRouter.get('/:provider_id/month-availability', providerMonthAvalabilityController.index);
providersRouter.get('/:provider_id/day-availability', providerDayAvailabilityController.index);


export default providersRouter;
