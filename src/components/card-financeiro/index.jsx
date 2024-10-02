import { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import axios from 'axios';
import Graficos from "../graficos";
import './index.scss'

export default function CardFinancas() {
    const [anos, setAnos] = useState(2024);
    const [faturamento, setFaturamento] = useState(1250);
    const [dados, setDados] = useState([]);

    // Função para consultar os valores na API
    async function MostrarValores() {
        try {
            const url = 'http://localhost:5020/financeiro'; // URL da API
            const resp = await axios.post(url, { ano: anos });

            console.log(resp.data); // Para verificar os dados retornados pela API

            if (resp.data.length > 0) {
                const resultado = resp.data[0];
                setFaturamento(resultado.valor_total || 0); // Atualizando o faturamento
                // Aqui você pode definir os dados para o gráfico, se necessário
            } else {
                setFaturamento(0); // Se não houver dados
            }
        } catch (error) {
            console.error("Erro ao buscar dados financeiros:", error);
        }
    }

    useEffect(() => {
        // Chamar a função de consulta quando o componente for montado ou o ano mudar
        MostrarValores();
    }, [anos]); // Dependência de 'anos' para re-executar quando mudar

    // Função para alterar o ano
    function mudarAno(direcao) {
        setAnos(prev => prev + direcao);
    }

    return (
        <div className="main_financeiro">

        <div className="card_financas">
            <div className="content-cards">
                <h2>Finanças</h2>
                <p>{faturamento}</p>
               
            </div>

            <div className="content-cards">
                    <h2>Melhor mês  </h2>
                    <p>janeiro</p>
                </div>
        </div>
         

         <div className="graficos">
                <Graficos />
            </div>
            
            <div className="content_anos">
                <button onClick={() => mudarAno(-1)}><GoArrowLeft /></button>
                <h1>{anos}</h1>
                <button onClick={() => mudarAno(1)}><GoArrowRight /></button>
            </div>
        </div>
    );
}
