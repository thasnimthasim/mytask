
import { useEffect, useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const TokenPage = () => {
  const {studentID} = useParams()
  const [currentTime,setCurrentTime] = useState(new Date())
  const [counter,setCounter] =useState(5);       // starts with 5second

  const [token] = useState(Math.floor(1+Math.random() * 900))  // generate random token
  const navigate =useNavigate();

//CURRENT TIME
  useEffect(() => {
     const timeInterval = setInterval(()=>{
      setCurrentTime(new Date());
     },1000)
     return() =>
      clearInterval(timeInterval);  // cleanup the timer when the components unmount
    },[])



  //COUNTDOWN TIMER EFFECT
  useEffect(()=>{
    const timer = setInterval(()=>{
      setCounter((prev) => prev - 1)
    },1000);

    if(counter ===0){
      navigate('/') //redirect home page after 5 second
    }

    return () => 
      clearInterval(timer)  // cleanup timer when components unmounts
    

  },[counter,navigate])

   

//function to send token to the backend using axios
const sendTokenToBackend = async () => {
  try{
    // const sessionStartTime = new Date() // Send as ISO Date string


  const response = await axios.post('http://localhost:5000/token-session',{
                    studentID,
                    token//pass the generated token
                   
  })
  console.log("session Started:",response.data)
}
catch(error){
  console.error("error sending token to backend",error);
  
}
}

// send the token when component mounts
useEffect(()=>{
  sendTokenToBackend();
},[])
   

  return (
     <>
       <Container className='mt-5'>
          <Row className='justify-content-center'>
            <Col className="text-center align-item-center mt-5" md={6}>
               <div>
                <h2 >LAB ATTENDANCE SYSTEM</h2>
                <p>Designed by Fathimath Thasnim</p>
                </div>

                <div className="mt-4">
                  <h3>{currentTime.toLocaleDateString()}</h3>
                  <h1>{currentTime.toLocaleTimeString()}</h1>
                </div>

                <div className='mt-5'>
                    <div className='bg-dark text-white p-5'>
                    <h4 className='mt-5'>please notedown your</h4>
                    <h4>Token Number</h4>
                      <h1>{token}</h1>
                    <p>This window will be closed in </p>
                    <p className='text-warning'>{counter} seconds</p>
                    </div>
  
                  <div className='m-5 text-secondary'>
                    <p className='mb-4'>By entering the the lab make sure to follow the compulsory protocols</p>
                  </div>
                </div>

            </Col>
            <Col md={6} className='border'>
            <img src='homePage.jpg' className='img-fluid'/>

             
            </Col>
          </Row>
       </Container>
     </>
     );
}

export default TokenPage; 