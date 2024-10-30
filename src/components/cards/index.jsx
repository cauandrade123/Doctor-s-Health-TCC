import { animateScroll } from 'react-scroll';
import './index.scss';
import { useState , useEffect, useRef } from 'react';
import { scrollMore } from 'react-scroll/modules/mixins/animate-scroll';


export default function Cards({ texto_1, texto_2, texto_3, img_1, img_2,img_3 }) {


    const [posicao, setPosicao] = useState(0);


    const passar = () => {
        setPosicao((prev) => (prev + 1) % 3); 
        
    };

    const voltar = () => {
        setPosicao((prev) => (prev === 0 ? 2 : prev - 1));
    };

    useEffect(() => {
        
        const slideInterval = setInterval(passar, 4000); 
    
        return () => clearInterval('scroll', slideInterval); 
      }, []);


    return (

   <div className="mae-card">   
        <div className="container">
            <div className="box-pequena">
                <div className="title">
                    <h4>Doctor's Health + </h4>
                </div>
                <div className="content">
                    <h1>O <span style={{color: 'rgba(99, 199, 252, 1)'}}>melhor</span> serviço à oferecer.</h1>
                </div>  
            </div>
            <div className="box-grande">
                <div className="content-da-grande">
                   
                    {posicao === 0 && (
                        <div className="slide">
                              <img src={img_1} alt="Slide 1" />
                            <div className="textoSlide">
                                <h2>{texto_1}</h2>
                            </div> 
                        </div>
                    )}
                    {posicao === 1 && (
                        <div className="slide">
                                <img src={img_2} alt="Slide 2" />
                                <div className="textoSlide">
                                    <h2>{texto_2}</h2>
                                </div>    
                        </div>
                    )}
                    {posicao === 2 && (
                        <div className="slide">
                               <img src={img_3} alt="Slide 3" />
                               <div className="textoSlide">
                                    <h2>{texto_3}</h2>
                               </div>  
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>      
     
    );
}
