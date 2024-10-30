
import React from 'react';
import './card.scss';

const AgendamentoCard = () => {
    return (
        <div className="cartao-agendamento">
          <div className="detalhes-agendamento">
            <div className="info-agendamento">
              <span className="status">Finalizado</span>
              <h3>Consulta</h3>
              <p>Dr.Jõao Silva</p>
              <p></p>
            </div>
            <div className="data">
              <span>outubro</span>
              <strong>29</strong>
              <small>09:30</small>
            </div>
          </div>
        </div>
      );
};

export default AgendamentoCard;
