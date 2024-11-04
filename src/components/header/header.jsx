import React, { useState } from 'react';
import NewLogo from '../../assets/img/tcc/tccassests/NovoAssets/new-logo/newlogo.svg';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './header.scss';
import sanduba from '../../assets/img/tcc/tccassests/simbolos/icons8-menu-quadrado-2-50.png'
import { IoMenuOutline } from "react-icons/io5";
export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <div className="logo">
        <img src={NewLogo} alt="Logo" />
      </div>
      <div className="links">
        <div className="simbolo-sanduba" onClick={alternarMenu}>
          <IoMenuOutline/>
        </div>
        <div className={`info ${menuAberto ? 'aberto' : ''}`}>
          <RouterLink to={'/'}><li>Home</li></RouterLink> 
          <ScrollLink to="Sobrenos" smooth={true} duration={500}><li>Sobre Nós</li></ScrollLink>
          <ScrollLink to="Serviços" smooth={true} duration={500}><li>Como Trabalhamos</li></ScrollLink>
          <ScrollLink to="ComoTrabalhamos" smooth={true} duration={500}><li>Serviços</li></ScrollLink>
        </div>
      </div>
    </header>
  );
}
