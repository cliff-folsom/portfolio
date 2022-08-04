import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/pw-gen_41.png'
import IMG2 from '../../assets/tictactoe_50.png'
import IMG3 from '../../assets/recipe_70.jpg'

const Portfolio = () => {
  return (
     <section id='Portfolio'>
      <h5>Portfolio</h5>
      <h2>My recent projects</h2>

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
          <a href="https://62ead3364761cf07ecffae24--earnest-puffpuff-33c05e.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>  

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="Recipe Search" />
          </div>
          <h3>Recipe Card Search</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/cliff-folsom/pw-gen" target="_blank" rel='noopener noreferrer' className='btn'>Github</a>
          <a href="https://recipes.netlify.app/" target="_blank" rel='noopener noreferrer' className='btn btn-primary'>Live Demo</a>
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