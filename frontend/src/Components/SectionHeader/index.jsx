import React from 'react'

import CSocialMidia from '../SocialMidia'

import IvoNeto from '../../images/ivoneto-01.png'
import Image1 from '../../images/fundo.jpg'
import Image2 from '../../images/fundo1.jpeg'
import Image3 from '../../images/Image3.jpg'

import Carousel from 'react-bootstrap/Carousel';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './sectionHeader.css'

const SectionHeader = () => {

  return (
    <div className='container-section-header'>
      <div className='section-header'>
        <div className='section-header--carousel'>
          <div style={{display:'block'}}>
            <Carousel controls={false}>
              <Carousel.Item>
                <div className='bgimage'>
                  <img  className="d-block w-100 cover" 
                        src={Image1}
                        alt=""
                  />
                  <Carousel.Caption>
                  <div className='caption-align'>
                    <p><span className='text-bg'>6</span> Leis em vigor</p>
                    <p><span className='text-bg'>11</span> Projetos de Lei</p>
                  </div>
                  </Carousel.Caption>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='bgimage'>
                  <img
                    className="d-block w-100 cover"
                    src={Image2}
                    alt="Second slide"
                  />
                </div>
                <Carousel.Caption>
                  <div className='caption-align'>
                    <p><span className='text-bg'>Um</span> dos Vereadores</p>
                    <p> <span className='span-plus'>+</span> <strong> presentes </strong></p>
                    <p>Nas Sessões Plenárias</p>
                    <p>de 2022</p>
                    <p className='caption-fonte'>Fonte: Site Câmara Municpal de Manaus</p>
                  </div>
                  
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <div className='bgimage'>
                  <img
                    className="d-block w-100 cover"
                    src={Image3}
                    alt="Second slide"
                  />
                </div>

                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>        
      </div>
      <div className='section-header--perfil'>
          <div className='perfil'>
            <div className='perfil--photo'>
              <img className='perfil--photo-img' src={IvoNeto} alt="" />
            </div>
            <div className='perfil--card'>
              <h1>Ivo Neto</h1>
              <p>Vereador</p>
            </div>
            <div className='perfil--social-midia'>
              <CSocialMidia />
            </div>
          </div>
      </div>
    </div>
  )
}

export default SectionHeader