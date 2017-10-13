var incidents = [];
var table = document.getElementById("matchTable");

function addRow() {
    rowNum = $('#tableBody > tr').length + 1;
    $('#tableBody').append('<tr>' +
        '<td>' + rowNum + '</td>' +
        //'<td><input type="text" id="inc_type' + rowNum + '"/></td>' +
        '<td><select names="type" id="inc_type' + rowNum + '" class="dropdown">/td><option value="RED">RED</option><option value="PENALTY">PENALTY</option><option value="GOAL">GOAL</option><option value="Mistaken Identy">Mistaken Identity</option>' +
        '<td><select names="Confirms" id="confirm' + rowNum + '" class="dropdown">/td><option value="Confirm">Confirm</option><option value="Overrule">Overrule</option>' +
        '<td><input type="text" id="description' + rowNum + '"/></td>' +
        '<td><select names="Training" class="dropdown" id="training' + rowNum + '">/td><option value="NO">NO</option><option value="YES">YES</option>'+
        '<td><input type="text" id="varfeed' + rowNum + '"/></td>' +
        '<td><input type="text" id="rofeed' + rowNum + '"/></td>'
    );

}