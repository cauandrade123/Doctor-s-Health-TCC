
import NewLogo from '../../assets/img/tcc/tccassests/NovoAssets/new-logo/newlogo.svg'
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './header.scss';
import { Colors } from 'chart.js';

export default function Header() {
    return (

        <header>
            <div className="logo">
                <img src={NewLogo} alt="" />
            </div>
            <div className="links">
               <RouterLink to={'/'}><li>Home</li></RouterLink> 
                <ScrollLink to='Sobrenos' smooth={true} duration={500}><li>Sobre Nós</li></ScrollLink>
                <ScrollLink to='Serviços' smooth={true} duration={500}><li>Como Trabalhamos</li></ScrollLink>
                <ScrollLink to='ComoTrabalhamos' smooth={true} duration={500}><li>Serviços</li></ScrollLink>
            </div>
        </header>

    );
}
