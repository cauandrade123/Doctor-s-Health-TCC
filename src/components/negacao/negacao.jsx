import React, { useEffect } from 'react';
import './negacao.scss';

const Negacao = ({ mostrar, aoFechar, mensagem }) => {
  useEffect(() => {
    if (mostrar) {
      const temporizador = setTimeout(() => {
        aoFechar();
      }, 3000); 
      return () => clearTimeout(temporizador);
    }
  }, [mostrar, aoFechar]);

  return (
    <div className={`sobreposicao ${mostrar ? 'mostrar' : ''}`}>
      <div className={`cartao ${mostrar ? 'mostrar' : ''}`}>
        <div className="circulo-x">
          <div className="x"></div>
        </div>
        <p>{mensagem}</p>
      </div>
    </div>
  );
};

export default Negacao;
