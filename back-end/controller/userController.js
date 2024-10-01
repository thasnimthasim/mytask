// // import {users} from '../models/userModel.js';

// // export const handleRegisteration = (req,res)=>{
// //   const {username,password} = req.body;

// //   //check if user already exists


// // }

// import UserModel from '../models/userModel.js'
// import bcrypt from 'bcrypt'

// export const handleLogin = async (req,res)=>{
// const {username, password} =req.body

//       try{
//         const user = await UserModel.findOne({username});
//               if(!user){
//                 return res.status(401).json({message: 'invalid username'})
//               }

//         //compare the plain- text password with the hashed password stored in the database
//         const isMatch =await bcrypt.compare(password,user.password)
//                 if(!isMatch)
//                 {
//                   return res.status(401).json({message: 'invalid password'})
                
//                 }
//                 //store the user session on successful login
//                 req.session.user = user;
//                 res.status(200).json({message: "login successful"})

//           }
//       catch{
//         res.status(500).json({message: "error logging",err})
//       }
//     }

// //change password functiob with bcryptbfor hashing the new password
// export const changePassword = async (req,res)=>{
//   const {newPassword} =req.body;
//   if(!req.session.user){
//     return res.status(403).json({message: 'Unauthorized'})
//   }

//   try{
//     const user = await UserModel.findById(req.session.user._id)

//       //generate salt and hash the new password
//       const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword,salt);
//     await user.save();
//     res.json("password updated successfully")
    


// }
// catch(error){
//   res.status(500).json({message: 'error in updating password',error})
// }
// }
