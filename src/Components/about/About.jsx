import React from "react";
import "./about.css";
import Image from '../../assets/avatar-2.svg'
import AboutBox from "./AboutBox";
const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section_title">About Me</h2>
      <div className="about_container grid">
        <img src={Image} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">
              I'm Balu.B, web developer from Anantapur, AP. I have excellent
              skills in web site design and building and customization, also I'm
              good at programming skills.
            </p>
            <a href = "https://docs.google.com/document/d/1ohnBgl8jFXvCmIm3DOlGrgf0uPUnCUeWWacXjQdUj1U/edit?usp=drive_link"  className="btn">
              Download CV
            </a>
          </div>
          <div className="about_skills grid">
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">HTML</h3>
                <span className="skills_number ">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage development "></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">CSS3</h3>
                <span className="skills_number">80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage css"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Bootstrap</h3>
                <span className="skills_number"> 80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage Bootstrap"></span>
              </div>
            </div>
            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">Java Script</h3>
                <span className="skills_number"> 80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage javascript"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skills_titles">
                <h3 className="skills_name">React JS</h3>
                <span className="skills_number"> 80%</span>
              </div>
              <div className="skills_bar">
                <span className="skills_percentage reactjs"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
