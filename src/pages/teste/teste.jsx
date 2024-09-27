import Header from "../../components/header/header";
import Medico from "../../assets/img/tcc/tccassests/land pages/aquinorego.svg"
import Wave from "../../assets/img/tcc/tccassests/land pages/wave-4-removebg.png"
import './teste.scss'

export default function Teste(){
    return(

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
      
)
}