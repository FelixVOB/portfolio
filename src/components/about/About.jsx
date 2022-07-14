import React from 'react'
import './about.css'
import ME from '../../img/MEABOUT.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {FaUserGraduate} from 'react-icons/fa'
import i18n from '../../i18n'

const about = () => {
  return (
    <section id='about'>
      <h5>{i18n.t('get-to-know')}</h5>
      <h2>{i18n.t('about-me')}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>{i18n.t('experience')}</h5>
              <small>{i18n.t('9-tech')}</small>
            </article>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>{i18n.t('education')}</h5>
              <small>{i18n.t('pursuing')}</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>{i18n.t('projects')}</h5>
              <small>{i18n.t('12')}</small>
            </article>
          </div>
          <p>{i18n.t('about-me-text')}</p>
          <a href="#contact" className='btn btn-primary'>{i18n.t('lets-talk')}</a>
        </div>
      </div>
    </section>
  )
}

export default about