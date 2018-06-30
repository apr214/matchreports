function castAsInt() {

    var sum, ave = 0;
    var elm = new Array();
    
    elm[0] = document.getElementById("comms_var").value;
    elm[1] = document.getElementById("comms_ref").value;
    elm[2] = document.getElementById("comms_ro").value;
    elm[3] = document.getElementById("decision").value;
    elm[4] = document.getElementById("protocol").value;
    

    
    sum = parseInt(elm[0], 10)+parseInt(elm[1],10)+parseInt(elm[2],10)+parseInt(elm[3],10)+parseInt(elm[4],10);
    
    ave = sum / elm.length;
    
    var Average = document.getElementById("a").value = ave;
    
    console.log("Average " + ave);
}
