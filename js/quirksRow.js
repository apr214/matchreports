var quirks = [];
var table = document.getElementById("quirksTable");

function addQuirk() {
    rowNum = $('#quirksBody > tr').length + 1;
    $('#quirksBody').append('<tr>' +
        //'<td><input type="text" id="inc_type' + rowNum + '"/></td>' +
        '<td><textarea rows="8" cols="75" id="quirk" placeholder="Quirk/Issue"' + rowNum + '"></textarea></td>' +
        '<td><select names="Hardware/Software" id="hardsoft" placeholder="Hardware/Software"' + rowNum + '" class="dropdown">/td><option value="Hardware">Hardware</option><option value="Software">Software</option>' +
        '<td><textarea rows="10" cols="90" id="qnotes" wrap="hard" placeholder="Notes"></textarea></td>"'
    );

}