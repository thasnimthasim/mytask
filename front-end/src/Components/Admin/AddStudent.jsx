import axios from 'axios'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentManagement from './StudentManagement';


const AddStudent = () => {
//logic goes here
 const [studentName,setStudentName] = useState('')
 const [studentId,setStudentId] = useState('')
 const [dob,setDob] = useState('')
 const [course,setCourse] =useState('')
 const [enrollmentDate,setEnrollmentDate]= useState('')
 const [phoneNo,setPhoneNo] = useState('')

 const handleSubmit = async(e) =>{
  e.preventDefault();
  try{
          const response = await axios.post('http://localhost:5000/addstudent',
            {
            studentName,
              studentId,
              dob,
              course,
              enrollmentDate,
              phoneNo
            })
            console.log("student added",response.data.message);
            toast(response.data.message)
            setStudentName('');
            setStudentId('');
            setDob('');
            setCourse('');
            setEnrollmentDate('');
            setPhoneNo('')

      }

     catch(error){
      console.log('error in adding student:',error)
     }
    }
  return (
     <>
     <StudentManagement/>
     <h1>Student enrollment form</h1>
        <form onSubmit={handleSubmit} className="col-md-6 ">
  <div className="mb-3 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Student Name</label>
    <input type="text" className="form-control" id="studentname" aria-describedby="emailHelp"
    placeholder='enter student name'
    value={studentName}
    onChange={(e)=>setStudentName(e.target.value)}
    required
    />
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Student ID</label>
    <input type="text" className="form-control" id="studentid"
    placeholder='enter student Id'
    value={studentId}
    onChange={(e)=>setStudentId(e.target.value)}
    required
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Date of Birth</label>
    <input type="date" className="form-control" id="dateofbirth"
    placeholder='enter date of birth'
    value={dob}
    onChange={(e)=>setDob(e.target.value)}
    required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Course</label>
    <input type="text" className="form-control" id="course"
    placeholder="enter course"
    value={course}
    onChange={(e)=>setCourse(e.target.value)}
    required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Date of Enrollment</label>
    <input type="date" className="form-control" id="enrollment"
    placeholder='enter date of enrollment'
    value={enrollmentDate}
    onChange={(e)=>setEnrollmentDate(e.target.value)}
    required/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Phone no</label>
    <input type="tel" className="form-control" id="phoneno" 
    placeholder='enter phone number'
    value={phoneNo}
    onChange={(e)=>setPhoneNo(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<ToastContainer/>
     </>
     );
}

export default AddStudent;