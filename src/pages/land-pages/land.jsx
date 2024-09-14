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

export default function Land() {
  return (

    <div className="mae-page">
      <div className="mae">
        <Header />
        <div className="Texto-image">
          <div className="informaçoes-do-doutor">
            <h1>Dr. João Silva</h1>
            <h2>clinico geral, feito para solucionar seus problemas.   </h2>
            <div className="A-da-info"> <a href="a">Agendar <p>consulta.</p> </a> </div>

            <Link to='/adm'>adm</Link>
            
            <Link to='/login'>login</Link>

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
        <section className="secao-servicos">
          <div className="title">
              <h2>Serviços</h2>
          </div>
          
         <Cards/>

         

      </section>
      </div>
    </div>
   
  )
}


