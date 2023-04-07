import { Request, Response } from 'express';
// Implement controller here

import employer from '../service/employer'; 

const getAllEmployers = async (req: Request, res: Response) => {
   
    const { type, message, code, data } = await employer.getAllEmployers();

    return res.status(code).json({ message, type, data });
};


 export default { getAllEmployers };