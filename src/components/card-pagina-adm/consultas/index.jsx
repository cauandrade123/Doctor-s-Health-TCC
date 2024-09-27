import React, { useState } from 'react';
import './index.scss';

export default function Cardadm() {
    const [editarMode, setEditarMode] = useState(false);
    const [sair, setSair] = useState(false);

    const [formData, setFormData] = useState({
        nome: 'Pamela Almeida Santos Guiné',
        rg: '122-334-456 / 6',
        idade: '63',
        cpf: '541520698-13',
        tratamento: 'Exame Rotina',
        condicao: 'Diabético',
        medicacao: 'Glicose',
        preco: '250,00',
    });

    const edit = () => {
        setEditarMode(true);
    };

    const salvar = () => {
        setEditarMode(false);
    };

    const sairSistema = () => {
        setSair(true);
    };

    const mudar = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };



    return (
        <div className="card-container">
            <div className="card1">
                <div className="dados-cliente">
                    <h1>Data: 20/01/2023  Horario: 14:00</h1>
                    <hr />
                    <div className="field">
                        <h2>Nome:      {editarMode ? (
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.nome}</p>
                        )}</h2>
                  
                    </div>
                    <div className="field">
                        <h2>RG:  {editarMode ? (
                            <input
                                type="text"
                                name="rg"
                                value={formData.rg}
                                onChange={mudar}
                            />
                        ) : (
                            <h2>{formData.rg}</h2>
                        )}</h2>
                      
                    </div>
                    <div className="field">
                        <h2>Idade:  {editarMode ? (
                            <input
                                type="text"
                                name="idade"
                                value={formData.idade}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.idade}</p>
                        )}</h2>
                      
                    </div>
                    <div className="field">
                        <h2>CPF: {editarMode ? (
                            <input
                                type="text"
                                name="cpf"
                                value={formData.cpf}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.cpf}</p>
                        )}</h2>
                       
                    </div>
                    <div className="field">
                        <h2>Tratamento:{editarMode ? (
                            <input
                                type="text"
                                name="tratamento"
                                value={formData.tratamento}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.tratamento}</p>
                        )}</h2>
                        
                    </div>
                    <div className="field">
                        <h2>Condição: {editarMode ? (
                            <input
                                type="text"
                                name="condicao"
                                value={formData.condicao}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.condicao}</p>
                        )}</h2>
                       
                    </div>
                    <div className="field">
                        <h2>Medicação:{editarMode ? (
                            <input
                                type="text"
                                name="medicacao"
                                value={formData.medicacao}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.medicacao}</p>
                        )}</h2>
                        
                    </div>
                    <div className="field">
                        <h2>Preço:{editarMode ? (
                            <input
                                type="text"
                                name="preco"
                                value={formData.preco}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{formData.preco}</p>
                        )}</h2>
                        
                    </div>
                </div>

                {editarMode ? (
                    <button className="editar" onClick={salvar}>
                        Salvar
                    </button>
                ) : (
                    <button className="editar" onClick={edit}>
                        Editar
                    </button>
                )}

              
            </div>
        </div>
    );
}
