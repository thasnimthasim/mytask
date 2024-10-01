import express from 'express'

import { addStudent, deleteStudent, editStudent, getStudents } from '../controller/adminController.js';
import { changePassword, createSchoolAdmin, handleLogin } from '../controller/adminLoginController.js';



import { exitSession, startSession, tokensession } from '../controller/sessionController.js';



const router = express.Router()


    
router.post('/addstudent',addStudent)
router.get('/students',getStudents)
router.delete('/students/:id',deleteStudent)

  router.put('/students/:id', editStudent);


  

  router.post('/create-admin',createSchoolAdmin)
router.post('/login',handleLogin);
router.post('/change-password',changePassword)

router.post('/session',startSession)
router.post('/sessions/exit',exitSession)

router.post('/token-session',tokensession)
 


export default router