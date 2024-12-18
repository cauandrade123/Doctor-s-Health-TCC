import React, { useEffect } from 'react';
import './confirmacao.scss';

const Confirmacao = ({ mostrar, aoFechar}) => {
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
        <div className="circulo-check">
          <div className="check"></div>
        </div>
        <p>Agendamento concluido</p> 
      </div>
    </div>
  );
};

export default Confirmacao;