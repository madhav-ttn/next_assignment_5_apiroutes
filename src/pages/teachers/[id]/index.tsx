import { Student } from "@/types/types";
import axios from "axios";
export default  function Students({students}:{students:Student[]}){
   
    return(
        <div>
               <ul>
                    {students.length!==0 && students.map((student:Student)=>(
                        <li>{student.id}:{student.name}</li>
                    ))}
               </ul>
        </div>
      )
}


export async function getServerSideProps({params}:{params:{id:string}}){
    try {
        const {id}=params;
        const {data}=await axios.get(`http://localhost:3000/api/teacher/route/${id}`);
        const students=data.students;
        return {
            props:{students:students}
        }
        
    } catch (error) {
        return {
            props:{
                students:[]
            }
        }
    }
}