import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import StudentManagement from "./StudentManagement";

function EditStudent() {
  const [studentID, setStudentID] = useState('');
  const [studentName, setStudentName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [course, setCourse] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.log("Error in fetching students");
      }
    };
    fetchStudents();
  }, []);

  // UPDATE STUDENT
  const editStudent = async () => {
    if (!studentID || !studentName || !dateOfBirth || !course || !phoneNumber) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const res = await axios.put(`http://localhost:5000/students/${studentID}`, {
        studentName,
        dateOfBirth,
        course,
        phoneNumber,
      });
      toast(res.data.message);
      
      // Update the local state for students
      setStudents(
        students.map((student) =>
          student._id === studentID ? { ...student, studentName, dateOfBirth, course, phoneNumber } : student
        )
      );

      // Reset form fields
      setStudentID('');
      setStudentName('');
      setDateOfBirth('');
      setCourse('');
      setPhoneNumber('');
    } catch (error) {
      console.log("Error in updating student:", error);
    }
  };

  return (
    <>
      <StudentManagement/>
      <div className="mb-3 col-sm-4 justify-content-center">
        <label htmlFor="studentID" className="form-label">
          Enter the student ID to edit
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="studentID"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
        />

        <label htmlFor="studentName" className="form-label">
          Enter the new student name
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="studentName"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <label htmlFor="dateOfBirth" className="form-label">
          Enter the date of birth
        </label>
        <input
          type="date"
          className="form-control mb-3"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <label htmlFor="course" className="form-label">
          Enter the course
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <label htmlFor="phoneNumber" className="form-label">
          Enter the phone number
        </label>
        <input
          type="text"
          className="form-control mb-3"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <button type="submit" className="btn btn-primary" onClick={editStudent}>
          Update Student
        </button>
      </div>
      <ToastContainer />
    </>
  );
}

export default EditStudent;
