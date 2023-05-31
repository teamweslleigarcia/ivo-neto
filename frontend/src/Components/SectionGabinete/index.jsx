import React from 'react'
import './sectionGabinete.css'
import { Link } from 'react-router-dom'
import { Form, FormLabel } from 'react-bootstrap'
const SectionGabinete = (props) => {
  return (
    <section className='container-section'>
      <div className='title-section'>
        <h2 className='title-section--h2'>{props.title}</h2>
      </div>
      <div className='container-section--gabinete'>
        <div className='container-card'>
          <div className='card-gabinete--dados'>
            <Link to="">
              Atendimentos
              <span className='gabinete--dados card-gabinete--dados-silver1'>475</span>
            </Link>
          </div>
          <div className='card-gabinete--dados '>
            <Link to="/leis-vigor">
              Leis Em Vigor
              <span className='gabinete--dados card-gabinete--dados-silver2'>07</span>
            </Link>
          </div>
          <div className='card-gabinete--dados'>
            <Link to="/projetos-lei">
              Projetos de Lei
              <span className='gabinete--dados card-gabinete--dados-silver1'>22</span>
            </Link>
          </div>
          <div className='card-gabinete--dados'>
            <Link to="/indicacoes">
              Indicações
              <span className='gabinete--dados card-gabinete--dados-silver2'>16</span>
            </Link>
          </div>
          <div className='card-gabinete--dados'>
            <Link to="/ementas">
              Ementas
              <span className='gabinete--dados card-gabinete--dados-silver1'>04</span>
            </Link>
          </div>
          <div className='card-gabinete--dados'>
            <Link to="">
              Requerimentos
              <span className='gabinete--dados card-gabinete--dados-silver2'>1.626</span>
            </Link>
          </div>
          <div className='card-gabinete--dados'>
            <Link to="">
              Ofícios
              <span className='gabinete--dados card-gabinete--dados-silver1'>584</span>
            </Link>
          </div>
        </div>
        <div className='rss-whatsapp'>
          <Form>
            <FormLabel >Acompanhe as notícias, deixe o número de seu WhatsApp</FormLabel>
            <input type="text" name="whatsapp" id="whatsapp" />
            <button className='btn-w'>Receber Noticias Agora</button>
          </Form>

        </div>
      </div>
    </section>
  )
}

export default SectionGabinete