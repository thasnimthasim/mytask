import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const ExitSession = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [token, setToken] = useState("");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer); // cleanup the timer when the components unmount
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
     setErrorMessage("please enter your token");
     return;
    }

    try{
      //send the token to the backend to exit the session
      const response = await axios.post(`http://localhost:5000/sessions/exit`,
                                        {token}
      )

      if(response.status === 200) {
        alert("session exited successfully")

        navigate('/')       // navigate to home page on successful
      }

    }
    catch(error){
      console.error("error in exiting session",error);
      if(error.response){
          if(error.response.status === 404 && error.response.data.message ==="No active session found for this ID"){
            setErrorMessage('No active session found. Please check the session token.');
          }else if (error.response.status === 400 && error.response.data.message === 'session already exited') {
            setErrorMessage('Session already exited.');
          } else {
            setErrorMessage('An error occurred while exiting the session.');
          }
        } else {
          setErrorMessage('Network or server error. Please try again later.');
        }
      
      
      
      
    }
  };

  const handleGoback = () => {
    navigate("/");
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col className=" align-item-center mt-5 tex-center" md={6}>
            <div className="">
              <h2>LAB ATTENDANCE SYSTEM</h2>
              <p>Designed by Fathimath Thasnim</p>
            </div>

            <div className="mt-4 ">
              <h3>{currentTime.toLocaleDateString()}</h3>
              <h1>{currentTime.toLocaleTimeString()}</h1>
            </div>

            <div className="mt-5">
           
  
  <div className="form-group">
    
    <label htmlFor="exampleInputPassword1"  className="form-control-lg">Type your token number</label><br/>
    <input type="text" className="form-control-lg  mb-4" id="exampleInputPassword1" placeholder=""
    value={token}
    onChange={(e)=>setToken(e.target.value)}
    required
    />
    <a href="#" className="ms-2">forgot</a>
    {errorMessage && <p className="text-danger">{errorMessage}</p>}
  </div>

 
  <Button type="submit" className="form-control-lg me-3" variant='danger' size= "" 
  onClick={handleSubmit} >
          Exit Session
  </Button>
   
  <Button type="submit" className="form-control-lg" variant='secondary' size= "" 
  onClick={handleGoback} >
          Go Back
  </Button>



              <div className="m-5 text-secondary">
                <p className="mb-4">
                  By entering the the lab make sure to follow the compulsory
                  protocols
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="border">
            <img src="homePage.jpg" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ExitSession;
