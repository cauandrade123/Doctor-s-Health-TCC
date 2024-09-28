import React, { useState } from 'react';
import './index.scss';
import Lupa from '../../../assets/img/tcc/tccassests/simbolos/Lupa.svg';
import axios from 'axios';


export default function Cardadm() {
    const [editarMode, setEditarMode] = useState(false);
    const [sair, setSair] = useState(false);
    const [consultasList, setConsultasList] = useState([])
    const [tipoConsulta, setTipoconsulta] = useState(0)
    const [futura, setFutura] = useState('consultasFuturas')
    const [passadas, setPassdas] = useState('consultasPassadas')

 async function renderList(){
        const url = 'http://localhost:5020/'+tipoConsulta
      

        let resp = await axios.get(url)

        setConsultasList(resp.data)
        
    }

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
            <div className="buscar-paciente">
             <input className='Buscar' type="text" placeholder={`🔎 Consultar`}/>
            

            <label className='label-select-input' htmlFor="">Escolha entre consultas:</label>
             <select onChange={ e => setTipoconsulta(e.target.value)}>
                <option value='Selecione'>Selecione</option>
                <option value={futura}>Futuras</option>
                <option value={passadas}>Passadas</option>
                
            </select>

          
             {/* Parte para testar api*/}
            <button onClick={renderList}>Testar API</button>

            {consultasList.length > 0 && consultasList.map((item) => (
            <div className="testeAPi" key={item.id}>
                <p>Dia/Horário: {item.dia_horario}</p>
                <p>Nome: {item.nome}</p>
                <p>RG: {item.rg}</p>
                <p>Data de Nascimento: {item.nascimento}</p>
                <p>CPF: {item.cpf}</p>
                <p>Tratamento: {item.tratamento}</p>
                <p>Condição: {item.condicao}</p>
                <p>Medicação: {item.medicacao}</p>
                <p>Preço: {item.preco}</p>
            </div>
            ))}

            
            </div>


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
