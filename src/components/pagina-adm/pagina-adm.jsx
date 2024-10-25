import { Link } from "react-router-dom";
import logo from "../../assets/img/tcc/tccassests/logo/logomedica.svg"
import './pagina-adm.scss'
import { useState } from "react";

export default function Pagina () {


    const [change, setChange ] = useState(false)


    const mudar = () => {
        setChange(true)
    }

    if (change === true) {
        <div className="pagina-adm">
        <div className="logo-e-voltar">
            <Link className="voltar" to="/">←</Link>
            <img src={logo} alt="logo" />
        </div>


        <div className="menu-azul">
            <div className="opcoes-do-menu">
                <button  className="Agenda">viado</button>
                <button className="Consultas">Consultas</button>
                <button className="Financas">Finanças</button>
            </div>
        </div>
    </div>
    }




    return (
        <div className="pagina-adm">
            <div className="logo-e-voltar">
                <Link className="voltar" to="/">←</Link>
                <img src={logo} alt="logo" />
            </div>


            <div className="menu-azul">
                <div className="opcoes-do-menu">
                    <button onClick={mudar} className="Agenda">Agenda</button>
                    <button className="Consultas">Consultas</button>
                    <button className="Financas">Finanças</button>
                </div>
            </div>
        </div>
    )
}


