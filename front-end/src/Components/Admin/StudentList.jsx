import axios from 'axios'
import { useEffect, useState } from 'react';
import StudentManagement from './StudentManagement';
const StudentList =() => {
//logic goes here
 
const [students,setStudents] = useState([])

useEffect(() => {
    const fetchStudents = async () =>{
                    try{
                      const response = await axios.get('http://localhost:5000/students')
                      setStudents(response.data)
                    }
                    catch(error){
                      console.error("error in fetching student")
                    }
    };
    fetchStudents();
},[])


// //DELETE STUDENT
// const deleteStudent = async (id) => {
//   try{
//   if(window.confirm("are you sure you want to delete students")){
//     await axios.delete(`http://localhost:5000/students/${id}`)
//     setStudents(students.filter(student => student._id !== id))
//   }
// }
//   catch(error){
//     console.log("error in deleting students:",error)
//   }

// }


  return (
     <>
      <StudentManagement/>
      <div>
        <h1>student list</h1>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Student Name</th>
      <th scope="col">Student Id</th>
      <th scope="col">Course</th>
      <th scope="col">Phone no</th>
    </tr>
  </thead>
  <tbody>
  {students.map((student)=> (
    <tr key={student.studentId}>
     
      <td>{student.studentName}</td>
      <td>{student.studentId}</td>
      <td>{student.course}</td>
      <td>{student.phoneNo}</td>
{/* 
      <td>
      <button onClick={()=>deleteStudent(student._id)}
           className='btn btn-danger ms-2'>Delete</button>
       <button onClick={()=>handleEdit(student)}
           className='btn btn-primary ms-2'>Edit</button>
      </td> */}
    </tr>
    
  ))
}
    
  </tbody>
</table>

       
        </div> 
     </>
     );
}

export default StudentList;