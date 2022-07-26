/* eslint-disable no-unused-vars */
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function ProductsReport(products) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  const dados = products.map((product) => {
    return [
      { text: product.id, fontSize: 9 },
      { text: product.description, fontSize: 9 },
      { text: product.price, fontSize: 9 },
      { text: product.unity, fontSize: 9 },
      { text: product.quantity, fontSize: 9 },
      { text: product.brand, fontSize: 9 },
      { text: product.locality, fontSize: 9 },
      { text: product.active, fontSize: 9 },
    ]
  })

  const data = new Date();
  let dataFormatada = ((data.getDate())) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

  const reportTitle = [
    {
      columns: [
        { text: 'Relatório de Produtos', style: 'headerStyle' },
        { text: `Data: ${dataFormatada}`, style: 'dateStyle' }
      ]
    }
  ];

  const details = [
    {
      table: {
        headerRows: 1,
        widths: [20, '*', 40, 20, 25, 45, 60, 30],
        body: [
          [
            { text: 'ID', style: 'tableHeader' },
            { text: 'Desc.', style: 'tableHeader' },
            { text: 'R$', style: 'tableHeader' },
            { text: 'Uni.', style: 'tableHeader' },
            { text: 'Qnt.', style: 'tableHeader' },
            { text: 'Marca', style: 'tableHeader' },
            { text: 'Local.', style: 'tableHeader' },
            { text: 'Ativo?', style: 'tableHeader' },
          ],
          ...dados
        ]
      },
      layout: 'headerLineOnly'
    }
  ];

  const footer = (currentPage, pageCount) => {
    return [
      {
        text: currentPage + ' / ' + pageCount,
        style: 'footerStyle',
      }
    ]
  };

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: footer,
    styles: {
      headerStyle: {
        fontSize: 15,
        bold: true,
        margin: [15, 20, 15, 0]
      },
      dateStyle: {
        fontSize: 15,
        bold: true,
        margin: [15, 20, 15, 0],
        alignment: 'right'
      },
      footerStyle: {
        fontSize: 9,
        alignment: 'right',
        margin: [0, 10, 20, 0]
      },
      tableHeader: {
        fontSize: 10,
        margin: [0, 20, 0, 0]
      }
    }
  };

  pdfMake.createPdf(docDefinitions).open();
}

export default ProductsReport;