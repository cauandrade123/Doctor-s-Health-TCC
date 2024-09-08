import Header from "../../components/header/header";
import './index.scss'
import React, { useState } from 'react';
import Agenda from '../../assets/img/tcc/tccassests/simbolos/Icon.svg'


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
                            <input type="number" placeholder="Digite aqui" />
                            </div>

                            <div className="input-style">
                            <p>CPF</p>
                            <input type="number" placeholder="Digite aqui" />
                            </div>




                        </div>

                        <div className="container-box-data">

                            <div className="container-box-agenda">
                                <div className="box-cont">
                                        <p>Selecione a data</p>

                                    
                                        <div className="box-h3-img">
                                            <h3>Escolha a sua:</h3> 
                                            <img src={Agenda} alt="" />
                                        </div>

                                        <hr />

                                        <div className="box-data">
                                            <div className="box-data-input">
                                            <input type="date" placeholder="Digite aqui" />
                                            </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container-box-horario">

                            </div>

                        </div>

                        <div className="container-box-txt/button">
                        
                            <p></p> 

                            <button></button>


                        </div>
                       
                </div>


            </div>
        </div>
    )
};