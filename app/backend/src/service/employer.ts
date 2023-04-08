import employerModel from '../database/models/Employer';

const getAllEmployers = async () => {
  
  const data = await employerModel.findAll();
    
  return { code: 200, type: 'SUCCESS', message: 'All employers have benn listed by request', data };
}

const getEmployerByid = async (id: number) => {

  const data = await employerModel.findOne({ where: { id } });

  if (!data) {
  return { code: 404, type: 'NOT_FOUND', message: 'Employer not found' };
  }
  return { code: 200, type: 'SUCCESS', message: 'One employer have benn listed by request', data };
}
  export default { getAllEmployers, getEmployerByid };