import React from 'react'
import './About.css'
import ME from '../../assets/me-about.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h1>About Me</h1>

      <div className="container about_container">
          <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>

              <article className='about_card'>
                <FiUsers className='about_icon'/>
                <h5>Clients</h5>
                <small>200+ Worldwide</small>
              </article>

              <article className='about_card'>
                <VscFolderLibrary className='about_icon'/>
                <h5>Projects</h5>
                <small>80+ Completed</small>
              </article>
            </div>
            <p><strong>Hello, I'm Alvin</strong> – an accomplished <strong>Cloud Developer and Azure graduate</strong> based in the vibrant tech hub of Stockholm, Sweden. My coding journey spans a diverse array of technologies, including <strong>C#, Java, C, HTML5, CSS3, and the dynamic duo of JavaScript and React</strong>. As a versatile Full Stack Developer, I excel in both frontend and backend realms, applying a holistic approach to breathe life into projects.</p>

            <p><strong>My educational foundation</strong> in <strong>Computer Science and Engineering at Daffodil International University</strong> provided a solid base, and I've undertaken specialized studies at <strong>Försvarshögskolan</strong>. While my courses focused more on logistics within system development for defense and security, they have significantly contributed to my broader understanding and problem-solving skills.</p>

            <p>Building on this, my pursuit of further education at <strong>Jensen Yrkeshögskolan, specializing in Azure Cloud Development</strong>, has enriched my skills and positioned me as a proficient <strong>Azure Cloud Developer</strong>. This diverse background uniquely equips me to bring a comprehensive skill set to contribute effectively to innovative IT projects.</p>

            <a href="#contact"className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default About