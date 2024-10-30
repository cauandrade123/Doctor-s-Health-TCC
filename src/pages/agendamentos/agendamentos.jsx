
import React from 'react';
import CartaoAgendamento from '../../components/CardAgendamento/card';
import Slide from '../../components/cards/index'
import './agendamentos.scss';
import Header from '../../components/header/header';

function Agendamento() {
  return (
    <div className="agendamento">
      <div className='posi'>
      <div className='branco'>

        <h1>Agendamentos</h1>
        <div className='cards'>
          <CartaoAgendamento/>
          <CartaoAgendamento/>
          <CartaoAgendamento/>
          <CartaoAgendamento/>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default  Agendamento;
