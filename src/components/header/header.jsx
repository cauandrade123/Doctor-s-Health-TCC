import { Link } from 'react-router-dom';
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg';
import './header.scss';

export default function Header() {
    return (
        <header>
            <div className="img-header-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="A-do-header">
                <Link to={'/'}>Home</Link>
                <a href="#secao-servicos">Serviços</a>  {/* Link para a seção de serviços */}
                <a href="#secao-2">Doctor</a>     {/* Link para a seção 1 */}
                <a href="#secao-feedback">Feedback</a> {/* Altere para a seção correta */}
            </div>
        </header>
    );
}
