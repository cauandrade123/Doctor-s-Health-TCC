import './index.scss';
import { useState } from 'react';

export default function Cards({ texto_1, texto_2, texto_3, img_1, img_2,img_3 }) {
    const [posicao, setPosicao] = useState(0);

    const passar = () => {
        setPosicao((prev) => (prev + 1) % 3); 
    };

    const voltar = () => {
        setPosicao((prev) => (prev === 0 ? 2 : prev - 1));
    };

    return (
        <div className="container">
            <div className="box-pequena">
                <div className="title">
                    <h4>Doctor's Health + </h4>
                </div>
                <div className="content">
                    <h1>O <span style={{color: 'rgba(1, 146, 219, 1)'}}>melhor</span> serviço à oferecer.</h1>
                </div>
            </div>
            <div className="box-grande">
                <div className="content-da-grande">
                    {/* Controla qual slide está visível com base na posição */}
                    {posicao === 0 && (
                        <div className="slide">
                              <img src={img_1} alt="Slide 1" />
                            <h2>{texto_1}</h2>
                          
                        </div>
                    )}
                    {posicao === 1 && (
                        <div className="slide">
                                       <img src={img_2} alt="Slide 2" />
                            <h2>{texto_2}</h2>
                 
                        </div>
                    )}
                    {posicao === 2 && (
                        <div className="slide">
                               <img className='img_saude' src={img_3} alt="Slide 3" />
                            <h2>{texto_3}</h2>
                         
                        </div>
                    )}
                </div>

                {/* Botões de navegação */}
                <button className="btn-esquerda" onClick={voltar}>
                    ← {/* Seta para voltar */}
                </button>
                <button className="btn-direita" onClick={passar}>
                    → {/* Seta para avançar */}
                </button>
            </div>
        </div>
    );
}
