    import './index.scss';
    import { useEffect, useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import Notification from '../aviso/aviso';
    import axios from 'axios';

    import ConsultasPDF from '../gerar-pdf';



    export default function Card_Paciente({id, condicao, cpf, dia_horario, horario, medicacao, nascimento, nome, preco, rg, tratamento, finalizada }) {
        
        const [editarMode, setEditarMode] = useState(false);
        const [sair, setSair] = useState(false);
        const [terminada, setTerminada] = useState(false);
        const [finalizada2, setFinalizada2] = useState(finalizada);
        const [bt, setBotao] = useState('');

        // Estados para os campos editáveis
        const [novoTratamento, setNovoTratamento] = useState('');
        const [novaCondicao, setNovaCondicao] = useState('');
        const [novaMedicacao, setNovaMedicacao] = useState('');
        const [novoPreco, setNovoPreco] = useState('');
        const [novaFinalizada, setNovaFinalizada] = useState(finalizada2);
        const [finalizadaFinal, setfinalizadaFinal] = useState('');

        const [notificationMessage, setNotificationMessage] = useState('');
        const [notificationType, setNotificationType] = useState('');

        const closeNotification = () => {
            setNotificationMessage('');
        };

        const navigate = useNavigate();
    
        const edit = () => {
            setEditarMode(true);
        };


        const salvar = async () => {
            
            try {
                
                const url = `http://localhost:5020/consultas/${id}`;
                const payload = {
                    "tratamento": novoTratamento,
                    "condicao": novaCondicao,
                    "medicacao": novaMedicacao,
                    "preco": novoPreco
                };
            const tal = await axios.put(url, payload);
                setNotificationMessage('Dados atualizados com sucesso!');
                setNotificationType('sucess');
            } catch (error) {
                alert(error)
                setNotificationMessage('Erro ao atualizar os dados!');
                setNotificationType('error');
            }

            setTimeout(function() {
                window.location.reload();
            }, 1000);
            setEditarMode(false);
        };

        const mudar = (e) => {
            const { name, value, type, checked } = e.target;
            if (type === 'checkbox') {
                setNovaFinalizada(checked ? 'sim' : "não");
            } else {
                if (name === 'tratamento') setNovoTratamento(value);
                if (name === 'condicao') setNovaCondicao(value);
                if (name === 'medicacao') setNovaMedicacao(value);
                if (name === 'preco') setNovoPreco(value);
            }
        };

        function setBt() {
            if (finalizada === 'Não') {
                setBotao(<button className='editar' onClick={Finalizar}>Finalizar</button>);
            } else {
                setBotao('');
            }
        }

        async function Finalizar() {
            const url = `http://localhost:5020/finalizarConsulta/${cpf}`;
            await axios.put(url);
            setNotificationMessage('Consulta finalizada com sucesso!');
            setNotificationType('sucess');

            setTimeout(function() {
                window.location.reload();
            }, 1000);
        }

        async function verificarEstadoFinalizada() {
            const url2 = `http://localhost:5020/consultaFinalizar/${cpf}`;
            let resp2 = await axios.get(url2);
            setFinalizada2(resp2.data.finalizada);
        }

        useEffect(() => {
            verificarEstadoFinalizada();
            setBt();
        }, [finalizada2, cpf]);

        return (
            <div className="card1">
                <Notification
                    message={notificationMessage}
                    onClose={closeNotification}
                    duration={4000}
                    type={notificationType}
                />

                <div className="dados-cliente">
                    <h1>Data: {dia_horario} / Horário: {horario}</h1>
                    <hr />
                    <div className="field">
                        <h2>Nome: <p>{nome}</p></h2>
                    </div>
                    <div className="field">
                        <h2>RG: <p>{rg}</p></h2>
                    </div>
                    <div className="field">
                        <h2>Idade: <p>{nascimento}</p></h2>
                    </div>
                    <div className="field">
                        <h2>CPF: <p>{cpf}</p></h2>
                    </div>
                    <div className="field">
                        <h2>Tratamento: {editarMode ? (
                            <input
                                type="text"
                                name="tratamento"
                                value={novoTratamento}
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
                                value={novaCondicao}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{condicao}</p>
                        )}</h2>
                    </div>
                    <div className="field">
                        <h2>Medicação: {editarMode ? (
                            <input
                                type="text"
                                name="medicacao"
                                value={novaMedicacao}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{medicacao}</p>
                        )}</h2>
                    </div>
                    <div className="field">
                        <h2>Preço: {editarMode ? (
                            <input
                                type="number"
                                name="preco"
                                value={novoPreco}
                                onChange={mudar}
                            />
                        ) : (
                            <p>{preco}</p>
                        )}</h2>
                    </div>
                    <div className="field">
                        <h2>Finalizada: 
                            <p>{finalizada}</p>
                        </h2>
                    </div>
                </div>

                <div className="container-buttons">
                    {editarMode ? (
                        <button className="editar" onClick={salvar}>Salvar</button>
                    ) : (
                        <button className="editar" onClick={edit}>Editar</button>
                    )}

<button onClick={() => ConsultasPDF({ 
    nome, 
    cpf, 
    tratamento, 
    condicao, 
    medicacao, 
    preco, 
    dia_horario, 
    horario 
})}>
    Gerar PDF
</button>


                    {bt}
                </div>
            </div>
        );
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

        useEffect(() => {
            verificarEstadoFinalizada();
            setBt();
        }, [finalizada2, cpf]);

   
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

