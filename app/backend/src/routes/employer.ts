import { Router } from 'express';

import employerController from '../controllers/employer';

const employerRoute = Router();

employerRoute.get('/get-all', employerController.getAllEmployers);

employerRoute.get('/get-one', employerController.getEmployerByid);

employerRoute.post('/create', employerController.registerEmployer);

employerRoute.patch('/edit', employerController.editEmployer);

employerRoute.delete('/delete', employerController.deleteEmployer);



export default employerRoute;