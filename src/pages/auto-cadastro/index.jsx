import Header from "../../components/header/header";
import './index.scss'
import React, { useState } from 'react';
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'
import Mapa from '../../assets/img/tcc/tccassests/simbolos/MapImage.svg'
import Footer from "../../components/footer/footer";



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

                            <div className="input-style">
                            <p>Selecione a data</p>
                            <input type="date"  />
                            </div>

                            <div className="input-style">
                            <p>Método de pagamento</p>
                            <select>
                            <option value="">Selecione o horario</option>
                                    <option value="opcao1">12:00</option>
                                    <option value="opcao2">13:00</option>
                                    <option value="opcao4">14:00</option>
                                    <option value="opcao5">15:00</option>
                                    <option value="opcao6">16:00</option>
                                    <option value="opcao7">17:00</option>
                                    <option value="opcao8">18:00</option>
                            </select>
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


<<<<<<< HEAD

=======
>>>>>>> a6d8de7cde123bc7578446d6684b725802e4095f
           
        </div>

        
    )
};