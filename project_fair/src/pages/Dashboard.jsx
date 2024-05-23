
import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row,Col } from 'react-bootstrap'
import Add from '../pages/Add'
import Edit from '../pages/Edit'
import Profile from '../pages/Profile'
import { userProject } from '../services/allApis'
import { addProjectResponseContext } from '../Context Api/contextApi'
import { toast } from 'react-toastify'
import { deleteProject } from '../services/allApis'


function Dashboard() {
  
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const {editProjectResponse,setEditProjectResponse}=useContext(addProjectResponseContext)
  const [user,setUser]=useState("")
  const[projects,setProjects]=useState("")
  useEffect(()=>{
    setUser(sessionStorage.getItem("username"))
    getData()
  },[addProjectResponse,editProjectResponse])

  console.log(projects);
  const getData=async()=>{
  const header={"Authorization":`Bearer ${sessionStorage.getItem('token')}`}
  const result=await userProject(header)
  if(result.status==200){
    setProjects(result.data)
  }
  else{
    console.log(result.response.data);
  }
}


const handleDelete=async(id)=>{
  const token=sessionStorage.getItem('token')
  const header={
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token} `
  }
  const result=await deleteProject(id,header)
  if(result.status==200){
    toast.success("project Deleted successfull!!")
    getData()
  }
  else{
    console.log(result);
    toast.error(result.response.data)
    
  }

}

  return (
    <>
      <Header />
      <div>
        <div className='p-5'>
          <h1>WELCOME {user}</h1>
        </div>
        <Row>
          <Col sm={12} md={8} className='p-3'>
            <h3>YOUR PROJECTS</h3>
            <div className='border border-3 p-4'>
            <Add/>

            {
              projects.length > 0 ?

                projects.map(item=>(

                  <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>
                <h4>{item.title}</h4>
               
                <div>
                  <a href={item.github} className='btn me-3'>
                    <i className='fa-brands fa-github fa-2xl'></i>
                  </a>
                  <Edit project={item}/>
                  
                  <button className='btn me-3' onClick={()=>{handleDelete(item?._id)}}>
                    <i className='fa-solid fa-trash fa-2xl' style={{color:'#e1141e'}}></i>
                  </button>
                </div>
              </div>

                ))
                :
                <h3 className='text-center '>NO PROJECTS AVAILABLE!</h3>
            }

              

              
              {/* <div className='d-flex justify-content-between border shadow mb-3 p-3 rounded'>
                <h4>PROJECT TITLE 1</h4>
                <div>
                  <a href="" className='btn me-3'>
                    <i className='fa-brands fa-github fa-2xl'></i>
                  </a>
                  <Edit/>
                 
                  <button className='btn me-3'>
                    <i className='fa-solid fa-trash fa-2xl' style={{color:'#e1141e'}}></i>
                  </button>
                </div>
              </div> */}
            </div>
          </Col>
          <Col sm={2} md={4}>
            <Profile/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Dashboard

