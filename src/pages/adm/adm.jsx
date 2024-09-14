import Pagina from "../../components/pagina-adm/pagina-adm";
import { Link } from "react-router-dom";
import logo from "../../assets/img/tcc/tccassests/logo/logomedica.svg"
import './adm.scss'
import { useState } from "react";
import Cardadm from "../../components//card-pagina-adm/consultas"

export default function Adm() {

    const [conteudo, setConteudo] = useState(null);


    const mostrarOi = () => {
        setConteudo(
               <Cardadm/>
        );
    }

    return (
        <main>
            <div className="menu-adm">
                <div className="logo-e-voltar">
                    <img src={logo} alt="logo" />
                </div>

                <div className="menu-azul">
                    <div className="opcoes-do-menu">
                        <button  className="Agenda">Agenda</button>
                        <button onClick={mostrarOi} className="Consultas">Consultas</button>
                        <button className="Financas">Finanças</button>
                    </div>
                </div>
            </div>


            <div className="consultas">
                {conteudo}
            </div>
        </main>
    );
}
