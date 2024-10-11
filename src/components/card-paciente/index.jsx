
import './index.scss';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Card_Paciente({condicao, cpf ,dia_horario, horario, medicacao,nascimento,nome,  preco, rg, tratamento, finalizada}){


    const [editarMode, setEditarMode] = useState(false);
    const [sair, setSair] = useState(false);
    const [terminada, setTerminada] = useState(false)
    const [finalizada2, setFinalizada2] = useState(finalizada)
    const [bt, setBotao] = useState('')
  
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
       
    };


    {/* Função para setar o botão de finalizar, se FINALZIADA for == 'Não', ele seta com valor button, se não deixa do mesmo jeito */}
    function setBt() {
        
        if(finalizada == 'Não'){
        setBotao(<button className='editar' onClick={Finalizar} >Finalizar?</button>)
        } 
        else {
        setBotao('')
        }

    }




   async function Finalizar() {
    const url = 'http://localhost:5020/finalizarConsulta/'+cpf 
    let  resp = await axios.put(url)

    }

    async function verificarEstadoFinalizada() {
        const url2 = 'http://localhost:5020/consultaFinalizar/'+cpf
        let resp2 = await axios.get(url2)

        
        setFinalizada2(resp2.data.finalizada)
    }

    useEffect( () => {
        verificarEstadoFinalizada()
        setBt()
    }, [finalizada2,cpf])


   
    return(
        <div className="card1">

      

        <div className="dados-cliente">
            <h1>Data: {dia_horario} / Horário: {horario}</h1>
            <hr />
            <div className="field">
                <h2>Nome:      
                    <p>{nome}</p>
                </h2>
          
            </div>
            <div className="field">
                <h2>RG:  
                    <h2>{rg}</h2>
                </h2>
              
            </div>
            <div className="field">
                <h2>Idade:   <p><pre>{nascimento}</pre></p>
                </h2>
              
            </div>
            <div className="field">
                <h2>CPF: 
                    <p>{cpf}</p>
                </h2>
               
            </div>
            <div className="field">
                <h2>Tratamento:{editarMode ? (
                    <input
                        type="text"
                        name="tratamento"
                        value={tratamento}
                        onChange={mudar}
                    />
                ) : (
                    <p>{tratamento}</p>
                )}</h2>
                
            </div>
            <div className="field">
                <h2>Condição: {editarMode ? (
                    <input
                        type="text"
                        name="condicao"
                        value={condicao}
                        onChange={mudar}
                    />
                ) : (
                    <p>{condicao}</p>
                )}</h2>
               
            </div>
            <div className="field">
                <h2>Medicação:{editarMode ? (
                    <input
                        type="text"
                        name="medicacao"
                        value={medicacao}
                        onChange={mudar}
                    />
                ) : (
                    <p>{medicacao}</p>
                )}</h2>
                
            </div>
            <div className="field">
                <h2>Preço:{editarMode ? (
                    <input
                        type="text"
                        name="preco"
                        value={preco}
                        onChange={mudar}
                    />
                ) : (
                    <p>{preco}</p>
                )}</h2>
                
            </div>
                
            <div className="field">
                <h2>Finalizada:{editarMode ? (
                    <input
                        type="checkbox"
                        
                        name="Finalizada"
                        value={finalizada}
                        onChange={mudar}
                    /> 
                ) : (     
                    <p>{finalizada}</p>
                )}</h2>
                
            </div>
           
        </div>

        <div className="container-buttons">

                {editarMode ? (
                    <button className="editar" onClick={salvar}>
                        Salvar
                    </button>
                ) : (
                    <button className="editar" onClick={edit}>
                        Editar
                    </button>
                )}

                {bt}
             
                
        </div>
    </div>
    )
}
