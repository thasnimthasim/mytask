import { useEffect, useState } from "react";
import StudentManagement from "./StudentManagement";
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function DeleteStudent() {
//logic goes here
 const [studentID,setStudentID] = useState('');
 const [students, setStudents] = useState([])



useEffect(() => {
  const fetchStudents = async () =>{
                  try{
                    const response = await axios.get('http://localhost:5000/students')
                    setStudents(response.data)
                    
                  }
                  catch(error){
                    console.log("error in fetching student")
                  }
  };
  fetchStudents();
},[])


//DELETE STUDENT
const deleteStudent = async (studentID) => {
 
    if(!studentID){
      alert("please enter a student id")
      return;
    }
    try{
  if(window.confirm("are you sure you want to delete students")){
   const res = await axios.delete(`http://localhost:5000/students/${studentID}`)
    setStudents(students.filter(student => student._id !== studentID))
    toast(res.data.message)
    setStudentID('')
  }
}
  catch(error){
    console.log("error in deleting students:",error)
  }

}

  return (
     <>
       
  <StudentManagement/>

  
  <div className="mb-3 col-sm-4 justify-content-center">
    <label htmlFor="exampleInputPassword1" className="form-label">Enter the studnt name to delete</label>
    <input type="text" className="form-control mb-3" id="studentID"
    value={studentID}
    onChange={(e)=>setStudentID(e.target.value)}/>
    <button type="submit" className="btn btn-danger"
    onClick={()=>deleteStudent(studentID)}>Delete</button>
  </div>
  
  <ToastContainer/>

     </>
     );
}

export default DeleteStudent;
