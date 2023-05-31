import React from 'react'

import { useForm } from 'react-hook-form';

import { FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';

import './sectionContato.css'
import { Link } from 'react-router-dom';

const SectionContato = (props) => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
  return (
    <section className='container-section'>
      <div className='title-section'>
        <h2 className='title-section--h2'>{props.title}</h2>
      </div>
      <div className='section-contact'>
        <div className='contact-form'>
          <p>Envie sua mensagem</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
              <label htmlFor="nome">Nome</label>
              <input className={errors?.nome && 'input-error'} type="text" name="nome" id="nome"
                {...register("nome", {required: true, maxLength: 80})}
              />
              {errors?.nome?.type === "required" && (
                <p className='error-message'>Nome é Obrigatório</p>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor="nome">Telefone</label>
              <input className={errors?.telefone && 'input-error'} type="text" name="telefone" id="telefone"
                {...register("telefone",
                  { required: true,  
                    pattern:{
                      value:/^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/,
                      message: 'Telefone Inválido. Tente (XX) XXXXX-XXXX'
                    },
                  })
                }
              />
              {errors?.telefone?.type === "required" && (
                <p className='error-message'>Telefone é Obrigatório</p>
              )}
              {errors?.telefone?.message && (
                <p className='error-message'>Telefone Inválido. Tente (XX) XXXXX-XXXX</p>
              )}
            </div>
            <div className='form-group'>
              <label htmlFor="nome">Mensagem</label>
              <textarea className={errors?.mensagem && 'input-error'} type="text" name="mensagem" id="mensagem" 
                {...register("mensagem", {required: true, maxLength: 300})}
              />
              {errors?.mensagem?.type === "required" && (
                <p className='error-message'>Mensagem é Obrigatório</p>
              )}
            </div>

            <div className='form-group'>
              <button className='btn btn-enviar' type='submit'>Enviar</button>
            </div>
          </form>
        </div>
        <div className='contact-social-midia'>
          <p>Siga-me</p>
          <div className='siga-me'>
            <Link to="https://www.facebook.copm/ivonetojj">
              <FaFacebookF className='siga-me-icon' />
            </Link>
            <Link to="https://www.instagram.copm/ivoneto_jj">
              <FaInstagram className='siga-me-icon'/>
            </Link>
            <Link to="https://www.twitter.copm/vereadorivoneto">
              <FaTwitter className='siga-me-icon'/>
            </Link>  
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContato