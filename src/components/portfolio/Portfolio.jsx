import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/recipe.jpg'
import IMG2 from '../../assets/recipeApi.jpg'
import IMG3 from '../../assets/shotgun.jpg'
import IMG4 from '../../assets/banksystem.png'
import IMG5 from '../../assets/JensenAuction.png'
import IMG6 from '../../assets/Addressbook.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h1>Portfolio</h1>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG1} alt="" />
            
          </div>
          <h3>Recipe Genius</h3>
            <div className="portfolio_item_cta">
            <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
            <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>Window Form c# Project</a>
            </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG2} alt="" />
            
          </div>
          <h3>Recipe Genius Web API</h3>
           <div className="portfolio_item_cta">
           <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
            <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>ASP.NET web API Project</a>
           </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG3} alt="" />
            
          </div>
          <h3>ShotGun Game</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>Window Form c# Project</a>
          </div>
            
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG4} alt="" />
            
          </div>
          <h3>Bank System managment Web API</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
            <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>ASP.NET web API Project</a>
          </div>
            
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG5} alt="" />
            
          </div>
          <h3>Jensen Auction Solution Web API</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
            <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>ASP.NET web API Project</a>
          </div>
            
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item_image">
            <img src={IMG6} alt="" />
            
          </div>
          <h3>AddressBook</h3>
          <div className="portfolio_item_cta">
          <a href="https://github.com/AAB-TB" className="btn" target='_blank'>Github</a>
            <a href="https://github.com/AAB-TB" className="btn btn-primary" target='_blank'>Window Form c# Project</a>
          </div>
            
        </article>
      </div>
    </section>
  )
}

export default Portfolio