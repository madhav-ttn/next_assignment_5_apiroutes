import { NextApiRequest,NextApiResponse } from "next";
import data from "@/data/student.json";
export default function handler(req:NextApiRequest,res:NextApiResponse){
     switch(req.method){
         case "GET":
            return res.status(200).json(data);  
         default:
            return res.status(405).json({ message: 'Method Not Allowed' });     
     }
}  