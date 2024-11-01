import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import axios from 'axios';
import Graficos from "../graficos";
import './index.scss';
import { api } from "../../servicos";

export default function CardFinancas() {
    const [anos, setAnos] = useState(2024);
    const [dados, setDados] = useState(Array(12).fill(0)); 
    const [melhormes, setMelhormes] = useState(''); 

    useEffect(() => {
        async function MostrarValores() {
            const { data } = await api.get(`/puxarfinanceiro/${anos}`);
            const faturamentoMensal = Array(12).fill(0);

   
            data.forEach(item => {
                faturamentoMensal[item.mes - 1] += item.valor_arrecadado; 
            });

            setDados(faturamentoMensal);

         
            const maiorFaturamento = Math.max(...faturamentoMensal);
            const MelhorMes = faturamentoMensal.indexOf(maiorFaturamento);

         
            const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


         

            if (maiorFaturamento > 0) {
                setMelhormes(meses[MelhorMes])
            } else {
                setMelhormes("não teve")
            }


        }

        MostrarValores();
    }, [anos]);

    return (
        <div className="main_financeiro">
            <div className="card_financas">
                <div className="content-cards">
                    <h2>Finanças</h2>
             
                    <p>{dados.reduce((acc, curr) => acc + curr, 0)}</p>
                </div>

                <div className="content-cards">
                    <h2>Melhor mês</h2>
                
                    <p>{melhormes}</p>
                </div>
            </div>

            <div className="graficos">
                <Graficos dadosAPI={dados} />
            </div>

            <div className="content_anos">
                <button onClick={() => setAnos(prev => prev - 1)}><GoArrowLeft /></button>
                <h1>{anos}</h1>
                <button onClick={() => setAnos(prev => prev + 1)}><GoArrowRight /></button>
            </div>
        </div>
    );
}
