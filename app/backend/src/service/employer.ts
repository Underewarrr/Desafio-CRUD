import employerModel from '../database/models/Employer';

const getAllEmployers = async () => {
  
  const data = await employerModel.findAll();
    
  return { code: 202, type: 'SUCCESS', message: 'All employers have benn listed by request', data };
}

const getEmployerByid = async (id: number) => {

  const data = await employerModel.findOne({ where: { id } });

  if (!data) {
    return { code: 404, type: 'NOT_FOUND', message: 'Employer not found' };
  }
  return { code: 202, type: 'SUCCESS', message: 'One employer have benn listed by request', data };
}

const registerEmployer = async (name: string, age: number) => {


  const employerExist = await employerModel.findOne({ where: { name } });

  if (employerExist) {
    return { code: 409, type: 'ALREADY_EXIST', message: 'Name used for employer already in use' }
  }

  const data  = await employerModel.create({
    name,
    age,
    role: 'Worker',
  });

  return { code: 201, type: 'SUCCESS', message: 'New Employerd added with success', data };
}

  export default { getAllEmployers, getEmployerByid, registerEmployer };