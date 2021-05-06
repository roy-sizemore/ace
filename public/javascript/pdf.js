const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
const fs = require('fs');

const doc = new PDFDocument({ font: 'Helvetica', layout: 'landscape' });
// const stream = doc.pipe(blobStream());

doc.pipe(fs.createWriteStream('certificate.pdf'));
// doc.pipe(res);

const user = {
    name: 'Bob'
}

const training_name = 'Java'

doc
    .fontSize(35).text('Certificate of Completion', 100, 80, {
        align: 'center',
    })
    .fillColor('blue')
    .moveDown(3);

// doc
//     .image('/img/ace-logo-resized.png', 320, 15, { fit: [100, 100], align: 'center' }, {
//         align: 'center',
//     })
//     .text('ACE', 0, 0, {
//         align: 'center',
//     });

doc
    .text(`Congratulations ${user.name}!`, {
        align: 'center',
    })
    .moveDown(3)
    .text(`Successful completion of the ${training_name} training!`, {
        size: 25,
        align: 'center'
    });

doc.end();
// stream.on('finish', function () {
//     const blob = stream.toBlob('application/pdf');
//     const url = stream.toBlobURL('application/pdf');
//     iframe.src = url;
// });

