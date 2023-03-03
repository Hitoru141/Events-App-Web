import React from 'react'
import dna from '../assets/dna-logo.png'
import '../Styles/main.css'

const Spashscreen = () => {
  return (
    <div className='splash-wrap'>
        <img src={dna} className='dna-logo'/>
    </div>
  )
}

export default Spashscreen