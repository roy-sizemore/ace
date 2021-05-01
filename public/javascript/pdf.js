const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');

const doc = new PDFDocument({ font: 'Times-Roman', layout: lanscrape });
const stream = doc.pipe(blobStream());

doc.fontSize(35).text('Certificate of Completion', 100, 80);

doc.image('./ace-logo-resized.png', { fit: [100, 100], align: 'center' })
    .text('ACE', 0, 0);

doc
    .text(`Congratulations ${user.name}`, {
        align: 'center',
    })
    .moveDown()
    .text(`Successful completion of the ${training_name} training!`, {
        size: 25,
        align: 'center'
    });

doc.end();
steam.on('finish', function () {
    const url = stream.toBlobURL('application/pdf');
    iframe.src = url;
});

