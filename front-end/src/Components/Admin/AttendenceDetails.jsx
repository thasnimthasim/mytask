import StudentManagement from "./StudentManagement";


function AttendenceDetails() {
//logic goes here
 

  return (
     <>
       <StudentManagement/>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Student Name</th>
      <th scope="col">StudentID</th>
      <th scope="col"> Date</th>
      <th scope="col">status</th> 

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2"></td>
      <td></td>
    </tr>
  </tbody>
</table>
       
     </>
     );
}

export default AttendenceDetails;