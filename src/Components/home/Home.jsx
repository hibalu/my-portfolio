import React from 'react'
import './home.css';
import Image from "../../assets/avatar-1.svg"
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes'
const Home = () => {
  return (
  <section className='home container' id = 'home'>
    <div className="intro">
      <img src={Image} alt='' className='home_img' />
      <h1 className="home_name">Balu.B</h1>
      <span className="home_education">I'm a Front-End developer </span>
      <HeaderSocials/>

    <button> <a href='#contact' className='btn'>Hire Me</a></button> 
    <a href = "https://docs.google.com/document/d/1ohnBgl8jFXvCmIm3DOlGrgf0uPUnCUeWWacXjQdUj1U/edit?usp=drive_link"  className="btn">
              Download CV
            </a>

      <ScrollDown/>
    </div>
    <Shapes/>
  </section>
  )
}

export default Home
