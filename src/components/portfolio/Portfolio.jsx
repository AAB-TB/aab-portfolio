import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/recipe.jpg'
import IMG2 from '../../assets/recipeApi.jpg'
import IMG3 from '../../assets/shotgun.jpg'
import IMG4 from '../../assets/banksystem.png'
import IMG5 from '../../assets/JensenAuction.png'
import IMG6 from '../../assets/Addressbook.jpg'

const Portfolio = () => {
  const data =[
  {
    id:1,
    image:IMG1,
    title:'Recipe Genius',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'.NET c# Project'
  },
  {
    id:2,
    image:IMG2,
    title:'Recipe Genius Web API',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'ASP.NET Web API Project'
  },
  {
    id:3,
    image:IMG3,
    title:'ShotGun Game',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'.NET c# Project'
  },
  {
    id:4,
    image:IMG4,
    title:'Bank System managment Web API',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'ASP.NET Web API Project'
  },
  {
    id:5,
    image:IMG5,
    title:'Jensen Auction Solution Web API',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'ASP.NET Web API Project'
  },
  {
    id:6,
    image:IMG6,
    title:'AddressBook',
    github:'https://github.com/AAB-TB',
    demo:'https://github.com/AAB-TB',
    type:'.NET c# Project'
  }

]
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>

      <div className="container portfolio_container">
       {
        data.map(({id,image,title,github,demo,type}) => {
          return(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={image} alt={title} />
              
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item_cta">
            <a href={github} className="btn" target='_blank'>Github</a>
              <a href={demo} className="btn btn-primary" target='_blank'>{type}</a>
            </div>
              
          </article>
          )
        })

       }

      
      </div>
    </section>
  )
}

export default Portfolio