import { useEffect, useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StartSession = ()=>{

  const [currentTime,setCurrentTime] = useState(new Date())
  const [studentID,setStudentID] = useState('')
  const [errorMessage,setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate =useNavigate();


  useEffect(() => {
     const timer = setInterval(()=>{
      setCurrentTime(new Date());
     },1000)
     return() =>
      clearInterval(timer);  // cleanup the timer when the components unmount
    },[])



    const handleSubmit = async (e) => {
       e.preventDefault();
       console.log("heelo");
       
      //  if(!studentID){
      //     setErrorMessage("please enter the student ID")
      //     return;
          
          

      //     }
setIsSubmitting(true)
          try{
            // get the current time as the starting session
            // const sessionStartTime = new Date().toString(); 
            // const sessionStartTime = new Date().toISOString(); // Send as ISO Date string

console.log("hai");

            //send studentID and start session to server
        const response = await axios.post('http://localhost:5000/session',
                      {
                        studentID
                      },
                      {
                        withCredentials: true // Important for sessions
                      })
                      console.log('Response from server:', response.data); 
                      navigate(`/token-page/${studentID}`);      

          }
          catch(error){
            if(error.response){
              //a session with student id already exist
              if(error.response.status === 400 && error.response.data.message.includes("already exists"))
              {
                setErrorMessage('A session with this student ID already exists.'); 
              } else  if(error.response.status === 404){

                //student not found
                console.log("student not found.Please check the ID");
                alert("student not found.Please check the ID")
                setErrorMessage("Student not found. Please check the ID");
        } else {
          setErrorMessage('Error in starting session. Please try again later');
              }
            }
           
            else{
              console.error('error in starting session',error);
            setErrorMessage('Error in starting session .Please try again later')

            }
            
            
          }

          finally{
            setIsSubmitting(false)
          }
       }  
    

    const handleGoback = () => {
       
      navigate('/')

    }

  return (
     <>
       <Container className='mt-5'>
          <Row className='justify-content-center'>
            <Col className=" align-item-center mt-5 tex-center" md={6}>
               <div className=''>
                <h2 >LAB ATTENDANCE SYSTEM</h2>
                <p>Designed by Fathimath Thasnim</p>
                </div>

                <div className="mt-4 ">
                  <h3>{currentTime.toLocaleDateString()}</h3>
                  <h1>{currentTime.toLocaleTimeString()}</h1>
                </div>

                <div className='mt-5'>




  
  <div className="form-group">
    
    <label htmlFor="exampleInputPassword1"  className="form-control-lg">Type your id</label><br/>
    <input type="text" className="form-control-lg  mb-4" id="exampleInputPassword1" placeholder=""
    value={studentID}
    onChange={(e)=>setStudentID(e.target.value)}
    required
    />
  </div>

 

 {errorMessage && <p className='text-danger'>{errorMessage}</p>} 
                                                            {/* display errror message */}
  <Button type="button" className="form-control-lg me-3" variant='success' size= ""  
  onClick={handleSubmit} disabled ={isSubmitting}
 
  >
            {isSubmitting ? 'Submitting...' : 'Submit'}
  </Button>

  <Button type="submit" className="form-control-lg" variant='secondary' size= "" 
  onClick={handleGoback} >
          Go Back
  </Button>


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

export default StartSession; 