import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../img/MELARGE3.png'
import HeaderSocials from './HeaderSocials'
import { useTranslation }  from 'react-i18next'

const Header = () => {
  const{ t } = useTranslation();
  return (
    <header id='home'>
      <div className="container header__container">
        <div className='container2'>
        <div className='hello'>
        <h5>{t('greeting')}</h5>
        <h1>Felix Van Obbergen</h1>
        <h5 className="text-light">{t('front-end-dev')}</h5>
        <CTA/>
        </div>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        </div>

        <a href="#contact" className='scroll__down'>{t('scroll-down')}</a>
      </div>
    </header>
  )
}

export default Header