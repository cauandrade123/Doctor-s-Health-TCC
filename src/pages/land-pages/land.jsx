import Header from "../../components/header/header";
import './land.scss'
import Medico from "../../assets/img/tcc/tccassests/land pages/aquinorego.svg"
import Retangulo from "../../assets/img/tcc/tccassests/land pages/retangulo_landpagge.svg"



export default function Land () {
    return (
        <div className="mae">
          <Header/>


      <div className="Texto-image">
        


          <div className="informaçoes-do-doutor">
            <h1>Dr. João Silva</h1>

            <h2>clinico geral, feito para solucionar seus problemas.   </h2>


            <div className="A-da-info">   <a href="">Agendar <p>consulta.</p></a></div>


          
         
         
          </div>

          <div className="img-doutor">
            <img src={Medico} alt="" />
          </div>
          
        </div>
        </div>
    )
}