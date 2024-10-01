import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
                username: {
                            type: String,
                            required: true,
                            unique: true,
                            minlength:4 
                          },
                password: {
                            type: String,
                            required: true,
                            minlength: 6
                          },
                   role:  {
                            type: String,
                            required: true,
                            enum: ['mainAdmin','schoolAdmin']
                            

                          },
               createdAt: {
                            type: Date,
                            default: Date.now
                          }
},
)
const UserModel =mongoose.model('User',userSchema)
export default UserModel