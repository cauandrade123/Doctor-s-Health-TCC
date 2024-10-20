import axios from 'axios';
import pdfmake from 'pdfmake/build/pdfmake';
import pdffont from 'pdfmake/build/vfs_fonts';

export default function AtestadoMedicoPDF({ 
    nome, 
    cpf, 
    tratamento, 
    condicao, 
    medicacao, 
    preco, 
    dia_horario, 
    horario, 
    nome_medico, 
    crm 
}) {
    pdfmake.vfs = pdffont.pdfMake.vfs;

    const personalizarHeader = [
        {
            text: "Instituição de Saúde",
            fontSize: 16,
            bold: true,
            alignment: 'center',
            margin: [0, 10, 0, 5]
        },
        {
            text: "ATESTADO MÉDICO",
            fontSize: 24,
            bold: true,
            alignment: 'center',
            margin: [0, 10, 0, 10],
            decoration: 'underline'
        },
        {
            text: "Endereço da Instituição\nTelefone: (XX) XXXX-XXXX\nCNPJ: 12.345.678/0001-90", // Replace with actual details
            fontSize: 12,
            alignment: 'center',
            margin: [0, 0, 0, 20]
        }
    ];

    const detalhes = [
        { text: `Paciente: ${nome}`, fontSize: 12, margin: [0, 5] },
        { text: `CPF: ${cpf}`, fontSize: 12, margin: [0, 5] },
        { text: `Tratamento: ${tratamento}`, fontSize: 12, margin: [0, 5] },
        { text: `Condição: ${condicao}`, fontSize: 12, margin: [0, 5] },
        { text: `Medicação: ${medicacao}`, fontSize: 12, margin: [0, 5] },
        { text: `Valor: R$ ${preco.toFixed(2)}`, fontSize: 12, margin: [0, 5] },
        { text: `Data: ${dia_horario}`, fontSize: 12, margin: [0, 5], alignment: 'right' },
        { text: `Hora: ${horario}`, fontSize: 12, margin: [0, 5], alignment: 'right' },
        {
            text: 'Este atestado é válido para fins de comprovação da condição de saúde do paciente.',
            fontSize: 12,
            margin: [0, 20, 0, 20],
            italics: true,
            alignment: 'center'
        },
        {
            canvas: [{ 
                type: 'line', 
                x1: 0, 
                y1: 0, 
                x2: 500, 
                y2: 0, 
                lineWidth: 1, 
                lineColor: '#0B9DEB' 
            }],
            margin: [0, 10, 0, 10]
        },
        { text: `Médico: ${nome_medico}`, fontSize: 12, margin: [0, 5] },
        { text: `CRM: ${crm}`, fontSize: 12, margin: [0, 5] },
    ];

    function rodape(currentPage, pageCount) {
        return [{
            text: `Página ${currentPage} de ${pageCount}`,
            alignment: 'center',
            fontSize: 10,
            margin: [0, 10],
        }];
    }

    const documento = {
        pageSize: 'A4',
        pageMargins: [40, 60, 40, 60],
        header: personalizarHeader,
        content: detalhes,
        footer: rodape,
    };

    pdfmake.createPdf(documento).download(`atestado_medico_${nome}.pdf`);
}
