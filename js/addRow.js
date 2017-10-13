var incidents = [];
var table = document.getElementById("matchTable");

function addRow() {
    rowNum = $('#tableBody > tr').length + 1;
    $('#tableBody').append('<tr>' +
        '<td>'+ rowNum + '</td>' +
        '<td><input type="text" id="inc_type' + rowNum + '"/></td>' +
        '<td><select names="Confirms" id="confirm' + rowNum + '">/td><option value="Confirm">Confirm</option><option value="Overrule">Overrule</option>' +
        '<td><input type="text" id="description' + rowNum + '"/></td>' +
        '<td><input type="text" id="training' + rowNum + '"/></td>' +
        '<td><input type="text" id="varfeed' + rowNum + '"/></td>' +
        '<td><input type="text" id="rofeed' + rowNum + '"/></td>'
    );

}