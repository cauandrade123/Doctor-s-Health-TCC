import { Link } from "react-router-dom";
import logo from "../../assets/img/tcc/tccassests/logo/logomedica.svg"
import './pagina-adm.scss'

export default function Pagina () {
    return (
        <div className="pagina-adm">
            <div className="logo-e-voltar">
                <Link className="voltar" to="/">←</Link>
                <img src={logo} alt="logo" />
            </div>


            <div className="menu-azul">
                <div className="opcoes-do-menu">
                    <p>agenda</p>
                    <p>financeiro</p>
                    <p>consultas</p>
                </div>
            </div>
        </div>
    )
}


//vou fazer os botao ter a bolinha na hora da renderização //