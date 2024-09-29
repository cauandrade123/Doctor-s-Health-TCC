import { useState, useEffect } from 'react';
import './index.scss';
import axios from 'axios';

export default function CardFinancas() {
    const [dados, setDados] = useState({
        data: '',
        consultas: 0, // Inicialmente 0
        valor: 0      // Inicialmente 0
    });

    const [periodo, setPeriodo] = useState({
        mes: 1, // Janeiro por padrão
        ano: 2024 // Ano atual por padrão
    });

    // Função para consultar os valores na API
    async function MostrarValores() {
        try {
            const url = 'http://localhost:5020/financeiro'; // URL da API
            const resp = await axios.post(url, { mes: periodo.mes, ano: periodo.ano });

            console.log(resp.data); // Para verificar os dados retornados pela API

            // Verifique se a resposta contém dados para o mês e ano solicitados
            if (resp.data.length > 0) {
                const resultado = resp.data[0];
                setDados({
                    data: `${resultado.mes} - ${resultado.ano}`,
                    consultas: resultado.total_consultas || 0,
                    valor: resultado.valor_total || 0
                });
            } else {
                // Se não houver dados, você pode definir como zero
                setDados({
                    data: `${periodo.mes} - ${periodo.ano}`,
                    consultas: 0,
                    valor: 0
                });
            }
        } catch (error) {
            console.error("Erro ao buscar dados financeiros:", error);
        }
    }

    useEffect(() => {
        // Chamar a função de consulta quando o componente for montado ou o período for alterado
        MostrarValores();
    }, [periodo]); // Dependência de 'periodo' para re-executar quando mudar

    // Função para alterar o mês (botões de navegação esquerda e direita)
    function mudarMes(direcao) {
        let novoMes = periodo.mes + direcao;

        if (novoMes < 1) {
            novoMes = 12;
            setPeriodo({ mes: novoMes, ano: periodo.ano - 1 });
        } else if (novoMes > 12) {
            novoMes = 1;
            setPeriodo({ mes: novoMes, ano: periodo.ano + 1 });
        } else {
            setPeriodo({ mes: novoMes, ano: periodo.ano });
        }
    }

    return (
        <div className="main-financas">
            <div className="card-financas">
                <div className="content-data">
                    <button className="btn-esq" onClick={() => mudarMes(-1)}>
                        ←
                    </button>
                    <h2>{periodo.mes} - {periodo.ano}</h2>
                    <button className="btn-dir" onClick={() => mudarMes(1)}>
                        →
                    </button>
                </div>

                <div className="content-dados">
                    <h1>Quantidade de consulta: {dados.consultas}</h1>
                    <h1>Faturamento Bruto: R$ {dados.valor}</h1>
                </div>
            </div>
        </div>
    );
}
