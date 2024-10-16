import Header from "../../components/header/header";
import './index.scss'
import React, { useState, useEffect, useRef} from 'react';
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'
import Mapa from '../../assets/img/tcc/tccassests/simbolos/MapImage.svg'
import Footer from "../../components/footer/footer";
import axios from "axios";
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import Notification from "../../components/aviso/aviso";




export default function Cadastrado(){
    const navigate = useNavigate()


    const verificarCpf = async (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, '');
        if (cpfLimpo.length !== 11 || /^(\d)\1{10}$/.test(cpfLimpo)) {
            return false;
        }

        let soma = 0;
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfLimpo[i]) * (10 - i);
        }
        let primeiroDigito = (soma * 10) % 11;
        if (primeiroDigito === 10) primeiroDigito = 0;

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfLimpo[i]) * (11 - i);
        }
        let segundoDigito = (soma * 10) % 11;
        if (segundoDigito === 10) segundoDigito = 0;

        return cpfLimpo[9] === primeiroDigito && cpfLimpo[10] === segundoDigito;
    };

    const cadastrarConsulta = async (agendaId, pacienteId, pagamento) => {
        const con = {
            "id_agenda": agendaId,
            "tratamento": "",
            "condicao": "",
            "medicao": "",
            "preco": "0",
            "id_paciente": pacienteId,
            "metodo": pagamento
        };

        const url2 = 'http://localhost:5020/consultas';
        const resp2 = await axios.post(url2, con);
        return resp2.data;
    };

    const verificarpaciente = async (cpf) => {
        const url = 'http://localhost:5020/verificar-cpf';
        const response = await axios.post(url, { cpf });
        return response.data;
    };

    const verificarConsulta = async (cpf) => {

        const response = await axios.get(`http://localhost:5020/verificarconsulta/${cpf}`);
        return response.data;
    };

    const cadastrarAgenda = async (data, horario) => {
        const url = 'http://localhost:5020/agenda';
        const info = {
            "dia": data,
            "hora": horario
        };

        const response = await axios.post(url, info);
        return response.data.agendaId;
    };

    const pegarId = async (cpf) => {
       
        const response = await axios.get(`http://localhost:5020/Id-do-paciente/${cpf}`);
        return response.data.id_paciente;
    };

    const[pagamento,setPagamento]= useState();
    const[cpf,setCpf]= useState();
    const[horario,setHorario]= useState();
    const[data,setData]= useState();
    const [horariosOcupados, setHorariosOcupados] = useState([]);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('')

    const obterHorariosOcupados = async (data) => {

        try {
            const response = await axios.post('http://localhost:5020/horarios-ocupados', { data });
            const horarios = response.data.horariosOcupados;

            console.log('Horários recebidos:', horarios);

         

            const horariosOcupados = response.data.horariosOcupados[0].map(item => item.hora.slice(0, 5));
            setHorariosOcupados(horariosOcupados);
        } catch (error) {
            console.error('Erro ao obter horários ocupados:', error);
        }

    };

    const IndetificarData = (e) => {
        const selecionarData = e.target.value;
        setData(selecionarData);
        obterHorariosOcupados(selecionarData);
    };

    const horariosDisponiveis = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

    
    const cadastrarTudo = async ( pagamento, cpf, data, horario) => {

        console.log(pagamento, cpf, data, horario );
        

  
        if ( !pagamento ||  !cpf || !data || !horario) {
            setNotificationMessage('Por favor, preencha todos os campos obrigatórios.');
            setNotificationType('error');
            return;
        }

        const cpfValido = verificarCpf(cpf);
        if (!cpfValido) {
            setNotificationMessage('CPF inválido. Por favor, verifique e tente novamente.');
            setNotificationType('warning');
            return;
        }
    
        try {
            console.log('Verificando se o paciente já está cadastrado...');
            
            const pacienteExistente = await verificarpaciente(cpf);
            
            if (!pacienteExistente.existe) {

                
                setNotificationMessage('O paciente já possui uma consulta em aberto.');
                setNotificationType('info');
                return;
            }
               
            const consultaResponse = await verificarConsulta(cpf);
                
            if (consultaResponse.hasConsulta) {
                    console.log('Consulta já existente:', consultaResponse.consulta);
                    setNotificationMessage('O paciente já possui uma consulta marcada.');
                    setNotificationType('error');
                    return;
            }

         

            console.log('pegando id...');
            const pacienteId = await pegarId(cpf);
            console.log(' ID pego:', pacienteId);
            
            console.log('Cadastrando agenda...');
            const agendaId = await cadastrarAgenda(data, horario);
            console.log('Agenda cadastrada com ID:', agendaId);

            console.log('criando consulta...');
            const criarConsulta = await cadastrarConsulta(agendaId, pacienteId, pagamento);
            console.log('consulta criada...');


            setNotificationMessage('Consulta marcada com sucesso!');
                setNotificationType('success');
                setTimeout(navigate, 1500, "/")

            
            
    
        }   catch (error) {
            console.error('Erro ao cadastrar:', error);
            setNotificationMessage('Erro ao cadastrar. Tente novamente.');
            setNotificationType('error');
        }};



 



        const closeNotification = () => {
            setNotificationMessage('');
        };


    return(
        <div className="main-cadastrado">
            
            <Header/>

            <Notification
                message={notificationMessage}
                onClose={closeNotification}
                duration={3000}
                type={notificationType} 
            />

            <h1 className="h1-title-container-box">Seja bem-vindo(a) novamente!</h1>
            <div className="container-box">

                

                <div className="container-box-geral">

                    <h1 className="h1-title-container-box-inputs">Agende sua consulta.</h1>
                
                        <div className="container-box-inputs">
                            

                            <div className="input-style">
                            <p>CPF</p>
                            <InputMask
                             mask="999.999.999-99" onChange={e => setCpf(e.target.value)} type="text" placeholder="Digite aqui: XXX.XXX.XXX-XX" />
                            </div>
                          
                            <div className="input-style">
                            <p>Selecione a data</p>
                            <input onChange={IndetificarData} type="date"  />
                            </div>

                            <div className="input-style">
                            <p>Horário</p>
                            <select className="horario-select" onChange={e => setHorario(e.target.value)} value={horario}>
                                <option value="">Selecione o horário</option>
                                {horariosDisponiveis.map(h => (
                                    <option
                                        key={h}
                                        value={h}
                                        className={horariosOcupados.includes(h) ? 'horario-ocupado' : 'horario-disponivel'}
                                        disabled={horariosOcupados.includes(h)} 
                                    >
                                        {h}
                                    </option>
                                ))}
                            </select>
                        </div>

                            <div className="input-style">
                            <p>Método de pagamento</p>
                            <select onChange={e=> setPagamento(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="Pix">Pix</option>
                                <option value="Dinheiro">Dinheiro</option>
                                <option value="Cartão">Cartão</option>
                            </select>
                            </div>


                        </div>

                        <div className="container-box-txt-button">
                        
                        <div className="txt-hr">
                            <p>Em caso de cancelamento ou troca de horário entrar em contato por telefone!   </p> 
                            <a href=""><Link to={'/auto_cadastro'}>Se você não possui cadastro, clique aqui.</Link></a>
                        </div>
                        <button className="bt-enviar" onClick={() => cadastrarTudo(pagamento, cpf, data, horario)}>Enviar</button>

                            

                        </div>
                       
                </div>


            </div>


            <div className="container-box2">
                <h1>Nos Encontre Por Aqui</h1>

                <div className="container-box-cards">
                    <div className="card-box-tel">

                        <img src={Telefone} alt="" />

                        <div className="txt-card">
                            <h4>Telefone</h4>
                            <p>(11) 98125-6503</p>
                        </div>

                    </div>
                    <div className="card-box-email">

                        <img className="Emailicon" src={Email} alt="" />

                        <div className="txt-card">
                            <h4>Email</h4>
                            <p>drjoaosilva@gmail.com.br</p>
                        </div>

                    </div>
                    <div className="card-box-loc">

                        <img  src={LocIcon} alt="" />

                        <div className="txt-card">
                            <h4>Endereço</h4>
                            <p>Rua Astolfo Vila, 389.</p>
                        </div>

                    </div>


                </div>

                <div className="container-box-local">

                    <img src={Mapa} alt="" />
                
                </div>
               
            </div>

          <footer> <Footer /></footer> 
        </div>

        
    )
};