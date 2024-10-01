import { useEffect, useState } from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const LabAttendancePage = ()=>{

  const [currentTime,setCurrentTime] = useState(new Date())


  useEffect(() => {
     const timer = setInterval(()=>{
      setCurrentTime(new Date());
     },1000)
     return() =>
      clearInterval(timer);  // cleanup the timer when the components unmount
    },[])

    const navigate =useNavigate();


    const handleStartSession = () => {
         navigate('/submit-name')
    }

    const handleExitSession = () => {
      navigate('/exit-session')

    }

    const handleAdmin =() =>{
      navigate('/admin-login')
    }

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
                  <Button className='btn-success mb-5' size='lg' 
                      onClick={handleStartSession}>
                   Start Session
                  </Button><br/>
                  <Button className="btn-danger mb-5" size='lg'
                     onClick={handleExitSession}> 
                  Exit Session
                  </Button>

                  <div className='m-5 text-secondary'>
                    <p className='mb-4'>By entering the the lab make sure to follow the compulsory protocols</p>
                  </div>
                </div>

                <button onClick={handleAdmin}>Admin</button>

            </Col>
            <Col md={6} className='border'>
            <img src='homePage.jpg' className='img-fluid'/>

             
            </Col>
          </Row>
       </Container>
     </>
     );
}

export default LabAttendancePage; 