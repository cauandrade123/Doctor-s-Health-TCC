import { Link } from 'react-router-dom'
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg'
import './header.scss'

export default function Header() {

    return (
        <header>
            <div className="img-header-logo">
                <img src={logo} alt="" />
            </div>      
            <div className="A-do-header">
                <a href=""> <Link to={'/'}>Home</Link></a>        
                <a href=""><Link to={'/teste'}>servicos</Link></a>
                <a href="">Doctor</a>
                <a href="">Feedback</a>
            </div>
        </header>

    )

}

//vou arrumar os A quando a land estiver feita