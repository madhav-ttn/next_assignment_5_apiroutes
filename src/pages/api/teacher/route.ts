import { NextApiRequest,NextApiResponse } from "next";
import data from "@/data/teacher.json";
export default function handler(req:NextApiRequest,res:NextApiResponse){
     switch(req.method){
         case "GET":
            return res.status(200).json(data);
         case "POST":
            const {teacher}=req.body;
            if(!teacher)return res.status(400).json({message:"details not received"});
            const id=Math.random()*1000;
            data.push({...teacher,id:id});
            console.log(data);
            return res.status(200).json({message:"New Teacher Added Successfully",teacher:{...teacher,id}});   
         default:
            return res.status(405).json({ message: 'Method Not Allowed' });     
     }
}