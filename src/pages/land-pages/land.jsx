import Header from "../../components/header/header";
import './land.scss'
import Medico from "../../assets/img/tcc/tccassests/landpages/aquinorego.svg"

import Wave from "../../assets/img/tcc/tccassests/landpages/wave 4.svg"


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
          </div>
          <div className="img-doutor">
            <img src={Medico} alt="" />
          </div>
        </div>
        <img className="wave" src={Wave} alt="" />


        <div className="saiba-mais">
          <section className='secao-2'>
            <div className="main">
              <div className="saibaMais">
                <div className="iconeEtexto">
                  <img src="" alt="" />
                  <h2>Saiba Mais</h2>
                </div> hhhhh
                <div className="textoSaibaMais">
                  <p>

                  </p>
                </div>
              </div>
              <div className="conhecaMe">
                <div className="textoConhecaMe">

                </div>
                <div className="iconesConhecaMe">
                  <img src="" alt="" />
                  <img src="" alt="" />
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}