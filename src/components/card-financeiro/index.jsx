import { useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function CardFinancas () {

    const [dados, setDados] = useState({
        data: '',
        consultas: 12,
        valor: 7532
    })//esses dados serao passados pela api


    function MostrarValores(){
        let url = '' //url da api do financeiro
        let resp = axios.get (url)

        resp.send (dados)




    }

    return (
        <div className="main-financas">
            <div className="card-financas">
                <div className="content-data">
                    <button className="btn-esq">
                    ←
                    </button>
                a

                    <h2>Janeiro - 2024 </h2>

                    <button className="btn-dir">
                    →
                    </button>
                </div>

                <div className="content-dados">
                    <h1>Quantidade de consulta : {dados.consultas}</h1>


                    <h1>Faturamento Bruto: {dados.valor} </h1>
                </div>
            </div>
        </div>
    );
}