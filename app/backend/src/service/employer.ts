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


  const employer = await employerModel.findOne({ where: { name } });

  if (employer) {
    return { code: 409, type: 'ALREADY_EXIST', message: 'Name used for employer already in use' }
  }

  const data  = await employerModel.create({
    name,
    age,
    role: 'Worker',
  });

  return { code: 201, type: 'SUCCESS', message: 'New Employerd added with success', data };

}

const editEmployer = async (id:number, name: string, age:number ) => {

  const employer = await employerModel.findOne({ where: { id } });

  if (!employer) {
    return { code: 404, type: 'NOT_FOUND', message: 'Employer Not found' }
  }

  const data = await employerModel.update(
    {
      name,
      age,
    },
    {
      where: { id: id }
    }
  );

  return { code: 201, type: 'SUCCESS', message: 'New Employerd edited with success', data };

}

const deleteEmployer = async (id:number) => {

  const employer = await employerModel.findOne({ where: { id } });
 
  if (!employer) {
    return { code: 404, type: 'NOT_FOUND', message: 'Employer Not found' }
  }

  const data = await employerModel.destroy({
    where: {
       id: id //this will be your id that you want to delete
    }
 })

 return { code: 201, type: 'SUCCESS', message: 'New Employerd deleted with success', data };

}

  export default { getAllEmployers, getEmployerByid, registerEmployer, editEmployer, deleteEmployer };