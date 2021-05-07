//require modules
const PDFDocument = require('pdfkit');
const fs = require('fs');
//document setup and write to file name
const doc = new PDFDocument({ font: 'Helvetica', layout: 'landscape' });
doc.pipe(fs.createWriteStream('certificate.pdf'));

const user = {
    name: 'Bob'
}

const training_name = 'Java'
//text formatting for certificate section
doc
    .fontSize(35).text('Certificate of Completion', 100, 80, {
        align: 'center',
    })
    .fillColor('blue')
    .moveDown(3);

//image section - not working; seems to be an issue with PDFKit and interlacing; tried multiple potential fixes with no success
// doc
//     .image('img/ace-logo.png', 320, 15, { fit: [100, 100], align: 'center' }, {
//         align: 'center',
//     })
//     .text('ACE', 0, 0, {
//         align: 'center',
//     });

//text formatting section for user and training
doc
    .text(`Congratulations ${user.name}!`, {
        align: 'center',
    })
    .moveDown(3)
    .text(`Successful completion of the ${training_name} training!`, {
        size: 25,
        align: 'center'
    });

//renders files
doc.end();

