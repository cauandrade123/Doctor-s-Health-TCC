import Header from "../../components/header/header";
import './index.scss'
import React, { useState, useEffect, useRef} from 'react';
import Telefone from '../../assets/img/tcc/tccassests/simbolos/Phone call.svg'
import Email from '../../assets/img/tcc/tccassests/simbolos/Emailicon.svg'
import LocIcon from '../../assets/img/tcc/tccassests/simbolos/LocIcon.svg'
import Mapa from '../../assets/img/tcc/tccassests/simbolos/MapImage.svg'
import Footer from "../../components/footer/footer";
import axios from "axios";
import Inputmask from "inputmask";
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";




export default function Cadastrado(){

    const[nome,setNome]= useState();
    const[pagamento,setPagamento]= useState();
    const[cpf,setCpf]= useState();
    const[rg,setRg]= useState();
    const[horario,setHorario]= useState();
    const[data,setData]= useState();

    async function criarCadastro(){

      
            const tudo = {

                "nome": nome,
                "rg":rg,
                "cpf": cpf,
                "metodo":pagamento,
                "data":data,
               "horario":horario
                
            }

            const url = 'http://localhost:5020/autocadastro'
            let resp = await axios.post(url, tudo)

            
            alert(resp.data)
        
    };

    



const funcaoCombinada = () => {
    criarCadastro();
    
};
 



    


    return(
        <div className="main-cadastrado">
            
            <Header/>

            <h1 className="h1-title-container-box">Seja bem-vindo(a) novamente!</h1>
            <div className="container-box">

                

                <div className="container-box-geral">

                    <h1 className="h1-title-container-box-inputs">Agende sua consulta.</h1>
                
                        <div className="container-box-inputs">
                            
                            <div className="input-style">
                            <p>Nome</p>
                            <input onChange={e=> setNome(e.target.value)} type="text" placeholder="Digite aqui" />
                            </div>

                            <div className="input-style">
                            <p>CPF</p>
                            <input onChange={e=> setCpf(e.target.value)} type="text" placeholder="Digite aqui: XXX.XXX.XXX-XX" />
                            </div>
                          
                            <div className="input-style">
                            <p>RG</p>
                            <input onChange={e=> setRg(e.target.value)} type="text" placeholder="Digite aqui: " />
                            </div>

                            <div className="input-style">
                            <p>Selecione a data</p>
                            <input onChange={e=> setData(e.target.value)} type="date"  />
                            </div>

                            <div className="input-style">
                            <p>Horário</p>
                            <select onChange={e=> setHorario(e.target.value)}>
                            <option value="">Selecione o horario</option>
                                    <option value="12:00">12:00</option>
                                    <option value="13:00">13:00</option>
                                    <option value="14:00">14:00</option>
                                    <option value="15:00">15:00</option>
                                    <option value="16:00">16:00</option>
                                    <option value="17:00">17:00</option>
                                    <option value="18:00">18:00</option>
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
                            <button className="bt-enviar" onClick={criarCadastro}>Enviar</button>

                            

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

          <footer><Footer /></footer> 
        </div>

        
    )
};