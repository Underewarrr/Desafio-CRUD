import { Request, Response } from 'express';
// Implement controller here

import employer from '../service/employer'; 

const getAllEmployers = async (req: Request, res: Response) => {
   
    const { type, message, code, data } = await employer.getAllEmployers();

    return res.status(code).json({ message, type, data }); 
    
};

const getEmployerByid = async (req: Request, res: Response) => {

    const {id} = req.body

    const { type, message, code, data } = await employer.getEmployerByid(id);

    return res.status(code).json({ message, type, data }); 

}

const registerEmployer = async (req: Request, res: Response) => {

    const {name, age} = req.body

    const { type, message, code, data } = await employer.registerEmployer(name, age)

    return res.status(code).json({ message, type, data }); 

}



 export default { getAllEmployers, getEmployerByid, registerEmployer };