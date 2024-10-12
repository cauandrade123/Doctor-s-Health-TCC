import React, { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import Card_Paciente from '../../card-paciente';
import Notification from '../../aviso/aviso';

export default function Cardadm() {
 

    const [consultasList, setConsultasList] = useState([])
    const [tipoConsulta, setTipoconsulta] = useState('consultasFuturas')
    const [futura, setFutura] = useState('consultasFuturas')
    const [passadas, setPassadas] = useState('consultasPassadas')
    const [buscar, setBuscar] = useState('')

    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('')  



    function CalcularIdade (nascimento){

        {/* Pega a informação da data atual */}
        const dataHOJE = new Date();
        const ano = dataHOJE.getFullYear();
        const mes = dataHOJE.getMonth();
        const dia = dataHOJE.getDay();
        {/* ------------------------------- */}

        {/* Pega a informação da data de nascimento */}
        const dataNascimento = new Date(nascimento)
        const mesNasc = dataNascimento.getMonth();
        const anoNasc = dataNascimento.getFullYear();
        const diaNasc = dataNascimento.getDay();
        {/* --------------------------------------- */}

        {/* Calculo e lógica da parada da situação do procedimento */}
        let idade = ano- anoNasc 

        if ( mes < mesNasc || (mes === mesNasc && dia < diaNasc)) {
            idade--
        }
        {/* ------------------------------------------------------ */}


        return idade
    }

    {/* Função para pesquisar no banco pelo CPF. */}
    async function Buscar() {
        const url = 'http://localhost:5020/consultasCpf/'+`${buscar}`
        let resp = await axios.get(url)

        setConsultasList(resp.data)
    }

      {/* Função para renderizar a resposta do BANCO nos cardzin. */}
    async function renderList(){
        const url = 'http://localhost:5020/'+tipoConsulta
        let resp = await axios.get(url)
        
        setConsultasList(resp.data)
    }

    {/* useEffect para renderizar a lista na tela, se o input "busca" tiver vazio, renderiza a opção
    escolhida no input de passadas e futuras.*/}
    useEffect(()=> {

        if (buscar == '') {
            renderList()
        } else {
            Buscar()
        }
    }, [tipoConsulta, buscar])




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
                    dia_horario={new Date(item.dia_horario).toLocaleDateString()}
                    horario={new Date(item.dia_horario).toLocaleString('pt-BR', {hour: '2-digit',minute: '2-digit', hour12: false})}
                    medicacao={item.medicacao}
                    nascimento={`Idade atual: ${CalcularIdade(item.nascimento)}\nData de nascimento: ${new Date(item.nascimento).toLocaleDateString()}`}
                    nome={item.nome}
                    preco={item.preco}
                    rg={item.rg}
                    tratamento={item.tratamento}
                    finalizada={item.finalizada?('Sim'):('Não')}
                />

              
                    
                    );

    
        
                })}

        </div>
                

            
            </div>


           
        </div>
    );
}
