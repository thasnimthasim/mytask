import StudentModel from "../models/studentModel.js";


export const addStudent =(req,res)=>{
const{ studentName,studentId,dob,course,enrollmentDate,phoneNo} = req.body;
try{
  const newStudent = StudentModel.create({
    studentName,
    studentId,
    dob,
    course,
    enrollmentDate,
    phoneNo

  })
  res.status(201).json({message:'student added successfully',newStudent})
}

catch(error){
  console.error('error in adding student',error)
  res.status(500).json({error:'server error'})
}

}

export const getStudents = async (req,res) => {
  try{
    const students = await StudentModel.find({});
    res.status(200).json(students);
  }
  catch(error){
    console.log('error in fetching students:')
    res.status(500).json({error:'server error'})
}
}

export const deleteStudent = async (req,res) => {
  try{
  const studentID = req.params.id;
  console.log("Attempting to delete student with ID:", studentID);

    
  const student = await StudentModel.findOneAndDelete({studentId: studentID})
  if(!student){
    return res.status(404).send({message:'student not found'})
  }
  res.status(200).json({message:`${student.studentName} deleted successfully`})
}
  catch(error){

    res.status(500).send({error:"error in deleting student",details:error})

  }

}

export const editStudent = async (req, res) => {
  try {
    const studentID = req.params.id;
    const updatedData = req.body; // This will contain all the updated fields

    console.log("Attempting to edit student with ID:", studentID);

    // Find and update the student
    const student = await StudentModel.findOneAndUpdate(
      { studentId: studentID },
      updatedData,
      { new: true } // Return the updated student
    );

    if (!student) {
      return res.status(404).send({ message: 'Student not found' });
    }

    res.status(200).json({ message: `${student.studentName} updated successfully`, student });
  } catch (error) {
    res.status(500).send({ error: "Error in updating student", details: error });
  }
};
