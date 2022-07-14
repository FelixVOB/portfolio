import { t } from 'i18next'
import React from 'react'
import CV from '../../img/Curriculum vitae Felix Van Obbergen pdf.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>{t('lets-talk')}</a>
    </div>
  )
}

export default CTA