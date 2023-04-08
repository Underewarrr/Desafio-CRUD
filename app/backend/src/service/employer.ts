import employerModel from '../database/models/Employer';

const getAllEmployers = async () => {
  
    const data = await employerModel.findAll();
    
      return { code: 200, type: 'SUCCESS', message: 'All employers have benn listed by request', data };
}
  export default { getAllEmployers };