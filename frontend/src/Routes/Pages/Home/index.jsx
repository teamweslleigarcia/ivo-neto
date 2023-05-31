import React from 'react'
import SectionHeader from '../../../Components/SectionHeader'
import './pagehome.css'
import SectionGabinete from '../../../Components/SectionGabinete'
import SectionBlog from '../../../Components/SectionBlog'
import SectionNoticias from '../../../Components/SectionNoticias'
import SectionContato from '../../../Components/SectionContato'
const PageHome = () => {
  return (
    <div className='container-home'>
      <SectionHeader />
      <SectionGabinete title="Gabinete"/>
      <SectionBlog title="Blog"/>
      {/*<SectionNoticias title="Noticias"/>*/}
      <SectionContato title="Contate-me"/>
    </div>
  )
}

export default PageHome