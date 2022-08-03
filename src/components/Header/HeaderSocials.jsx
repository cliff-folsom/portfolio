import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsReddit} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/cliff-folsom-5b331266/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        <a href="https://www.reddit.com/user/MaStErChEEf2222" target="_blank" rel="noreferrer"><BsReddit /></a>
        <a href="https://www.github.com/cliff-folsom" target="_blank" rel="noreferrer"><BsGithub /></a>
    </div>
  )
}
export default HeaderSocials