import mongoose from "mongoose";
const sessionSchema = new mongoose.Schema({
                  studentId: {
                               type: String,
                               required: true

                             },
         sessionStartTime:  {
                              type: Date,
                              required: true,
                              default: Date.now 
                             },
                 exitTime:    {
                                type: Date

                               },
                    token:     {
                                 type: String,
                              
                               }     
})

const SessionModel = mongoose.model('Session',sessionSchema);
export default SessionModel