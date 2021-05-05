const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
const fs = require('fs');

const doc = new PDFDocument({ font: 'Times-Roman', layout: 'landscape' });
// const stream = doc.pipe(blobStream());
doc.pipe(fs.createWriteStream('certificate.pdf'));

const user = {
    name: 'Bob'
}

const training_name = 'Java'

doc.fontSize(35).text('Certificate of Completion', 100, 80);

// doc.image('../img/ace-logo-resized.png', { fit: [100, 100], align: 'center' })
//     .text('ACE', 0, 0);

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
// stream.on('finish', function () {
//     const url = stream.toBlobURL('application/pdf');
//     return iframe.src = url;
// });

