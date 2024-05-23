import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../pages/ProjectCard'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { homeProject } from '../services/allApis'



function Landing() {

  const[token,setToken]=useState("")
  const [projects,setProjects]=useState([])
  useEffect(()=>{
      setToken(sessionStorage.getItem("token"))
      getHomeProjects()
  },[])

  const getHomeProjects=async()=>{
      const result=await homeProject()
      // console.log(result)
      if(result.status==200){
          setProjects(result.data)
      }
      else{
          console.log(result.response.data)
      }
  }

  console.log([projects])







  return (
    <>
      <div className='w-100 p-5 align-items-center d-flex' style={{ height: "100vh", backgroundColor: 'rgb(20,137,247)' }}>
        <Row>
          <Col className='  align-items-center  mt-2'>
            <div >
              <h1 className='display-7 mb-3  text-dark '>PROJECT FAIR 2024</h1>
              <p className='  text-light' style={{ textAlign: 'justify' }}>It is a long established fact that a reader will be distracted by the readable content of a page a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
              {
                token?
                <Link className='btn btn-danger mb-3' to={'./dash'}>Manage your Projects</Link>
                :
                <Link className='btn btn-success mb-3' to={'./auth'}>Start to explore....</Link>


              }
            </div>
          </Col>
          <Col>
            <img src="https://getnave.com/blog/wp-content/uploads/2018/01/what-is-project-management-process.png" style={{ width: "650px" }} className='img-fluid shadow' alt="" />
          </Col>
        </Row>
      </div>
      <div className='p-5 w-100'>
        <h1 className='text-center mb-4'>Projects For You...</h1>
        <marquee behavior="scroll" direction="left" scrollamount='14'>
       <div className='d-flex justify-content-evenly mt-2'>
          {
            projects.length > 0 ?
            projects.map(item=>(
                <ProjectCard project={item} />
            ))
            :
            <h5>NO PROJECTS AVAILABLE</h5>
          }

          
        </div>
       </marquee>

        
        <div className='text-center mt-5'>
          <Link to={'/project'}>Click For More..</Link>
        </div>

      </div>
    </>
  )
}

export default Landing