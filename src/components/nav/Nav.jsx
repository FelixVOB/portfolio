import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import { BiBrain } from 'react-icons/bi'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import Scrollspy from 'react-scrollspy'

const Nav = () => {
  return (
    <Scrollspy className='nav' items={ ['home', 'about', 'experience', 'portfolio', 'contact'] } currentClassName="is-current">
      <a href="#"><AiOutlineHome className='icon'/></a>
      <a href="#about"><AiOutlineUser className='icon'/></a>
      <a href="#experience"><BiBrain className='icon'/></a>
      <a href="#portfolio"><BiBook className='icon'/></a>
      <a href="#contact"><BiMessageSquareDetail className='icon'/></a>
    </Scrollspy>
  )
}

export default Nav