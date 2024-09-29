import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';
import Card_Paciente from '../../card-paciente';


export default function Cardadm() {
 
    const [consultasList, setConsultasList] = useState([])
    const [tipoConsulta, setTipoconsulta] = useState(0)
    const [futura, setFutura] = useState('consultasFuturas')
    const [passadas, setPassadas] = useState('consultasPassadas')

    async function renderList(){
        const url = 'http://localhost:5020/'+tipoConsulta
      

        let resp = await axios.get(url)
        setConsultasList(resp.data)
        
    }


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

            <button onClick={renderList}>Testar API</button>
          <div className="cards">
             {/* Parte para testar api*/}
       

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
