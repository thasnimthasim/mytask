

import { Route, Routes} from "react-router-dom"


import LabAttendancePage from "./Components/Pages/LabAttendancePage";

import TokenPage from "./Components/Pages/tokenPage";
import ExitSession from "./Components/Pages/ExitSession";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import StudentManagement from "./Components/Admin/StudentManagement";
import StudentList from "./Components/Admin/StudentList";
import AddStudent from "./Components/Admin/AddStudent";
import DeleteStudent from "./Components/Admin/DeleteStudent";
import EditStudent from "./Components/Admin/EditStudent";
import LoginAdmin from "./Components/LoginAdmin/LoginAdmin";
import CreateAdmin from "./Components/LoginAdmin/CreateAdmin";
import StartSession from "./Components/Pages/StartSession";
import AttendenceDetails from "./Components/Admin/AttendenceDetails";



function App() {
//logic goes here
 

  return (
     <>
  
     <Routes>
      <Route path="/" element={<LabAttendancePage/>}/>
      <Route path="/submit-name" element={<StartSession/>}/>
      <Route path="/token-page/:studentID" element={<TokenPage />} />
      <Route path="/exit-session" element={<ExitSession/>}/>

      <Route path="/admin" element={<AdminDashboard/>}/>
          <Route path="/student" element={<StudentManagement />}/>
      
   
         <Route path= "/student-list" element={<StudentList/>}/>
         <Route path="/student-form" element={<AddStudent/>}/>
         <Route path="/delete-student" element={<DeleteStudent/>}/>
         <Route path="/edit-student" element={<EditStudent/>}/>

      <Route path="/admin-login" element={<LoginAdmin/>}/>
      <Route path="/create-admin" element={<CreateAdmin/>}/>
      <Route path="/attendence" element={<AttendenceDetails/>}/>


     </Routes>
  
     </>
     );
}

export default App;