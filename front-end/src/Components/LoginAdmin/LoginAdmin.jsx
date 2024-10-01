import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function LoginAdmin() {
//logic goes here
 const [username,setUsername] = useState('')
 const [password,setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) =>
  {
    e.preventDefault();

    //basic validation
    if(!username || !password)
    {
      toast.error("please fill in all fields")
      return;
    }
    axios.post('http://localhost:5000/login',{username,password}, {withCredentials: true})
    
    .then((response)=>{
      toast.success(response.data.message || "login success")
      setTimeout(() => {
        navigate("/admin")
        
      },2000);
    })
    .catch((error)=>{
      if(error.response){
        toast.error(error.response.data.error || "login failed")
      }
      else{
        console.error("Login failed",error);
        
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
    onChange={(e)=>setUsername(e.target.value)}
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

export default LoginAdmin;