import { Link } from "react-router-dom";
import './login.scss';
import Loginimg from '../../assets/img/tcc/tccassests/paginas/Login.svg';
import logo from '../../assets/img/tcc/tccassests/logo/logomedica.svg'
import { useState } from "react";


export default function Login() {

    const [senha, setSenha] = useState(false)

    const mostrar = () => setSenha(!senha)

    return (
        <div className="login-page">
            <main> {/*onde ta o background*/}

           
                    <div className="borda-azul">  {/*metade azul do site, armazena os input e botao*/}
                        <div className="opcoes">  {/*armazena os input*/}
                            <h1>Login</h1>
                            <h4>Digite seu email</h4>
                            <input type="email" />

                            <h4>Digite sua senha</h4>
                            <input type={senha ? "text" : "password"} />
                            <button onClick={mostrar}>mostrar senha</button>

                            <Link className="entrar" to='/login'>Entrar</Link>

                            <div className="voltar-all">  {/*armazena o texto e botão para voltar a pagina inicial*/}

                                <h3>Voltar para a página inicial?</h3>
                                
                            <Link className="voltar" to='/'>Voltar</Link>
                            </div>
                        </div>

                        
                        <img className="logo" src={logo} alt="" />
                     
                    </div>

                   
            </main>
        </div>
    );
}
