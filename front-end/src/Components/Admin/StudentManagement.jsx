import { Fragment } from "react";
function StudentManagement()
 {
  return( <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home{" "}
            </a>
            <a className="nav-item nav-link" href="/student-list">
              Student-List
            </a>
            <a className="nav-item nav-link" href="/student-form">
              Add Student
            </a>
            <a className="nav-item nav-link" href="/delete-student">
              Delete Student
            </a>
            <a className="nav-item nav-link" href="/edit-student">
              Edit Student
            </a>
            <a className="nav-item nav-link" href="/attendence">
              Attendence
            </a>
          </div>
        </div>
      </nav>
   
  );
}

export default StudentManagement;
