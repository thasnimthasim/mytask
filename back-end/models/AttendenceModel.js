import mongoose from 'mongoose'
const  attendenceSchema = new mongoose.Schema({
        studentId:  {
                    type: String,
                    required: true
                    },
     studentName:{
                   type: String,
                   required: true

                },
        date   :{
                  type: Date,
                  default: Date.now,
                  required: true
        },
         status:{
                   type: String,
                   enum: ['Present','Absent'],
                   required: true,
                   default: 'Absent'
         }
             
})
const AttendenceModel = mongoose.model('Attendence',attendenceSchema)
export default AttendenceModel