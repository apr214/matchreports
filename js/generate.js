var fs = require('fs'),
    path = require('path');

const sgMail = require('@sendgrid/mail');


function generate() {

    var doc = new jsPDF('p', 'pt');
    var links = [];
    //VAR Defs

    
//    var headerImgData = im"./headerImgData";
//    doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
    
    var status = document.getElementById("status").value;
    var team1 = document.getElementById("team1").value;
    var team2 = document.getElementById("team2").value;

    //for loop to determine how many incidents there are

    var date = document.getElementById("date").value;
    var var_name = document.getElementById("var").value;
    var avar = document.getElementById("avar").value;
    var stadium = document.getElementById("stadium").value;
    var kickoff = document.getElementById("kickoff").value;
    var operator = document.getElementById("operator").value;

    var comms_var = document.getElementById("comms_var").value;
    var comms_ref = document.getElementById("comms_ref").value;
    var comms_ro = document.getElementById("comms_ro").value;
    var decision = document.getElementById("decision").value;
    var protocol = document.getElementById("protocol").value;
    var notes = document.getElementById("notes").value;

//    var acomms_var = document.getElementById("acomms_var").value;
//    var acomms_ref = document.getElementById("acomms_ref").value;
//    var acomms_ro = document.getElementById("acomms_ro").value;
//    var adecision = document.getElementById("adecision").value;
//    var aprotocol = document.getElementById("aprotocol").value;
//    var anotes = document.getElementById("anotes").value;

    var ltrname = document.getElementById("ltrname").value;
    var ltrchecklist = document.getElementById("checklist").value;
    var ltrrigging = document.getElementById("rigging").value;
    var ltrunderstand = document.getElementById("understand").value;
    var ltrcompetent = document.getElementById("competent").value;


    //    var numIncidents = document.getElementById("num_inc").value;
    //    var incType = document.getElementById("inc_type").value;
    //    var description = document.getElementById("description").value;
    //    var confirm = document.getElementById("confirm").value;
    //    var training = document.getElementById("training").value;
    //    var varfeed = document.getElementById("varfeed").value;
    //    var rofeed = document.getElementById("rofeed").value;

    var matches = [];
    var table = document.getElementById("matchTable");



    var hardware = document.getElementById("hardware").value;
    var software = document.getElementById("software").value;
    var comments = document.getElementById("comments").value;
    var link = document.getElementById("link").value;

//    var quirks = document.getElementById("quirks").value;
//    var improve = document.getElementById("improvements").value;
//    var gen_comms = document.getElementById("gen_comments").value;

    //doc.text(team1 + " vs " + team2 + " Match Report", 210, 35);
    doc.myText(team1 + " vs " + team2 + " Match Report", {
        align: "center"
    }, 0, 35);

    doc.setTextColor(0, 0, 255);
    doc.setFontSize(9);
    doc.myText(link, {
        align: "center"
    }, 0, 55);


    if (status == "GREEN") {
        doc.setTextColor(0, 255, 0);
        doc.setFontSize(12);
        doc.myText("GREEN", {
            align: "center"
        }, 20, 75);
    } else if (status == "ORANGE") {
        doc.setTextColor(255, 153, 0);
        doc.setFontSize(12);
        doc.myText("ORANGE", {
            align: "center"
        }, 20, 75);
    } else if (status == "RED") {
        doc.setTextColor(255, 0, 0);
        doc.setFontSize(12);
        doc.myText("RED", {
            align: "center"
        }, 20, 75);
    }

    //TEAM v TEAM TABLE
    var columns = [
        {
            title: "HOME",
            dataKey: "team1"
        },
        {
            title: "vs",
            dataKey: "vs"
        },
        {
            title: "AWAY",
            dataKey: "team2"
        }
        ];

    var rows = [
        {
            "team1": team1,
            "vs": "vs",
            "team2": team2
        }
        ];

    doc.autoTable(columns, rows, {
        startY: doc.autoTableEndPosY() + 90,
        styles: {
            overflow: 'linebreak'
        },
        theme: 'grid',
        columnStyles: {
            team1: {
                columnWidth: 'auto'
            },
            vs: {
                columnWidth: 'auto'
            },
            team2: {
                columnWidth: 'auto'
            }
        }
    });


    //MATCH DETAILS TABLE
    //doc.text("MATCH DETAILS", 14, 55);
    var matcolumns = [
        {
            title: "",
            dataKey: " "
        },
        {
            title: "NAME",
            dataKey: "name"
        }
        ];

    var matrows = [
        {
            " ": "VAR",
            "name": var_name
        },
        {
            " ": "AVAR",
            "name": avar
        },
        {
            " ": "Operator",
            "name": operator
        },
        {
            " ": "Stadium",
            "name": stadium
        },
        {
            " ": "Date",
            "name": date
        },
        {
            " ": "Kickoff Time",
            "name": kickoff
        }
        ];

    doc.autoTable(matcolumns, matrows, {
        //margin: {horizontal:5,top: 20},
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        },
        theme: 'grid'
    });



    //RATINGS  TABLE
    //doc.text("RATINGS DETAILS", 14, 75);

    var ratecolumns = [
        {
            title: "Position",
            dataKey: "position"
        },
        {
            title: "Comms with VAR Team",
            dataKey: "varrating"
        },
        {
            title: "Comms with RO",
            dataKey: "rorating"
        },
        {
            title: "Comms with Ref",
            dataKey: "refrating"
        },
        {
            title: "Decision Making & Speed",
            dataKey: "decrating"
        },
        {
            title: "Protocol Knowledge",
            dataKey: "prorating"
        },
        {
            title: "Notes",
            dataKey: "notes"
        }
        ];

    var raterows = [
        {
            "position": "VAR",
            "varrating": comms_var,
            "rorating": comms_ro,
            "refrating": comms_ref,
            "decrating": decision,
            "prorating": protocol,
            "notes": notes
        }
//        {
//            "position": "AVAR",
//            "varrating": acomms_var,
//            "rorating": acomms_ro,
//            "refrating": acomms_ref,
//            "decrating": adecision,
//            "prorating": aprotocol,
//            "notes": anotes
//        },
        ];

    doc.setTextColor(0, 0, 255);
    doc.setFontSize(9);
    doc.myText(link, {
        align: "center"
    }, 0, 55);

    doc.autoTable(ratecolumns, raterows, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak',
            columnWidth: 'auto'
        },
        columnStyles: {
            notes: {
                columnWidth: 140
            },
            position: {
                columnWidth: 60
            }
        }
    });


    //LTR Rating  TABLE
    //doc.text("RATINGS DETAILS", 14, 75);

    var ltrcolumns = [
        {
            title: "LTR Name",
            dataKey: "ltrname"
        },
        {
            title: "Completing Checklist Timely",
            dataKey: "checklist"
        },
        {
            title: "Rigging & Troubleshooting",
            dataKey: "rigging"
        },
        {
            title: "General Understanding",
         
            dataKey: "understand"
        },
        {
            title: "Helpful & Competent",
            dataKey: "helpful"
        }
        ];

    var ltrrows = [
        {
            "ltrname": ltrname,
            "checklist": ltrchecklist,
            "rigging": ltrrigging,
            "understand": ltrunderstand,
            "helpful": ltrcompetent
        }
        ];

    doc.autoTable(ltrcolumns, ltrrows, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak', columnWidth: 'auto'
        },
        columnStyles: {
            checklist: {
                columnWidth: 90
            }
        }
    });
    
    
    var isscolumns = [
        {
            title: "Hardware Issues",
            dataKey: "hardware"
        },
        {
            title: "Software Issues",
            dataKey: "software"
        },
        {
            title: "Audio Issues",
            dataKey: "audio"
        },
        {
            title: "Comments",
         
            dataKey: "comments"
        }
        ];

    var issrows = [
        {
            "hardware": hardware,
            "software": software,
            "audio": audio,
            "comments": comments
        }];
    
    doc.autoTable(isscolumns, issrows, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak', columnWidth: 'auto'
        },
        columnStyles: {
            hardware: {
                columnWidth: 90
            },
            software: {
                columnWidth: 90
            },
            audio: {
                columnWidth: 90    
            }
        }
    });


    //    Match Report Rating  TABLE
    //    doc.text("RATINGS DETAILS", 14, 75);
    //    
    //        var inccolumns = [
    //            {
    //                title: "Incident Number",
    //                dataKey: "incNum"
    //            },
    //            {
    //                title: "Incident Type",
    //                dataKey: "type"
    //            },
    //            {
    //                title: "Correction or Overrule",
    //                dataKey: "correct"
    //            },
    //            {
    //                title: "Description",
    //                dataKey: "description"
    //            },
    //            {
    //                title: "Training Clip",
    //                dataKey: "training"
    //            },
    //            {
    //                title: "VAR Feedback",
    //                dataKey: "varfeed"
    //            },
    //            {
    //                title: "RO Feedback",
    //                dataKey: "rofeed"
    //            }
    //            ];
    //    
    //        var incrows = [
    //    
    //            {
    //                "incNum": numIncidents,
    //                "type": incType,
    //                "correct": confirm,
    //                "description": description,
    //                "training": training,
    //                "varfeed": varfeed,
    //                "rofeeed": rofeed
    //                }
    //                ]; //Match table stuff //match table


    var matcolumns = ["Inc#", "Type", "O, C, NG, G", "Description", "Training Clip?", "VAR Feedback", "RO Feedback"];
    var matdata = tableToJson($("#tableBody").get(0), columns);
    
    
    var racolumns = ["RA Name", "Ontime?", "Rating", "Notes"];
    var radata = tableToJson($("#raBody").get(0), columns);
    
    var qcolumns = ["Quirk/Issue", "Hardware/Software",  "Improvements Made"];
    var qdata = tableToJson($("#quirksBody").get(0), columns);

    function tableToJson(table, matcolumns) {
        var data = [];
        // go through cells
        for (var i = 0; i < table.rows.length; i++) {
            var tableRow = table.rows[i];
            var input = table.getElementsByTagName('input');
            var rowData = [];
            for (var j = 0; j < tableRow.cells.length; j++) {
                //rowData.push(tableRow.cells[0].innerText);

                if (typeof $(tableRow.cells[j]).children().val() === 'undefined') {
                    rowData.push($(tableRow.cells[j]).text());
                } else {
                    rowData.push($(tableRow.cells[j]).children().val());
                }

            }
            console.log(rowData);
            data.push(rowData);
            //console.log(data);
        }

        return data;
    }

    
    
    doc.autoTable(matcolumns, matdata, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        tableWidth: 'auto',
        styles: {
            overflow: 'linebreak'
        },
        columnStyles: {
            0: {
                columnWidth: 40
            },
            1: {
                columnWidth: 55
            },
            2: {
                columnWidth: 50    
            },
            3: {
                columnWidth: 170
            },
            4: {
                columnWidth: 55
            },
            5: {
                columnWidth: 80
            },
            6: {
                columnWidth: 80
            }
        }
    });

    //RA table
    function tableToJson(table, racolumns) {
        var data = [];
        // go through cells
        for (var i = 0; i < table.rows.length; i++) {
            var tableRow = table.rows[i];
            var input = table.getElementsByTagName('input');
            var rowData = [];
            for (var j = 0; j < tableRow.cells.length; j++) {
                //rowData.push(tableRow.cells[0].innerText);

                if (typeof $(tableRow.cells[j]).children().val() === 'undefined') {
                    rowData.push($(tableRow.cells[j]).text());
                } else {
                    rowData.push($(tableRow.cells[j]).children().val());
                }

            }
            console.log(rowData);
            data.push(rowData);
            //console.log(data);
        }

        return data;
    }

    doc.autoTable(racolumns, radata, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        tableWidth: 'auto',
        styles: {
            overflow: 'linebreak'
        },
        columnStyles: {
//            0: {
//                columnWidth: 40
//            },
//            1: {
//                columnWidth: 55
//            },
//            2: {
//                columnWidth: 50    
//            },
            3: {
                columnWidth: 200
            }
        }
    });
    
    doc.autoTable(qcolumns, qdata, {
        //margin: {horizontal:5,top: 20},
        cellpadding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        tableWidth: 'auto',
        styles: {
            overflow: 'linebreak'
        },
        columnStyles: {
            0: {
                columnWidth: 200
            },
            2: {
                columnWidth: 200
            }
//            2: {
//                columnWidth: 50    
//            }
//            
        }
    });
//    //Quirks Report Rating  TABLE
//    //doc.text("RATINGS DETAILS", 14, 75);
//
//    var qicolumns = [
//        {
//            title: "Quirks",
//            dataKey: "quirks"
//        }
//        ];
//
//    var imcolumns = [
//        {
//            title: "Improvements Made",
//            dataKey: "improvements"
//        }];
//
//    var cocolumns = [
//        {
//            title: "General Comments",
//            dataKey: "comms"
//        }
//        ];
//
//    var qirows = [
//
//        {
//            "quirks": quirks,
//            "improvements": "",
//            "comms": ""
//        }
//        ];
//
//
//    var imrows = [
//
//        {
//            "quirks": "",
//            "improvements": improve,
//            "comms": ""
//        }
//
//        ];
//
//    var corows = [
//
//        {
//            "quirks": "",
//            "improvements": "",
//            "comms": gen_comms
//        }
//
//        ];
//
//    doc.autoTable(qicolumns, qirows, {
//        //margin: {horizontal:5,top: 20},
//        cellpadding: {
//            top: 10
//        },
//        theme: 'grid',
//        startY: doc.autoTableEndPosY() + 50,
//        styles: {
//            overflow: 'linebreak'
//        }
//    });
//
//    doc.autoTable(imcolumns, imrows, {
//        //margin: {horizontal:5,top: 20},
//        cellpadding: {
//            top: 10
//        },
//        theme: 'grid',
//        startY: doc.autoTableEndPosY() + 70,
//        styles: {
//            overflow: 'linebreak'
//        }
//    });
//
//
//    doc.autoTable(cocolumns, corows, {
//        //margin: {horizontal:5,top: 20},
//        cellpadding: {
//            top: 10
//        },
//        theme: 'grid',
//        startY: doc.autoTableEndPosY() + 50,
//        styles: {
//            overflow: 'linebreak'
//        }
//    });


    var header = function (data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        styles: {
            fillColor: "#fc511f"
        }; 
        doc.text(team1 + " vs " + team2 + " Match Report", data.settings.margin.left, 50);
    };


    doc.save(date + " " + team1 + " vs " + team2 + '.pdf');

    var pdf = doc.output('blob');
    //console.log(pdf);
    var data = new FormData();
    data.append("data", pdf);
    var xhr = new XMLHttpRequest();
    //xhr.open('post', 'upload.php', true);
    //xhr.send(data);

}