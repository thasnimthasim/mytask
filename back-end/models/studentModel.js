import mongoose from 'mongoose'
import { type } from 'os'
const studentSchema = new mongoose.Schema({
          
                      studentName: {
                              type: String,
                              required: true

                             },
                 studentId: {
                              type: String,
                              required: true,
                              unique: true

                             },
                      dob:   {
                              type: Date,
                              required: true,
                              },
                    course:   {
                              type: String,
                              required: true,
                              },
            enrollmentDate:  {
                                type: Date,
                                required: true,
                              },
                  phoneNo:    {
                                type: String,
                                required: true,
                              },         

                  attendance: [{
                                 date: {
                                       type: Date,
                                       default: Date.now
                                       }
                              }],

                     status:  {
                                type: String,
                                enum: ['present','Absent']

                               }   

              },
              {timestamp: true}
)

const StudentModel = mongoose.model('Student',studentSchema)
export default StudentModel