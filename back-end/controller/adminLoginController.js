import UserModel from "../models/userModel.js";
import bcrypt from 'bcrypt'


//main admin creates the school admin account
export const createSchoolAdmin = async(req,res) => {
  const {username,password} = req.body;

  //hash the password before saving
  const hashedPassword = await bcrypt.hash(password,10);

  
  
  try
  { 
    await  UserModel.create({
      username,
      password: hashedPassword,
      role: 'schoolAdmin'

    });
    res.status(201).json({message: "school admin created successfully"})
  }
  catch(error){
    res.status(500).json({error: "error in creating school admin"})
  }

}
  
//login  handler for main admin and school admin
export const handleLogin = async (req,res) => {
  const {username,password} = req.body;
  try{
    const user =await UserModel.findOne({username})

    if(!user){
      return res.status(401).json({error :" No user found with this username"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
      return res.status(401).json({eror: "incorrect password"})
    }

    req.session.userId = user.id;
    req.session.role = user.role;  //store user role in session

    res.status(200).json({message: "login successful",role: user.role})
  }
  catch(error){


    res.status(500).json({error: "error connecting to the server"})
  }
}

export const changePassword = async (req,res) => {
  const {newPassword} = req.body;
  try{ 
    const hashedPassword = await bcrypt.hash(newPassword,10);

    //update the user password
    const result = await UserModel.updateOne({_id: req.session.userId},
                                              {password: hashedPassword} //update the password 
                                            )

    if(result.modifiedCount === 0){
      return res.status(404).json({error: " user not found or password not updated"})
    }

    res.status(200).json({message: "password changed successfully"})
  }

  catch(error){
    res.status(500).json({error: "error in changing password"})
  }

}