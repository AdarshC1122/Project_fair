import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { TokenAuthContext } from '../Context Api/AuthContext';
import { useContext } from 'react';

function Header({status}) {


  const{authStatus,setAuthStatus}=useContext(TokenAuthContext)
  const navigate=useNavigate()

const handleLogout=()=>{
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('username')
  setAuthStatus(false)
  navigate('/')
}

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand href="/">
            <i className='fa-solid fa-diagram-project fa-xl' style={{color:'#22052e'}}></i>
            {' '}
            PROJECT FAIR     
           </Navbar.Brand>
          <div>
            {!status &&
              <button className='btn btn-outline-danger' onClick={handleLogout}>
              <i className='fa-solid fa-right-from-bracket'>
                Logout
              </i>
             </button>
            }
          </div>
          
          
        </Container>
      </Navbar>
    </>
  )
}

export default Header