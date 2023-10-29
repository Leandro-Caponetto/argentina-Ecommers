import React from 'react'
import Navidad from '../../assets/images/navidad/navidad1.gif'
import './Helmet.css';

const Helmet = (props) => {

    document.title = 'Argentina -' + props.title
  return (
    <div className='w-100'>{props.children}
    <div className="navbar-image">
              <img src={Navidad} alt="Navidad" />
            </div>
    </div>
  )
}

export default Helmet;