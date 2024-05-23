//loads .env files controls into process .env by default
require('dotenv').config()
const express=require("express")
const cors=require('cors')
const router=require('./Routes/routes')
require("./DB/connection")


//creating server instance
const pfserver=express()

//configuring cors into server
pfserver.use(cors())


//configure json conerstion on server
pfserver.use(express.json())

//configure cors into server
pfserver.use(router)


//serving uploads files to client side
pfserver.use('/uploads',express.static('./uploads'))

const PORT=3000

//calling listen method to implant listen mode for server to run
pfserver.listen(PORT,()=>{
    console.log(`server is Running at:${PORT}`)
})

//setting response for base_url get request
pfserver.get('/',(req,res)=>{
    res.status(200).send("<h1>The get request HIT successfully</h1>")
})




