import axios from 'axios';
import pdfmake from 'pdfmake/build/pdfmake';
import pdffont from 'pdfmake/build/vfs_fonts';

export default function ConsultasPDF({ nome, cpf, tratamento, condicao, medicacao, preco, dia_horario, horario }) {
    pdfmake.vfs = pdffont.pdfMake.vfs;

    const personalizarHeader = [{
        text: "Consulta",
        fontSize: 24,
        bold: true,
        alignment: 'center',
        color: '#0B9DEB',
        margin: [0, 0, 0, 20] // Adiciona margem inferior para separar o título
    }];

    const detalhes = [
        { text: `Nome: ${nome}`, fontSize: 12, margin: [0, 5, 0, 5], },
        { text: `CPF: ${cpf}`, fontSize: 12, margin: [0, 5, 0, 5] },
        { text: `Tratamento: ${tratamento}`, fontSize: 12, margin: [0, 5, 0, 5],  },
        { text: `Condição: ${condicao}`, fontSize: 12, margin: [0, 5, 0, 5],  },
        { text: `Medicação: ${medicacao}`, fontSize: 12, margin: [0, 5, 0, 5] },
        { text: `Valor: ${preco}`, fontSize: 12, margin: [0, 5, 0, 5], },
        { text: `Data: ${dia_horario}`, fontSize: 12, margin: [0, 5, 0, 5], alignment: 'right' },
        { text: `Hora: ${horario}`, fontSize: 12, margin: [0, 5, 0, 5], alignment: 'right' },

        {
            canvas: [{ type: 'line', x1: 0, y1: 0, x2: 500, y2: 0, lineWidth: 1, lineColor: '#0B9DEB' }],
            margin: [0, 10, 0, 10]
        }
    ];

    function rodape(currentPage, pageCount) {
        return [{
            text: currentPage + '/' + pageCount,
            alignment: 'center',
            fontSize: 10,
            bold: true,
            margin: [15, 50, 15, 40],
        }];
    }

    const documento = {
        pageSize: 'A4',
        pageMargins: [40, 60, 40, 60], 
        header: personalizarHeader,
        content: detalhes,
        footer: rodape,
    };

    pdfmake.createPdf(documento).download(`consulta_${nome}.pdf`);
}
