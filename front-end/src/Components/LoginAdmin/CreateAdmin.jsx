
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

function CreateAdmin() {
//logic goes here
 
const [username, setUserName] = useState('')
const [password, setPassword] = useState('')



const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:5000/create-admin',{username,password},{withCredentials:true})
    .then((response)=>{
        toast.success(response.data.message);
        setUserName('')
        setPassword('')

    })

    .catch((error)=>{
      if(error.response){
        toast.error(error.response.data.error)
      }
    })
  }
  return (
     <>

<form onSubmit = {handleSubmit}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">User name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User name"
    value={username}
    onChange={(e)=>setUserName(e.target.value)}
    required/>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    required/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
     <ToastContainer position="top-center"/>
       
     </>
     );
}

export default CreateAdmin;