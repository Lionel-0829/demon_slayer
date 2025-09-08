import { useState } from 'react';
import Main from '../Main/Main';
import './Footer.css';
import fb from '../../assets/Footer/fb.png'
import ig from '../../assets/Footer/ig.png'
import tw from '../../assets/Footer/tw.png'
import wp from '../../assets/Footer/wp.png'

function Footer() {
  return (
    <>
        <div className="img-contenedor">
          <img src={fb} alt="Facebook" />
          <img src={ig} alt="Instagram" />
          <img src={tw} alt="Twitter" /> 
          <img src={wp} alt="WhatsApp" />
        </div>
    </>
  );
}

export default Footer;