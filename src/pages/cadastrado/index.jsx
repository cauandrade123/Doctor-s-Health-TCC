import Header from "../../components/header/header";
import './index.scss'
import React, { useState, useEffect, useRef } from 'react';
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'
import Mapa from '../../assets/img/tcc/tccassests/simbolos/MapImage.svg'
import Footer from "../../components/footer/footer";

import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import Notification from "../../components/aviso/aviso";
import Cardconfirmação from '../../components/confirmacao/confirmacao'
import CardNegacação from '../../components/negacao/negacao'
import CardCarregamento from '../../components/carregando/carregando'
import MapComponent from '../../components/MapComponent/index.jsx'
import { api } from "../../servicos/index.js";


export default function Cadastrado() {
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

    const cadastrarConsulta = async (agendaId, pacienteId, consulta) => {
        const con = {
            "id_agenda": agendaId,
            "tratamento": "",
            "condicao": "",
            "medicao": "",
            "preco": "0",
            "id_paciente": pacienteId,
            "metodo": consulta
        };

        const url2 = api+'/consultas';
        const resp2 = await api.post(url2, con);
        return resp2.data;
    };

    const verificarpaciente = async (cpf) => {
        const url = api+'/verificar-cpf';
        const response = await api.post(url, { cpf });
        return response.data;
    };

    const verificarConsulta = async (cpf) => {

        const response = await api.get(api+`/verificarconsulta/${cpf}`);
        return response.data;
    };

    const cadastrarAgenda = async (data, horario) => {
        const url = api+'/agenda';
        const info = {
            "dia": data,
            "hora": horario
        };

        const response = await api.post(url, info);
        return response.data.agendaId;
    };

    const pegarId = async (cpf) => {

        const response = await api.get(api+`/Id-do-paciente/${cpf}`);
        return response.data.id_paciente;
    };

    const FecharConfirmação = () => {
        setConfirmacao(false);
        navigate('/#secao-1');
    };


    const FecharNegação = () => {
        setNegacao(false);
        setTimeout(function () {
            window.location.reload();
        }, 200);
    };

    const [consulta, setConsulta] = useState();
    const [cpf, setCpf] = useState();
    const [horario, setHorario] = useState();
    const [data, setData] = useState();
    const [horariosOcupados, setHorariosOcupados] = useState([]);
    const [mostrarConfirmacao, setConfirmacao] = useState(false);
    const [mostrarNegacao, setNegacao] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [mensagem, setMensagem] = useState('');

    const obterHorariosOcupados = async (data) => {

        try {
            const response = await api.post(api+'/horarios-ocupados', { data });
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


    const cadastrarTudo = async (consulta, cpf, data, horario) => {




        if (!consulta || !cpf || !data || !horario) {
            setMensagem('Por favor, preencha todos os campos obrigatórios.');
            setCarregando(false);
            setNegacao(true)
            return;
        }

        const cpfValido = verificarCpf(cpf);
        if (!cpfValido) {
            setMensagem('CPF inválido. Por favor, verifique e tente novamente.');
            setCarregando(false);
            setNegacao(true)
            return;
        }

        try {
            console.log('Verificando se o paciente já está cadastrado...');

            const pacienteExistente = await verificarpaciente(cpf);

            if (!pacienteExistente.existe) {
                setMensagem('O paciente já possui uma consulta em aberto.');
                setCarregando(false);
                setNegacao(true)
                return;
            }

            const consultaResponse = await verificarConsulta(cpf);

            if (consultaResponse.hasConsulta) {
                console.log('Consulta já existente:', consultaResponse.consulta);
                setMensagem('O paciente já possui uma consulta marcada.');
                setCarregando(false);
                setNegacao(true)
                return;
            }

            const hoje = new Date();
            const dataConsulta = new Date(data);
            if (dataConsulta.setHours(0, 0, 0, 0) < hoje.setHours(0, 0, 0, 0)) {
                setMensagem('A data da consulta não pode ser uma data passada.');
                setCarregando(false);
                setNegacao(true)
                return;
            }



            console.log('pegando id...');
            const pacienteId = await pegarId(cpf);
            console.log(' ID pego:', pacienteId);

            console.log('Cadastrando agenda...');
            const agendaId = await cadastrarAgenda(data, horario);
            console.log('Agenda cadastrada com ID:', agendaId);

            console.log('criando consulta...');
            const criarConsulta = await cadastrarConsulta(agendaId, pacienteId, consulta);
            console.log('consulta criada...');


            setMensagem('Agendamento concluido')
            setCarregando(false);
            setConfirmacao(true);



        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            setMensagem('Erro ao cadastrar. Tente novamente.');
            setCarregando(false);
            setNegacao(true);
        }
    };










    return (
        <div className="main-cadastrado">

            <Header />



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
                            <input onChange={IndetificarData} type="date" />
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
                            <p>Método de consulta</p>
                            <select onChange={e => setConsulta(e.target.value)}>
                                <option value="">Selecione</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>


                    </div>

                    {carregando ? <CardCarregamento mostrar={carregando} /> :
                        <div className="container-box-txt-button">

                            <div className="txt-hr">
                                <p>Em caso de cancelamento ou troca de horário entrar em contato por telefone!   </p>
                                <a><Link to={'/auto_cadastro'}>Se você não possui cadastro, clique aqui.</Link></a>
                            </div>
                            <button className="bt-enviar" onClick={() => cadastrarTudo(consulta, cpf, data, horario)}>Enviar</button>
                            <Cardconfirmação mostrar={mostrarConfirmacao} aoFechar={FecharConfirmação} />
                            <CardNegacação mostrar={mostrarNegacao} aoFechar={FecharNegação} mensagem={mensagem} />

                        </div>
                    }

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

                    <MapComponent />

                </div>

            </div>

            <footer> <Footer /></footer>
        </div>


    )
};