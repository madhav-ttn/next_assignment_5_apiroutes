import { NextApiRequest,NextApiResponse } from "next";
import teachersData from "@/data/teacher.json";
import studentsData from "@/data/student.json";
export default function handler(req:NextApiRequest,res:NextApiResponse){
      switch(req.method){
         case "GET":
            const {id}=req.query;
            const filteredteacher=teachersData.filter((teacher)=>teacher.id===Number(id));
            const teacher=filteredteacher[0];
            if(!teacher)return res.status(404).json({message:"No teacher exist",students:[]});
            const students=studentsData.filter((student)=>student.subject===teacher.subject);
            return res.status(200).json({message:"Data accessed successfuly",students:students});
        }
}