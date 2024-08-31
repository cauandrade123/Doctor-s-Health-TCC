import Header from "../../components/header/header";
import './land.scss'
import Medico from "../../assets/img/tcc/tccassests/landpages/aquinorego.svg"
import Retangulo from "../../assets/img/tcc/tccassests/landpages/retangulo_landpagge.svg"
import Wave from "../../assets/img/tcc/tccassests/landpages/wave 4.svg"


export default function Land () {
    return (
        <div className="mae">
          <Header/>
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
          <img src={Wave} alt="" />  
        </div>
    )
}