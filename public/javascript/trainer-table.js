$(function () {
    let templateText = $('#tableTemplate').html();

    let tableTemplate = Handlebars.compile(templateText);

    let users = [
        { "Employee Name": "Roy", "E-Mail": "roy@email.com", "ID #": 01 },
        { "Employee Name": "Tre", "E-Mail": "tre@email.com", "ID #": 02 },
        { "Employee Name": "Heather", "E-Mail": "heather@email.com", "ID #": 03 },
        { "Employee Name": "Bob", "E-Mail": "bob@email.com", "ID #": 04 },
        { "Employee Name": "Suzie", "E-Mail": "suzie@email.com", "ID #": 05 },
        { "Employee Name": "Stan", "E-Mail": "stan@email.com", "ID #": 06 },
    ];

    $('#users').html(tableTemplate({ array: users }));
});