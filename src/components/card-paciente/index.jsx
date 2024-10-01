
import './index1.scss';
import { useState } from 'react';
export default function Card_Paciente({condicao, cpf ,dia_horario, horario, medicacao,nascimento,nome,  preco, rg, tratamento, finalizada}){


    const [editarMode, setEditarMode] = useState(false);
    const [sair, setSair] = useState(false);
    const [terminada, setTerminada] = useState(false)

    
      
     
      
    
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


    
    return(
        <div className="card1">

      

        <div className="dados-cliente">
            <h1>Data: {dia_horario} / Horário: {horario}</h1>
            <hr />
            <div className="field">
                <h2>Nome:      {editarMode ? (
                    <input
                        type="text"
                        name="nome"
                        value={nome}
                        onChange={mudar}
                    />
                ) : (
                    <p>{nome}</p>
                )}</h2>
          
            </div>
            <div className="field">
                <h2>RG:  {editarMode ? (
                    <input
                        type="text"
                        name="rg"
                        value={rg}
                        onChange={mudar}
                    />
                ) : (
                    <h2>{rg}</h2>
                )}</h2>
              
            </div>
            <div className="field">
                <h2>Idade:  {editarMode ? (
                    <input
                        type="text"
                        name="idade"
                        value={nascimento}
                        onChange={mudar}
                    />
                ) : (
                    <p><pre>{nascimento}</pre></p>
                )}</h2>
              
            </div>
            <div className="field">
                <h2>CPF: {editarMode ? (
                    <input
                        type="text"
                        name="cpf"
                        value={cpf}
                        onChange={mudar}
                    />
                ) : (
                    <p>{cpf}</p>
                )}</h2>
               
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
                        type="text"
                        
                        name="Finalizada"
                        value={finalizada}
                        onChange={mudar}
                    />
                ) : (
                    <p>{finalizada}</p>
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
    )
}