import Header from "../../components/header/header";
import './index.scss'
import React, { useState } from 'react';
import Agenda from '../../assets/img/tcc/tccassests/simbolos/Icon.svg'
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'


export default function Auto_cadastro(){


    return(
        <div className="main">
            <Header/>

            
            <div className="container-box">


                <div className="container-box-geral">

                        <div className="container-box-inputs">
                            
                            <div className="input-style">
                            <p>Nome</p>
                            <input type="text" placeholder="Digite aqui" />
                            </div>

                            <div className="input-style">
                            <p>Número de telefone</p>
                            <input type="number" placeholder="Digite aqui" />
                            </div>

                            <div className="input-style">
                            <p>Método de pagamento</p>
                            <select>
                                <option value="">Selecione</option>
                                <option value="opcao1">Pix</option>
                                <option value="opcao2">Dinheiro</option>
                                <option value="opcao3">Cartão</option>
                            </select>
                            </div>

                            <div className="input-style">
                            <p>Idade</p>
                            <input type="number" placeholder="Digite aqui" />
                            </div>

                            <div className="input-style">
                            <p>RG</p>
                            <input type="number" placeholder="Digite aqui: " />
                            </div>

                            <div className="input-style">
                            <p>CPF</p>
                            <input type="number" placeholder="Digite aqui: XXX.XXX.XXX-XX" />
                            </div>




                        </div>

                        <div className="container-box-data">

                            <div className="container-box-agenda">
                                <div className="box-cont">
                                        <p>Selecione a data</p>

                                    
                                        <div className="box-h3-img">
                                            <h3>Escolha a sua: <img src={Agenda} alt="" /> </h3> 
                                            
                                        </div>

                                        <hr />

                                        <div className="box-data">
                                            <div className="box-data-input">
                                            <input type="date"  />
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container-box-horario">
                                    <div className="box-cont-horarios">
                                                <p>Selecione o horário</p>


                                                <div className="box-horarios">
                                                    <button>12:00</button>
                                                    <button>13:00</button>
                                                    <button>14:00</button>
                                                    <button>15:00</button>
                                                    <button>16:00</button>
                                                    <button>17:00</button>
                                                    <button>18:00</button>
                                                    <button>19:00</button>
                                                </div>
                                        </div>
                            </div>

                        </div>

                        <div className="container-box-txt-button">
                        
                        <div className="txt-hr">
                            <p>Em caso de cancelamento ou troca de horário entrar em contato por telefone!   </p> 
                            <hr />
                        </div>
                            <button>Enviar</button>


                        </div>
                       
                </div>


            </div>


            <div className="container-box2">
                <h1>Nos Encontre Por Aqui</h1>

                <div className="container-box-cards">
                    <div className="card-box">

                        <img src={Telefone} alt="" />

                        <div className="txt-card">
                            <p>Telefone</p>
                            <p>(11) 98125-6503</p>
                        </div>

                    </div>
                    <div className="card-box">

                        <img src={Email} alt="" />

                        <div className="txt-card">
                            <p>Email</p>
                            <p>drjoaosilva@gmail.com.br</p>
                        </div>

                    </div>
                    <div className="card-box">

                        <img src={LocIcon} alt="" />

                        <div className="txt-card">
                            <p>Endereço</p>
                            <p>Rua Astolfo Vila, 389.</p>
                        </div>

                    </div>


                </div>

                <div className="container-box-local">

                </div>
            </div>



            
        </div>
    )
};