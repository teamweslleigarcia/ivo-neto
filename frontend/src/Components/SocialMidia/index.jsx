import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'

import './csocialMidia.css'

const CSocialMidia = () => {
  return (
    <div className='container-social-midia'>
        <div className='social-midia-icons'>
            <Link to="https://facebook.com/weslleigarcia" className='icon-link'>
                <FaFacebookF className='icon' />
            </Link> 
            <Link to="" className='icon-link'>
                <FaWhatsapp className='icon'  />
            </Link> 
            <Link to="" className='icon-link'>
                <FaInstagram className='icon'  />
            </Link> 
            <Link to="" className='icon-link'>
                <FaTwitter className='icon'  />
            </Link> 
        </div>
    </div>
  )
}

export default CSocialMidia