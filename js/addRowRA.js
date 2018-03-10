var incidents = [];
var table = document.getElementById("raTable");

function addRowRA() {
    rowNum = $('#raBody > tr').length + 1;
    $('#raBody').append('<tr>' +
        //'<td><input type="text" id="inc_type' + rowNum + '"/></td>' +
        '<td><input type="text" id="ra_name" placeholder="RA Name"' + rowNum + '"/></td>' +
        '<td><input type="text" id="ra_time" placeholder="Time of Arrival"' + rowNum + '"/></td>' +
        '<td><select names="Rating" id="ra_rate" placeholder="Rating"' + rowNum + '" class="dropdown">/td><option value="NO">1</option><option value="MAYBE">2</option><option value="YES">3</option>' +
        '<td><textarea rows="10" cols="90" id="ra_notes" wrap="hard" placeholder="RA Comments"></textarea></td>"'
    );

}