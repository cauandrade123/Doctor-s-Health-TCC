import Header from "../../components/header/header";
import './land.scss'
import Medico from "../../assets/img/tcc/tccassests/land pages/aquinorego.svg"
import Wave from "../../assets/img/tcc/tccassests/land pages/wave 4.svg"
import iconSaibaMais from '../../assets/img/tcc/tccassests/simbolos/saiba mais.svg'
import Facebook from '../../assets/img/tcc/tccassests/simbolos/Facebook.svg'
import instagram from '../../assets/img/tcc/tccassests/simbolos/Instagram preto.svg'
import Twitter from '../../assets/img/tcc/tccassests/simbolos/twitter.svg'




export default function Land () {
    return (
        <div className="mae">
          <Header/>
            <div className="Texto-image">
                  <div className="informaçoes-do-doutor">
                        <h1>Dr. João Silva</h1>
                        <h2>clinico geral, feito para solucionar seus problemas.</h2>
                        <div className="A-da-info"> 
                            <a href="a">Agendar 
                              <p>consulta.</p> 
                            </a> 
                        </div>
                  </div>  
                  <div className="img-doutor">
                      <img src={Medico} alt="" />
                  </div>
            </div>
          <img className="wave" src={Wave} alt="" />  
          <section className='secao-2'>
            <div className="main">
                <div className="saibaMais">
                      <div className="iconeEtexto">
                            <img className='iconeSaibaMais' src={iconSaibaMais} alt="" />
                            <h2>Saiba Mais</h2>
                      </div> 
                      <div className="textoSaibaMais">
                          <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consectetur veniam ut reprehenderit in, minima sunt molestias dolorum nihil est at dolorem rerum pariatur delectus necessitatibus autem dignissimos quasi repellat.
                          </p>
                      </div>
                </div>
                <div className="conhecaMe">
                      <div className="textoConhecaMe">
                            <h2>
                                conheca me
                            </h2>
                      </div>
                      <div className="iconesConhecaMe">
                          <img src={Twitter} alt="" />
                          <img src={instagram} alt="" />
                          <img src={Facebook} alt="" />
                      </div> 
                </div>
            </div>
        </section>
        </div>   
    )
}