import axios from 'axios';
import pdfmake from 'pdfmake/build/pdfmake';
import pdffont from 'pdfmake/build/vfs_fonts';




export default function ConsultasPDF({ nome, cpf, tratamento, condicao, medicacao, preco, dia_horario, horario }) {
    pdfmake.vfs = pdffont.pdfMake.vfs;

    const personalizarHeader = {
        text: "Consulta",
        fontSize: 15,
        bold: true,
        margin: [15, 50, 15, 40],
    };

    const detalhes = [
        { text: `nome: ${nome}` },
        { text: `cpf: ${cpf}` },
        { text: `tratamento: ${tratamento}` },
        { text: `Condição: ${condicao}` },
        { text: `medicação: ${medicacao}` },
        { text: `Valor: ${preco}` },
        { text: `Data: ${dia_horario}` },
        { text: `Hora: ${horario}` },



    ]


    function rodape(currentPage, pageCount) {
        return [{
            text: currentPage + '/' + pageCount,
            alignment: 'center',
            fontSize: 15,
            bold: true,
            margin: [15, 50, 15, 40],
        }]

            ;
    }

    const documento = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],
        header: personalizarHeader,
        content: detalhes,
        footer: rodape,
    };

    pdfmake.createPdf(documento).download(`consulta_${nome}.pdf`);
}
