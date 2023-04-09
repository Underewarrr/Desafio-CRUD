import { Router } from 'express';

import employerController from '../controllers/employer';

const employerRoute = Router();

employerRoute.get('/get-all', employerController.getAllEmployers);

employerRoute.get('/get-one', employerController.getEmployerByid);

export default employerRoute;