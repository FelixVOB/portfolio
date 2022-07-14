import React from 'react'
import i18n from '../../i18n'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Felix Van Obbergen</a>

      <ul className='permalinks'>
        <li><a href="#">{i18n.t('home')}</a></li>
        <li><a href="#about">{i18n.t('about')}</a></li>
        <li><a href="#experience">{i18n.t('exp')}</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </footer>
  )
}

export default Footer