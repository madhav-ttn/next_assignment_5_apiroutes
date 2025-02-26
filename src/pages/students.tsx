import { Student } from "@/types/types";
import axios from "axios";
export default  function Students({students}:{students:Student[]}){
   
    return(
        <div>
               <ul>
                    {students && students.map((student:Student)=>(
                        <li>{student.name}</li>
                    ))}
               </ul>
        </div>
      )
}


export async function getServerSideProps(){
    try {
        const {data}=await axios.get("http://localhost:3000/api/student/route");

        return {
            props:{students:data}
        }
        
    } catch (error) {
        return {
            props:{
                students:[]
            }
        }
    }
}