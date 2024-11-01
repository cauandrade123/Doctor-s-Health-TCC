import React, { useEffect, useState } from 'react';
import './index.scss';
import Card_Paciente from '../../card-paciente';
import Notification from '../../aviso/aviso';
import InputMask from 'react-input-mask';
import { api } from '../../../servicos';

export default function Cardadm() {
 

    const [consultasList, setConsultasList] = useState([])
    const [tipoConsulta, setTipoconsulta] = useState('consultasFuturas')
    const [futura, setFutura] = useState('consultasFuturas')
    const [passadas, setPassadas] = useState('consultasPassadas')
    const [buscar, setBuscar] = useState('')

    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('')  



    function CalcularIdade (nascimento){

       
        const dataHOJE = new Date();
        const ano = dataHOJE.getFullYear();
        const mes = dataHOJE.getMonth();
        const dia = dataHOJE.getDay();
        

       
        const dataNascimento = new Date(nascimento)
        const mesNasc = dataNascimento.getMonth();
        const anoNasc = dataNascimento.getFullYear();
        const diaNasc = dataNascimento.getDay();
       

  
        let idade = ano- anoNasc 

        if ( mes < mesNasc || (mes === mesNasc && dia < diaNasc)) {
            idade--
        }
        

        return idade
    }


    async function Buscar() {
        const url = '/consultasCpf/'+`${buscar}`
        let resp = await api.get(url)

        setConsultasList(resp.data)
    }


    async function renderList(){
        const url = '/'+tipoConsulta
        let resp = await api.get(url)
        
        setConsultasList(resp.data)
    }


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
            <InputMask mask="999.999.999-99" value={buscar} onChange={e => setBuscar(e.target.value)} className='Buscar' type="text" placeholder={`🔎 Consultar pelo CPF`}/>

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
                    id={item.id}
                    email={item.email}
                    metodo_consulta={item.metodo_consulta}
                    condicao={item.condicao}
                    cpf={item.cpf}
                    dia_horario={new Date(item.dia_horario).toLocaleDateString()}
                    horario={new Date(item.dia_horario).toLocaleString('pt-BR', {hour: '2-digit',minute: '2-digit', hour12: false})}
                    medicacao={item.medicacao}
                    nascimento={`Idade atual: ${CalcularIdade(item.nascimento)} anos  |  Data de nascimento: ${new Date(item.nascimento).toLocaleDateString()}`}
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
