import React from 'react'
import './Service.css'
import { GiCheckedShield } from "react-icons/gi";

const Service = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h1>services</h1>
      <div className="container services_container">

        <article className="service">
          <div className="service_head">
            <h3>FullStack Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Versatile Programming Skills:</strong> Navigate a spectrum of languages, from C#, Java, and C to JavaScript and React.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Comprehensive Full Stack Expertise:</strong> Seamlessly handle both frontend and backend development, ensuring cohesive solutions.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Customized Web Applications:</strong> Tailor solutions to specific business needs, delivering unique and impactful applications.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Innovative Problem Solver:</strong> Approach challenges with a creative mindset, turning ideas into innovative solutions.</p>
            </li>

           <li>
           <GiCheckedShield className='service_list-icon'/>
           <p><strong>Version Control Mastery:</strong> Efficiently manage code collaboration with Git, ensuring project integrity.</p>
           </li>
            
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>.NET & ASP:NET Developer Services</h3>
          </div>
          <ul className="service_list">
            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Expert .NET Proficiency:</strong> Leverage the full potential of .NET & ASP:NET for efficient and robust server-side applications.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>ASP.NET Services:</strong> Harness ASP.NET for building dynamic and interactive web applications.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Scalable Architectures:</strong> Design backend systems that seamlessly scale to meet growing business demands.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Data Management Excellence:</strong> Optimize databases for performance, ensuring smooth data operations.</p>
            </li>

           <li>
           <GiCheckedShield className='service_list-icon'/>
           <p><strong>API Development Mastery:</strong> Create secure and scalable APIs, facilitating seamless communication across systems.</p>
           </li>
            
          </ul>
        </article>

        <article className="service">
          <div className="service_head">
            <h3>Azure Cloud Services</h3>
          </div>
          <ul className="service_list">
            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Azure Cloud Development:</strong> Advanced proficiency in crafting secure, scalable, and efficient cloud-based solutions.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Cloud Migration and Integration:</strong> Seamlessly migrate and integrate existing systems into Azure for enhanced functionality.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Resource Optimization:</strong> Ensure cost-effective resource utilization and efficient cloud infrastructure management.</p>
            </li>

            <li>
            <GiCheckedShield className='service_list-icon'/>
            <p><strong>Continuous Monitoring and Improvement:</strong> Implement strategies for ongoing monitoring, analysis, and enhancement of Azure-based solutions.</p>
            </li>

           <li>
           <GiCheckedShield className='service_list-icon'/>
           <p><strong>Comprehensive Azure Knowledge:</strong> Adept at leveraging various Azure services to meet diverse project requirements.</p>
           </li>
            
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Service