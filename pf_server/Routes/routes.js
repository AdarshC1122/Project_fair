const express=require('express')
const userController=require('../Controllers/usercontroller')
const projectController=require('../Controllers/projectcontroller')
const router=express.Router()
const jwtMiddle=require('../middleware/jwtMiddleware')
const multerConfig=require('../middleware/multerMiddleware')


router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/addProject',jwtMiddle,multerConfig.single('image'),projectController.addProjects)
router.get('/home-projects',projectController.homeProjects)
router.get('/all-projects',jwtMiddle,projectController.allProjects)
router.get('/user-projects',jwtMiddle,projectController.userProjects)
router.put('/edit-project/:pid',jwtMiddle,multerConfig.single('image'),projectController.editProject)
router.delete('/delete-project/:pid',jwtMiddle,projectController.deleteProject)
router.put('/profile-update',jwtMiddle,multerConfig.single('profile'),userController.userUpdateProfile)



module.exports=router   