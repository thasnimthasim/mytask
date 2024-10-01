import express from 'express'
import dotenv from 'dotenv'
import session from 'express-session'
import  {createServer} from 'http'       //importiong create server from http module  
import {Server} from  'socket.io'
import './config/db.js'
import routes from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config()
const PORT = process.env.PORT

const app=express()        //initialize an express app

//middleware to parse JSONdata
app.use(express.json())


app.use(express.urlencoded({extended:true}))





const corsOptions ={ 
  origin: "http://localhost:5173",
  methods:  "GET,POST,HEAD,PUT,PATCH,DELETE",
  credentials: true,
  allowedHeaders: "Content-Type, Authorization"
}

app.use(cors(corsOptions))

//session middleware setup
app.use(session({
                secret: 'secret',    //a secret key for signing the session ID
                resave: false,       //dont save session if unmodified
                saveUninitialized: true, //save uninitialized sessions
                cookie: {secure:false}    //secure is set to false for http in development
}));




//set up the routes
app.use('/',routes)

// const server = createServer(app) //creating http server with express
// const io = new Server(server)    //attaching socket.io to the http server//to get new connection


// //serve a simple home page route
// app.get('/',(req,res)=>{
//   res.send("attendance register running with websocket")
// })


// //handle websocket connection
// io.on('connection',(socket)=>{
//   console.log("client connected");


// //listen for message from the client
// socket.on('message',(msg)=>{
//         console.log(`receieved message:${msg}`);

// //respond to the client
// socket.emit('message','message received successfully')
// })

// //handle client disconnections
// socket.on('disconnect',() =>{
//   console.log('client disconnected');
  

// })
  
// })





// start port 
app.listen(PORT,()=>{
     console.log(`server running on port ${PORT}`);
     
    })