import React from 'react'
import './portfolio.css'
import IMG1 from '../../img/recepywebsite.png'
import IMG2 from '../../img/webwinkel.png'
import IMG3 from '../../img/quiz.png'
import IMG4 from '../../img/oefenSite.png'
import IMG5 from '../../img/weer.png'
import IMG6 from '../../img/studiebelaster.png'
import i18n from '../../i18n'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>{i18n.t('my-recent')}</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
            <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG1} alt={i18n.t('dessert')} />
            </div>
            <h3>{i18n.t('dessert')}</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/siteDesserten' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG2} alt='UCLL Webshop'/>
            </div>
            <h3>UCLL Webshop</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/webWinkel' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG3} alt='Front End Quiz' />
            </div>
            <h3>Front End Quiz</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/Quiz' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG4} alt={i18n.t('practice')} />
            </div>
            <h3>{i18n.t('practice')}</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/OefenSite' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG5} alt={i18n.t('weather')} />
            </div>
            <h3>{i18n.t('weather')}</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/WeerApp' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={IMG6} alt={i18n.t('study')} />
            </div>
            <h3>{i18n.t('study')}</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/FelixVOB/studieBelaster' className='btn btn-primary github' target='_blank' rel="noreferrer">Github</a>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Portfolio