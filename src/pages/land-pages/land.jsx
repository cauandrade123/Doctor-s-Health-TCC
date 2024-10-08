  import Header from "../../components/header/header";
  import './land.scss'
  import Medico from "../../assets/img/tcc/tccassests/land pages/aquinorego.svg"
  import Wave from "../../assets/img/tcc/tccassests/land pages/wave 4.svg"
  import iconSaibaMais from '../../assets/img/tcc/tccassests/simbolos/saiba mais.svg'
  import Facebook from '../../assets/img/tcc/tccassests/simbolos/Facebook.svg'
  import instagram from '../../assets/img/tcc/tccassests/simbolos/Instagram preto.svg'
  import Twitter from '../../assets/img/tcc/tccassests/simbolos/twitter.svg'
  import { Link } from "react-router-dom";
  import Cards from "../../components/cards";
  import IconRemedio from '../../assets/img/tcc/tccassests/cards/remedio card.svg'
  import { useState } from "react";
  import Footer from "../../components/footer/footer";
  import dinheiro_card from '../../assets/img/tcc/tccassests/cards/dinheiro card.svg'
  import saude_card from '../../assets/img/tcc/tccassests/cards/saude_card.svg'
  import Teste from "../teste/teste";



  export default function Land() {



  let card_conheca = [

    {
      'texto_1': 'Consultório licensiado para medicamento sobre restrição ',
      'img_1': IconRemedio,
      'texto_2': 'Os Melhores preços da região',
      'img_2': dinheiro_card,
      'texto_3': 'Melhor atendimento para sua saúde',
      'img_3': saude_card,

  
    }


  ]



    return (

    <div className="mae-page">

<div className="mae">
        <div className="background">
          <Header />
          <div className="Texto-image">
            <div className="informacoes-do-doutor">
              <div className="texto">

              <h1>Dr. João Silva</h1>
              <h2>Clínico geral, feito para solucionar seus problemas.</h2>
              <div className="A-da-info">
                <a target="_blank" href="/auto_cadastro">
                  Agendar <p>consulta.</p>
                </a>
              </div>
              </div>
            </div>
            <div className="img-doutor">
              <img className="medico" src={Medico} alt="Dr. João Silva" />
            </div>
          </div>
        </div>
        <div className="wave-container">
         <img className="wave" src={Wave} alt="Wave" /> 
        </div>
      </div>
      
          
        
      


          <section id='secao-2'>
              <div className="principal-secao-2">
                  <div className="saibaMais">
                        <div className="iconeEtexto">
                              <img className='iconeSaibaMais' src={iconSaibaMais} alt="" />
                              <h2>Saiba Mais.</h2>
                        </div> 
                        <div className="textoSaibaMais">
                            <p>
                                  Eu sou o Dr. João Silva, clínico geral formado pela Universidade de São Paulo e reconhecido por minhas importantes contribuições à área.
                            </p>
                        </div>
                  </div>
                  <div className="conhecaMe">
                        <div className="textoConhecaMe">
                              <h2>
                                  Conheça-me
                              </h2>
                        </div>
                        <div className="iconesConhecaMe">
                              <div className="twitter">
                                  <img src={Twitter} alt="" />
                                  <p>Twitter</p>
                              </div>  
                              <div className="instagram">
                                  <img src={instagram} alt="" />
                                  <p>Instagram</p>
                              </div>  
                              <div className="facebook">
                                  <img src={Facebook} alt="" />
                                  <p>Facebook</p>
                              </div>
                        </div> 
                  </div>
              </div>
          </section>
          <section id="secao-servicos">
            <div className="title">
                <h2>Serviços</h2>
            </div>
            <div id="slide">
          {card_conheca.map((item,index) => 
              <Cards
                key={index}
                texto_1={item.texto_1}
                img_1={ item.img_1}
                texto_2={ item.texto_2}
                img_2={item.img_2}
                texto_3={item.texto_3}
                img_3={item.img_3}

              
              /> 
            
          )}
          </div>
          

        </section>
            <section id="secao-3">
                  <div> 
                    
                  </div>
            </section>
        <footer>
          <Footer/>
        </footer>
        </div>
    
    
    )
  }







