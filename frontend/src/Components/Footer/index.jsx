import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='container-footer'>
            <p>Desenvolvido por: </p>
            <Link to="https://prassessoriadigital.netlify.app/">
                PR Acessoria e Consultoria Digital
            </Link>
        </div>
    </footer>
  )
}

export default Footer