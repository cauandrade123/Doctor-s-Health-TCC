import { Link } from "react-router-dom";
import logo from "../../assets/img/tcc/tccassests/logo/logomedica.svg"
import './adm.scss'
import { useState, useEffect } from "react";
import Cardadm from "../../components//card-pagina-adm/consultas"
import Seta from '../../assets/img/tcc/tccassests/simbolos/SetaVoltarADM.svg'
import CardAgenda from "../../components/card-agenda";
import CardFinancas from "../../components/card-financeiro";

export default function Adm() {

    const [conteudo, setConteudo] = useState(<Cardadm/>, <CardAgenda />, <CardFinancas/>);


    const mostrarCardAdm = () => {
        setConteudo(
               <Cardadm/>
        );
    }
    const mostrarCardAgenda = () => {
        setConteudo(
               <CardAgenda />
        );
    }
    const mostrarCardfincanca = () => {
        setConteudo(
               <CardFinancas/>
        );
    }

  


 

  const handleLogout = () => {
    localStorage.removeItem('token');

  };

 
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
        document.body.classList.remove('no-scroll');
    };
  }, []);



    return (
        <div className="main-adm">
            <div className="menu-adm">
                <div className="logo-e-voltar">
                    <img className="logo" src={logo} alt="logo" />
                    <Link onClick={handleLogout} className="voltar" to='/' ><img className="seta" src={Seta} alt="" /></Link>
                </div>
                <div className="menu-azul">
                    <div className="opcoes-do-menu">
                        <button onClick={mostrarCardAdm} className="Consultas">Consultas</button>
                        <button onClick={mostrarCardAgenda} className="Agenda">Agenda</button>
                        <button onClick={mostrarCardfincanca} className="Financas">Finanças</button>
                    </div>
                </div>
            </div>


            <div className="consultas">
                {conteudo}
            </div>
        </div>
    );
}
