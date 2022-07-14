import React from 'react'
import './languages.css'
import i18n from'../../i18n'

const language = () => {
  return (
    <div className='languages__container'>
        <button onClick={change1}>NL</button>
        <button onClick={change2}>EN</button>
    </div>
  )
}
const change1= () => {
    i18n.changeLanguage("nl");
};
const change2= () => {
  i18n.changeLanguage("en");
};

export default language