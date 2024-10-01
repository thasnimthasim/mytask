import mongoose from 'mongoose'
mongoose
        .connect("mongodb+srv://thasnim:thasnim123@cluster0.hvn7j.mongodb.net/lab")
        .then(()=>{
                    console.log("connected to mongodb");
                    
        })

        .catch((err)=>{
          console.log(err);
          
        })