import React from 'react'
import './Experience.css'
import {FaHtml5} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiCsswizardry} from 'react-icons/si'
import {BsCheckCircleFill} from 'react-icons/bs'
import {VscJson} from 'react-icons/vsc'
import {SiTypescript} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>Experience</h5>
      <h2>Skills I've acquired</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Languages</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaHtml5 className='experience-details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <SiCsswizardry className='experience-details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <IoLogoJavascript  className='experience-details-icon'/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Mid-level</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <FaReact  className='experience-details-icon'/>
              <div>
                 <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <VscJson  className='experience-details-icon'/>
              <div>
                <h4>JSON</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <SiTypescript  className='experience-details-icon'/>
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__cms">
        <h3>CMS Experience</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience-details-icon'/>
              <div>
                <h4>Adobe Experince Manager</h4>
                <small className="text-light">Certified</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience-details-icon'/>
              <div>
                <h4>Shopify</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience-details-icon'/>
              <div>
                <h4>Drupal</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience-details-icon'/>
              <div>
                <h4>Wordpress</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsCheckCircleFill  className='experience-details-icon'/>
              <div>
                <h4>HubSpot</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience