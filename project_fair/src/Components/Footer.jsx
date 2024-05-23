import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div>
      <div className='d-flex justify-content-between bg-black text-light p-5'>
        <div className='w-25'>
          <h3>PROJECT FAIR  2024</h3>
          <p style={{textAlign:'justify'}}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
        </div>
        <div className='w-25 text-center'>
          <h3>LINKS</h3>
          <Link to={'/auth'} className='d-block mb-3 mt-3 text-decoration-none'>REGISTER</Link>

          <Link to={'/'} className='d-block mb-3 mt-3 text-decoration-none'>LANDING</Link>

          <Link to={'/auth'} className='d-block mb-3 mt-3 text-decoration-none'>LOGIN</Link>

        </div>
        <div className='w-25 '>
          <h3>REFRERANCES</h3>
          <a href="https://react-bootstrap.netlify.app/" className='d-block mt-3 mb-3 text-decoration-none' target='_blank' >REACT BOOTSTRAP</a>
          <a href="https://react.dev/" className='d-block mb-3 text-decoration-none'target='_blank'>REACT</a>
        </div>
        <div className='w-25'>
          <h3>CONTACT US :</h3>
          {/* <p>Submit your email,so we can contact you...</p> */}
          <input type="email" className='form-control' placeholder='Enter you email id'/>
          <button className='btn btn-success mt-3'>SUBMIT </button>
        </div>
      </div>
      <h6 className='text-center'>Project Fair 2024 &copy; All rights reserved</h6>
    </div>
    </>
    


  )
}

export default Footer
