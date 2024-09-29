import { Link } from "react-router-dom";
import logo from "../../assets/img/tcc/tccassests/logo/logomedica.svg"
import './adm.scss'
import { useState } from "react";
import Cardadm from "../../components//card-pagina-adm/consultas"
import Seta from '../../assets/img/tcc/tccassests/simbolos/SetaVoltarADM.svg'
import CardAgenda from "../../components/card-agenda";

export default function Adm() {

    const [conteudo, setConteudo] = useState(<Cardadm/>, <CardAgenda />);


    const mostrarOi = () => {
        setConteudo(
               <Cardadm/>
        );
    }
    const mostrarOi2 = () => {
        setConteudo(
               <CardAgenda />
        );
    }
    const mostrarOi3 = () => {
        setConteudo(
               ''
        );
    }

    return (
        <div className="main-adm">
            <div className="menu-adm">
                <div className="logo-e-voltar">
                    <img src={logo} alt="logo" />
                    <Link className="voltar" to='/' ><img src={Seta} alt="" /></Link>
                </div>
                <div className="menu-azul">
                    <div className="opcoes-do-menu">
                        <button onClick={mostrarOi} className="Consultas">Consultas</button>
                        <button onClick={mostrarOi2} className="Agenda">Agenda</button>
                        <button onClick={mostrarOi3} className="Financas">Finanças</button>
                    </div>
                </div>
            </div>


            <div className="consultas">
                {conteudo}
            </div>
        </div>
    );
}
