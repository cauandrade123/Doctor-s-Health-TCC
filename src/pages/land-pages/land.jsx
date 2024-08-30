import Header from "../../components/header/header";
import './land.scss'
export default function Land () {
    return (
        <div className="mae">
          <Header/>

          <div className="informaçoes-do-doutor">
            <h1>Dr. João Silva</h1>

            <h2>clinico geral, feito para solucionar seus problemas.   </h2>


            <div className="A-da-info">   <a href="">Agendar <p>consulta.</p></a></div>
         
         
          </div>
        </div>
    )
}