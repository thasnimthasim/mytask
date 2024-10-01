
import SessionModel from '../models/sessionModel.js';
import StudentModel from '../models/studentModel.js';

// Start a new session
export const startSession = async (req, res) => {
  const { studentID } = req.body;
  console.log("Received studentID:", studentID);
  console.log(new Date().toLocaleString());


  if (!studentID) {
    return res.status(400).json({ message: 'Student ID is required' });
}
  
  

  try {

    //check if a session already exists for this student ID
    const existingSession = await SessionModel.findOne({studentId: studentID})
    
    if (existingSession) {
      return res.status(400).json({ message: 'A session with this student ID already exists.' });
    }


    // Check if the student exists for this student id
    const student = await StudentModel.findOne({ studentId: studentID});
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
      
    }

    const sessionStartTime = new Date().toLocaleString() //currentTime
   // Create a session
    const session = await SessionModel.create({
     studentId: studentID,
     sessionStartTime
     
    });

    res.status(201).json({ message: "Session created successfully", data: session });
  } catch (error) {
    console.error("Error in creating session", error);
    res.status(500).json({ message: "Error in creating session. Please try again later", error: error.message });
  }
};


export const tokensession = async (req,res) =>{
  const {studentID,token} = req.body;
  if(!studentID || !token){
    return res.status(400).json({message: 'studentID and token are required'})
  }
  try{ 
    //find the session by student ID and updatre the token
    const session = await SessionModel.findOneAndUpdate({studentId: studentID},
                                               {token}, //update the token only
                                               {new: true}  //return the updated session
                                            )

      res.status(200).json({message: "sessionupdated with token", data: session})
}
catch(error){
  console.error('error in updating session',error)
  res.status(500).json({message: "error in updating  session",error: error.message})

}
}


export const exitSession = async (req,res) => {
  const {token} = req.body;

  if(!token){
    return res.status(400).json({message:'Token is required'})
  }

  try{
    // //find the session using the token and updating session with exit time
    // const session = await SessionModel.findOne({token},    //find the session with the token and without exitTime
    //                                            {exitTime: new Date()},     //set the exitTime to current date
    //                                            { new: true ,sort: { sessionStartTime: -1 }}  //return updated session

    // )  

    // find the session by token and check if it exists and hasn't been exited
    const session = await SessionModel.findOne({token}).sort({sessionStartTime: -1})
      

    //check if a session was found 
    if(!session){
      return res.status(404).json({message:"No active session found for this ID"})
    }

    if(session.exitTime){
      return res.status(400).json({message:"session already exited"})
      alert("session already exited")
    }

    //update the session with the exit time
    await SessionModel.updateOne({_id: session._id},{exitTime: new Date()})
    res.status(200).json({message:" session  exited successfully ",data:session})
  
  
}
  catch(error){
    console.error("error in exiting session",error);
    res.status(500).json({message:"error in exiting session .Please try again later",error:error.message})
    
  }
}














