import pdfmake from 'pdfmake/build/pdfmake'
import pdffont from 'pdfmake/build/vfs_fonts'    
    
export default function ConsultasPDF () {
    pdfmake.vfs = pdffont.pdfMake.vfs
    const personalizarHeader = [
        {
            text: "Consulta ",
            fontSize: 15,
            bold: true,
            Margin: [15,50,15,40],

        }
    ]

    const detalhes = [
        {
            Text:"ola"
        }
    ]

    const personalizarFooter = []

    const documento = {
        pagesize: 'A4',
        pageMargin: [15,50,15,40],

        header: [personalizarHeader],
        conteudo: [detalhes],
        footer: [personalizarFooter]
    }

    pdfmake.createPdf(documento).download("consuklt");
}