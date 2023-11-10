import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex align-items-center justify-content-center flex-column'>

      <div className="footer d-flex align-items-center justify-content-evenly w-100">

        <div className="website" style={{width:'400px'}}>
            <h4><i class="fa-solid fa-video fa-beat-fade text-warning me-3"></i>{' '}
                  Video Player</h4>
            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui consequuntur unde esse tempora, magni accusamus, </h6>
            <h6>dolores tempore porro officiis excepturi fuga rerum quibusdam.</h6>
        </div>

        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link style={{textDecoration:'none',color:'white'}} to={'/'}>Landing page</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/home'}>Home page</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}>Watch History</Link>
        </div>

        <div className="guides d-flex flex-column">
        <h4>Guides</h4>
          <Link style={{textDecoration:'none',color:'white'}} to={'https://react.dev/'}>React</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'https://react-bootstrap.github.io/'}>React bootstrap</Link>
          <Link style={{textDecoration:'none',color:'white'}} to={'https://bootswatch.com/'}>Bootswatch</Link>
        </div>

        <div className="contact mt-4">
          <h4>Contact Us</h4>
          <div className='d-flex mt-3'>
            <input type="text" className='form-control' placeholder='Enter your emailid' />
            <button className='btn btn-warning text-white ms-3'>Subscribe</button>
          </div>

          <div className='d-flex justify-content-evenly mt-3'>
            <Link to={'https://www.linkedin.com/in/krishna-k-p-a00a101b3/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-instagram fa-2x "></i></Link>
            <Link to={'https://www.linkedin.com/in/krishna-k-p-a00a101b3/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
            <Link to={'https://www.linkedin.com/in/krishna-k-p-a00a101b3/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-linkedin fa-2x "></i></Link>
            <Link to={'https://www.linkedin.com/in/krishna-k-p-a00a101b3/'} style={{textDecoration:'none',color:'white'}}><i class="fa-brands fa-facebook fa-2x "></i></Link>
          </div>
        </div>

      </div>
      <p className='mt-5'>Copyright 2023 Media Player.Built with react</p>
    </div>
  )
}

export default Footer
