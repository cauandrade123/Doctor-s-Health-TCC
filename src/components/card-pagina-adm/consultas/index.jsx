import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import Card_Paciente from '../../card-paciente';


export default function Cardadm() {
 

    const [consultasList, setConsultasList] = useState([])
    const [tipoConsulta, setTipoconsulta] = useState('consultasFuturas')
    const [futura, setFutura] = useState('consultasFuturas')
    const [passadas, setPassadas] = useState('consultasPassadas')
    const [buscar, setBuscar] = useState('')


    {/* Função para pesquisar no banco pelo CPF */}
    async function Buscar() {
        const url = 'http://localhost:5020/consultasCpf/'+`${buscar}`
        let resp = await axios.get(url)

        setConsultasList(resp.data)
    }

      {/* Função para renderizar a resposta do BANCO nos cardzin */}
    async function renderList(){
        const url = 'http://localhost:5020/'+tipoConsulta
        let resp = await axios.get(url)
        
        setConsultasList(resp.data)
    }

    {/* useEffect para renderizar a lista na tela */}
    useEffect(()=> {

        if (buscar == '') {
            renderList()
        } else {
            Buscar()
        }
       
    }, [buscar])




    return (
        <div className="card-container">
            <div className="buscar-paciente">
             <input value={buscar} onChange={e => setBuscar(e.target.value)} className='Buscar' type="text" placeholder={`🔎 Consultar pelo CPF`}/>

            <label className='label-select-input' htmlFor="">Escolha entre consultas:</label>
             <select onChange={ e => setTipoconsulta(e.target.value)}>
                <option value={futura}>Futuras</option>
                <option value={passadas}>Passadas</option>
                
            </select>

          <div className="cards">

                    {consultasList.map((item, index) => {
                    return (
                      
                <Card_Paciente
                    key={index}
                    condicao={item.condicao}
                    cpf={item.cpf}
                    dia_horario={item.dia_horario}
                    medicacao={item.medicacao}
                    nascimento={item.nascimento}
                    nome={item.nome}
                    preco={item.preco}
                    rg={item.rg}
                    tratamento={item.tratamento}
                />
                    
                    );
                })}
        </div>
                

            
            </div>


           
        </div>
    );
}
