import { Student, Teacher } from "@/types/types";
import axios from "axios";
import { useState } from "react";
export default  function Teachers({teachers}:{teachers:Teacher[]}){
   const [currTeachers,setCurrTeachers]=useState(teachers);
   const addTeacherHandler=async()=>{
      try {
        const res=await axios.post("http://localhost:3000/api/teacher/route",{
            teacher:{
                "name": "New Teacher",
                "subject": "Science",
                "email": "emily.davis@school.com",
                "phone": "+123456jhsdf7891",
                "hire_date": "2017-04-15"
            }
          })
          setCurrTeachers([...currTeachers,res.data.teacher]);
        console.log(res.data.message); 
      } catch (error) {
        console.log("Error in adding the teacher",error);
      }
   }
    return(
        <div>
            <button className="p-10" onClick={addTeacherHandler}>Add Teacher</button>
               <ul>
                    {currTeachers.map((teacher:Teacher)=>(
                        <li key={teacher.id}>{teacher.name}</li>
                    ))}
               </ul>
        </div>
      )
}


export async function getServerSideProps(){
    try {
        const {data}=await axios.get("http://localhost:3000/api/teacher/route");

        return {
            props:{teachers:data}
        }
        
    } catch (error) {
        return {
            props:{
                teachers:[]
            }
        }
    }
}