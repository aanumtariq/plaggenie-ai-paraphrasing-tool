import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import '../../CSS/Styles.css'
import sheild from '../../Images/sheild.png'
import { Link } from 'react-router-dom'

export default function Usage() {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="text-center pt-5 pb-5 mt-5 mb-5">
            <h2>Why use Plaggenie Paraphrasing Tool?</h2>
            <p className="uspara">Our Paraphraser has unique features.</p>
          </div>
          <div className="row align-items-center box-container pt-3 pb-3 mt-2 mb-3 usage-border">
            <div className="col-md-6">
              <div className=" overflow-hidden">
                { <img src={sheild} alt="Paraphrasing Tool Image" class="usage-img"/> }
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <h4 className="text-info pt-3 pb-3 mt-3 mb-3">
                  Plaggenie AI-powered paraphrasing tool will enhance your writing
                </h4>
                <p className="pt-3 pb-3 mt-3 mb-3">
                  At Plaggenie Paraphrasing Tool, we recognize the power of your words. With unlimited Custom modes and 8 predefined modes, our Paraphraser empowers you to craft your message in countless ways. Enhance your fluency while mastering the art of appropriate vocabulary, tone, and style for every professional scenario. Simply input your text, and our AI collaborates with you to refine your message to perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

