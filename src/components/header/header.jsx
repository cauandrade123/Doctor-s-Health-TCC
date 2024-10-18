import { Link } from 'react-router-dom';
import NewLogo from '../../assets/img/tcc/tccassests/NovoAssets/new-logo/newlogo.svg'
import './header.scss';

export default function Header() {
    return (

        <header>
            <div className="logo">
                <img src={NewLogo} alt="" />
            </div>
            <div className="links">
               <Link to={'/'}><li>Home</li></Link> 
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Doutor</a></li>
            </div>
        </header>


        // <header>
        //     <div className="img-header-logo">
        //         <img src={NewLogo} alt="Logo" />
        //     </div>
        //     <div className="A-do-header">
        //         <Link to={'/'}>Home</Link>
        //         <a href="#secao-servicos">Serviços</a>  {/* Link para a seção de serviços */}
        //         <a href="#secao-2">Doctor</a>     {/* Link para a seção 1 */}
        //         <a href="#secao-feedback">Feedback</a> {/* Altere para a seção correta */}
        //     </div>
        // </header>
    );
}
