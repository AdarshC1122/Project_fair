import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../pages/ProjectCard'
import { allProject } from '../services/allApis'

function Projects() {

  const [projects, setProjects] = useState([])
  const [logStatus, setLogStatus] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      getData()
      setLogStatus(true)
    }
    else {
      console.log("Login first");
      setLogStatus(false)
    }
  }, [search])
  console.log(projects);

  const getData = async () => {
    const header = { "Authorization": `Bearer ${sessionStorage.getItem('token')}` }
    const result = await allProject(header, search)
    console.log(result);
    if (result.status == 200) {
      setProjects(result.data)
    }
    else {
      console.log(result.response.data);
    }
  }

  return (
    <>
    
      <Header status={true} />

      <div className='p-5'>
        <h1>All Projects</h1>
        <input type="text" name="" onChange={(e) => { setSearch(e.target.value) }} className='form-control w-25' placeholder='Enter Language For Project Serach' />
        {logStatus ? (
          <Row>
            {
            projects.length > 0 ? (
              projects.map((item) => (
                <Col>
                  <ProjectCard project={item} />
                </Col>
              ))
            ) : 
            (
              <h2 className="tect-center text-danger">No projects!!</h2>
            )}
          </Row>
        ) : (
          <h1 className="text-center text-warning">Please login first</h1>
        )}


      </div>

    </>
  )
}

export default Projects
