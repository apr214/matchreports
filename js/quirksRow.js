var quirks = [];
var table = document.getElementById("quirksTable");

function addQuirk() {
    rowNum = $('#quirksBody > tr').length + 1;
    $('#quirksBody').append('<tr>' +
        //'<td><input type="text" id="inc_type' + rowNum + '"/></td>' +
        rowNum + '<td><textarea rows="8" cols="50" id="quirk" placeholder="Quirk/Issue"' + rowNum + '"></textarea></td>' +
        '<td><select names="Hardware/Software" id="hardsoft" placeholder="Hardware/Software"' + rowNum + '" class="dropdown"><option value="Hardware">Hardware</option><option value="Software">Software</option><option value="Audio">Audio</option></select><select name="Location" id="hardsoft" class="dropdown" value="Location?"><option value="TT">Location?</option><option value="VOR">VOR</option><option value="IO">IO</option><option value="VIOR">VOR/IO</option></select> <input type="text" name="Reported By?" placeholder="Reported By?" /></td>' +
        '<td><textarea rows="10" cols="40" id="qnotes" wrap="hard" placeholder="Improvements Made"></textarea></td>"' + '<td><textarea rows="10" cols="40" id="qnotes" wrap="hard" placeholder="Further Action"></textarea></td>"' +'<td><select name="Ticket Closed" id="hardsoft" class="dropdown" value="Location?"><option value="Y">Y</option><option value="N">N</option></select></td>'
    );

}