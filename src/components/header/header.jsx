import logo from './logomedica.svg'
import './header.scss'

export default function Header() {

    return (
        <header>
            <div className="img-header-logo">
                <img src={logo} alt="" />
            </div>


            <div className="A-do-header">
            <a href="">Home</a>        
            <a href="">Serviços</a>
            <a href="">Doctor</a>
            <a href="">Feedback</a>
            </div>


        </header>

    )

}

//vou arrumar os A quando a land estiver feita