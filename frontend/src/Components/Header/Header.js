import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import BG from '../../Images/BG.png'
import thumbsup from '../../Images/thumbsup.png'
import '../../CSS/Styles.css' 
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <>
      <div className='container background-image'>

        <header className="box-container text-center py-5">
        <div className="container">
          <div className="row pt-4 pb-4 mt-3 mb-3">
            <div className="col-md-6">
              <div>
                {<img src={thumbsup} alt="Paraphrasing Tool Image" class="thumbs"/>}
                
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h1>Your Trusted Content Manager</h1>
                <p className="lead">
                PlagGenie is a platform or tool designed to help users detect and address plagiarism in content, ensuring originality and academic integrity.                </p>
                <Link to='/services' className="btn btn-info diagonal-button">Start Paraphrasing with Plaggenie</Link>
                {/* <a href="about.html" className="btn btn-info diagonal-button">Learn More</a> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      </div>
    </>
  )
}

