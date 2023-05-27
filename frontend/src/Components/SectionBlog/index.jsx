import React from 'react'

import {FacebookShareButton, FacebookShareCount, FacebookIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'

import IvoNeto from '../../images/ivoneto-02.jpg'

import './sectionBlog.css'
import { Link } from 'react-router-dom';

const SectionBlog = (props) => {

  const shareUrl = 'https://www.instagram.com/';
  const title = 'GitHub';


  return (
    <section className='container-section'>
      <div className='title-section'>
        <h2 className='title-section--h2'>{props.title}</h2>
      </div>
      <div className='container-section'>
        <div className='container-section--blog'>
          <div className='container-card'>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            <div className='card-article-blog'>
              <div className='card-article-blog-img'>
                <img className='img-cover' src={IvoNeto} alt=""/>
              </div>
              <div className='card-article-blog--title'>
                <h2>Aprovado Projeto de Lei de Ivo Neto que incetiva famílias acolhedoras em Manaus</h2>
              </div>
              <div className='card-article-blog--resume'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aperiam delectus quam architecto nostrum voluptate...</p>
              </div>
              <div className='card-article-blog--date-read-plus'>
                <span className='date'>4 janeiro 2023</span> 
                <span className='read-plus'>
                  <Link to="">Leia mais
                  </Link>
                </span>
              </div>
              <div className='card-article-blog--share-social'>
                <span>Compartilhe</span>
                <div className="Demo__some-network">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <FacebookIcon size={32} round />
                  </FacebookShareButton>

                  <div>
                    <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                      {count => count}
                    </FacebookShareCount>
                  </div>
                </div>
                <div className="Demo__some-network">
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={title}
                    className="Demo__some-network__share-button"
                  >
                  <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
                </div>
              </div>
            </div>
            
          </div>
          <div className='container-section--blog-footer'>
            <Link to='/blog'>
              Ver tudo
            </Link>
          </div>
          


        {/*<div className="Demo__some-network">
          <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
          >
          <FacebookIcon size={32} round />
          </FacebookShareButton>

          <div>
            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
              {count => count}
            </FacebookShareCount>
          </div>
  </div> */}
        </div>
      </div>
    </section>
  )
}

export default SectionBlog