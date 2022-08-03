import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pw-gen_41.png'
import IMG2 from '../../assets/tictactoe_40.png'
import IMG3 from '../../assets/cat-typing1.jpg'

const Portfolio = () => {
  return (
     <section id='Portfolio'>
      <h5>My recent projects</h5>
      <h2>Porfolio</h2>

       <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="React Password Generator" />
          </div>
          <h3>Password Generator</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cliff-folsom/pw-gen" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://fervent-volhard-f2991a.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="React Tic-Tac-Toe" />
          </div>
          <h3>Tic-tac-toe</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cliff-folsom/tic-tac-toe" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="/home/cliff/Projects/my-app/build" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="React Password Generator" />
          </div>
          <h3>Working on more</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cliff-folsom/pw-gen" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://fervent-volhard-f2991a.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  
{/*
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="React Password Generator" />
          </div>
          <h3>Password Generator</h3>
          <a href="https://github.com/cliff-folsom/pw-gen" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://fervent-volhard-f2991a.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Live Demo</a>
          
  </article> */}  
      </div>
    </section> 
  )
}

export default Portfolio  