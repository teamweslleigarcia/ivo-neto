import React from 'react'

const SectionNoticias = (props) => {
  return (
    <section className='container-section'>
      <div className='title-section'>
        <h2 className='title-section--h2'>{props.title}</h2>
      </div>
    </section>
  )
}

export default SectionNoticias