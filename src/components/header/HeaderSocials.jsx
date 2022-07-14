import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/felix-van-obbergen-2b994923b" target="blank"><BsLinkedin/></a>
        <a href="https://github.com/FelixVOB" target="blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials