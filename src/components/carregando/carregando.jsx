import React from 'react';
import './carregando.scss';

const carregando = ({ mostrar }) => {

  return (
    <div className={`sobreposicao ${mostrar ? 'mostrar' : ''}`}>
      <div className={`cartao ${mostrar ? 'mostrar' : ''}`}>
        <div className="spinner"></div>
     <p>Agendando...</p>
       </div>
     </div>
  );
};

export default carregando;
