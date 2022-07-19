
import React from 'react'
import { useTranslation } from 'react-i18next'

const CTA = () => {
  const { t } = useTranslation();
  return (
    <div className="cta">
        <a href={t('cv')} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>{t('lets-talk')}</a>
    </div>
  )
}

export default CTA