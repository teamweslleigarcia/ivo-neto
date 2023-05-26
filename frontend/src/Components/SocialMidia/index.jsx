import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa'

import './csocialMidia.css'

const CSocialMidia = () => {
  return (
    <div className='container-social-midia'>
        <div className='social-midia-icons'>
            <Link to="https://wa.me/5592994087325" className='icon-link'>
                <FaWhatsapp className='icon-w'  />
            </Link>
            <Link to="https://www.facebook.com/ivonetojj" className='icon-link'>
                <FaFacebookF className='icon-w' />
            </Link> 
            <Link to="https://www.instagram.com/ivo_neto_jj/" className='icon-link'>
                <FaInstagram className='icon-w'  />
            </Link> 
            <Link to="https://www.twitter.com/vereadorivoneto/" className='icon-link'>
                <FaTwitter className='icon-w'  />
            </Link> 
        </div>
    </div>
  )
}

export default CSocialMidia