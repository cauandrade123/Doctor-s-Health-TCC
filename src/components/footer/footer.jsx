import './footer.scss'
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg'
import { Link } from 'react-router-dom'
import insta from '../../assets/img/tcc/tccassests/simbolos/instagram com cor.svg'


export default function Footer() {

    return (

        <div className="container-footer">

            <div className="container-logo-loc">
                <img src={logo} alt="" />
                <div className="loc">
                    <p><strong>Localização</strong></p>
                    <p>Rua Astolfo Vila, 389</p>

                </div>
            </div>

            <div className="container-linha"> <hr /></div>

            <div className="container-infos">

                <p>@2024 Doctor's Health +</p>
                <p>Desenvolvido pelo time <strong>InfoDevs</strong></p>
                <div className="insta1">
                    <img src={insta} alt="" />
                    <p>@DrJoãoSilva_oficial</p>
                </div>

            </div>

            <div className="botao-adm">
                <Link>
                    <div className="botao">
                        <p>Admin</p>
                    </div>
                </Link>
            </div>

        </div>

    )
}