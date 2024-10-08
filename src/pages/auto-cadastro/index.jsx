import Header from "../../components/header/header";
import './index.scss'
import React, { useState, useEffect, useRef } from 'react';
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'
import Mapa from '../../assets/img/tcc/tccassests/simbolos/MapImage.svg'
import Footer from "../../components/footer/footer";
import axios from "axios";
import Inputmask from "inputmask";
import { Navigate, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Notification from "../../components/aviso/aviso";
import { Link } from "react-router-dom";





export default function Auto_cadastro() {

    const Navigate = useNavigate()


    const [horariosOcupados, setHorariosOcupados] = useState([]);
    const [nome, setNome] = useState();
    const [telefone, setTelefone] = useState();
    const [pagamento, setPagamento] = useState();
    const [DTnascimento, setNascimento] = useState();
    const [cpf, setCpf] = useState();
    const [rg, setRg] = useState();
    const [horario, setHorario] = useState();
    const [data, setData] = useState();
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('')
    const [agenda, setAgenda] = useState('')
    const [email, setEmail] = useState('')
    const terminada = false


    const resetarCampos = () => {
        setNome('');
        setTelefone('');
        setPagamento('');
        setNascimento('');
        setCpf('');
        setRg('');
        setHorario('');
        setData('');
        setNotificationMessage(''); // Reseta a mensagem de notificação
    };

    const cadastrarAgenda = async (data, horario) => {
        const url = 'http://localhost:5020/agenda';
        const info = {
            "dia": data,
            "hora": horario
        };

        const response = await axios.post(url, info);
        return response.data.agendaId; // Retorna o ID da agenda criada
    };

    const criarAutoCadastro = async (nome, DTnascimento, rg, cpf, pagamento, telefone, agendaId) => {
        const tudo = {
            "nome": nome,
            "nascimento": DTnascimento,
            "rg": rg,
            "cpf": cpf,
            "metodo": pagamento,
            "telefone": telefone,
            "id_agenda": agendaId
        };

        const url = 'http://localhost:5020/autocadastro';
        const resp = await axios.post(url, tudo);
        return resp.data.pacienteId; // Retorna o ID do paciente cadastrado
    };

    const cadastrarConsulta = async (agendaId, pacienteId) => {
        const con = {
            "id_agenda": agendaId,
            "tratamento": "",
            "condicao": "",
            "medicao": "",
            "preco": "0",
            "id_paciente": pacienteId
        };

        const url2 = 'http://localhost:5020/consultas';
        const resp2 = await axios.post(url2, con);
        return resp2.data; // Retorna os dados da consulta criada
    };

    const verificarpaciente = async (cpf) => {
        const url = 'http://localhost:5020/verificar-cpf';
        const response = await axios.post(url, { cpf });
        return response.data;
    };

    const verificarConsulta = async (cpf) => {
        const url = 'http://localhost:5020/verificarConsulta';
        const response = await axios.post(url, { cpf });
        return response.data;
    };

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

    const cadastrarTudo = async (nome, telefone, pagamento, DTnascimento, rg, cpf, data, horario) => {

  
        if (!nome || !telefone || !pagamento || !DTnascimento || !rg || !cpf || !data || !horario) {
            setNotificationMessage('Por favor, preencha todos os campos obrigatórios.');
            setNotificationType('error');
            return;
        }

        const cpfValido = await verificarCpf(cpf);
        if (!cpfValido) {
            setNotificationMessage('CPF inválido. Por favor, verifique e tente novamente.');
            setNotificationType('error');
            return;
        }
    
        try {
            console.log('Verificando se o paciente já está cadastrado...');
    
            const pacienteExistente = await verificarpaciente(cpf);
    
            if (pacienteExistente) {
                console.log('Paciente já cadastrado:', pacienteExistente);
    
         
                setNotificationMessage('O paciente já está cadastrado no sistema.');
                setNotificationType('info');
    
             
                console.log('Verificando se o paciente já possui consulta marcada...');
                const consultaExistente = await verificarConsulta(cpf);
                if (consultaExistente) {
                    console.log('Consulta já existente:', consultaExistente);
                    setNotificationMessage('O paciente já possui uma consulta marcada.');
                    setNotificationType('error');
                    return;
                }
            }
    
            
            console.log('Cadastrando agenda...');
            const agendaId = await cadastrarAgenda(data, horario);
    
            console.log('Agenda cadastrada com ID:', agendaId);
    
            
            const pacienteId = pacienteExistente?.id || await criarAutoCadastro(nome, DTnascimento, rg, cpf, pagamento, telefone, agendaId);
            console.log('Paciente cadastrado com ID:', pacienteId);
    
            console.log('Cadastrando consulta...');
            const consultaData = await cadastrarConsulta(agendaId, pacienteId);
            console.log('Consulta cadastrada:', consultaData);
    
            setNotificationMessage('Consulta marcada com sucesso!');
            setNotificationType('success');
            <Navigate to='/' />
    
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setNotificationMessage('Erro ao cadastrar. Tente novamente.');
            setNotificationType('error');
        }
    };
    

    const closeNotification = () => {
        setNotificationMessage('');
    };


   
  

   
    return (
        <div className="main">



            <Header />

            <Notification
                message={notificationMessage}
                onClose={closeNotification}
                duration={3000}
                type={notificationType} 
            />

            <h1 className="h1-title-container-box">Seja bem-vindo(a), realize seu cadastro!</h1>
            <div className="container-box">

                <div className="container-box-geral">

                    <h1 className="h1-title-container-box-inputs">Agende sua consulta.</h1>

                    <div className="container-box-inputs">

                        <div className="input-style">
                            <p>Nome</p>
                            <input onChange={e => setNome(e.target.value)} type="text" placeholder="Digite aqui" />
                        </div>

                        <div className="input-style">
                            <p>Número de telefone</p>
                            <input type="text" placeholder="Digite aqui" onChange={e => setTelefone(e.target.value)} />
                        </div>

                        <div className="input-style">
                            <p>Método de pagamento</p>
                            <select onChange={e => setPagamento(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="Pix">Pix</option>
                                <option value="Dinheiro">Dinheiro</option>
                                <option value="Cartão">Cartão</option>
                            </select>
                        </div>

                        <div className="input-style">
                            <p>Data de nascimento</p>
                            <input onChange={e => setNascimento(e.target.value)} type="date" placeholder="Digite aqui" />
                        </div>

                        <div className="input-style">
                            <p>RG</p>
                            <input onChange={e => setRg(e.target.value)} type="text" placeholder="Digite aqui: " />
                        </div>

                        <div className="input-style">
                            <p>CPF</p>
                            <input onChange={e => setCpf(e.target.value)} type="text" placeholder="Digite aqui: XXX.XXX.XXX-XX" />
                        </div>

                        <div className="input-style">
                            <p>Selecione a data desejada para a consulta</p>
                            <input onChange={IndetificarData} type="date" />
                        </div>

                        {/* <div className="input-style">
                            <p>Email</p>
                            <input type="text" placeholder="Digite aqui seu email"  />
                        </div> */}

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





                    </div>

                    <div className="container-box-txt-button">

                        <div className="txt-hr">
                            <p>Em caso de cancelamento ou troca de horário entrar em contato por telefone!   </p>

                            <Link to={'/cadastrado'}>Se você já possui cadastro, clique aqui.</Link>
                        </div>

                       {<button onClick={() => cadastrarTudo(nome, telefone, pagamento, DTnascimento, rg, cpf, data, horario, terminada)}>Enviar</button>} 
                       





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

                        <img src={LocIcon} alt="" />

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

            <footer><Footer /></footer>
        </div>


    )
};