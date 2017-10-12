var fs = require('fs'),
    path = require('path');

const sgMail = require('@sendgrid/mail');


function generate() {

    var doc = new jsPDF('p', 'pt');
    var links = [];
    //VAR Defs
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

    var acomms_var = document.getElementById("acomms_var").value;
    var acomms_ref = document.getElementById("acomms_ref").value;
    var acomms_ro = document.getElementById("acomms_ro").value;
    var adecision = document.getElementById("adecision").value;
    var aprotocol = document.getElementById("aprotocol").value;
    var anotes = document.getElementById("anotes").value;

    var ltrchecklist = document.getElementById("checklist").value;
    var ltrrigging = document.getElementById("rigging").value;
    var ltrunderstand = document.getElementById("understand").value;
    var ltrcompetent = document.getElementById("competent").value;


    var numIncidents = document.getElementById("num_inc").value;
    var incType = document.getElementById("inc_type").value;
    var description = document.getElementById("description").value;
    var confirm = document.getElementById("confirm").value;
    var training = document.getElementById("training").value;
    var varfeed = document.getElementById("varfeed").value;
    var rofeed = document.getElementById("rofeed").value;

    //    var table = document.getElementById("matchTable");
    //    var tableArr = [];
    //        for (var i = 1; i < table.rows.length; i++) {
    //            tableArr.push({
    //                numIncidents: table.rows[i].cells[0].innerHTML,
    //                incType: table.rows[i].cells[1].innerHTML,
    //                description: table.rows[i].cells[2].innerHTML,
    //                confirm: table.rows[i].cells[3].innerHTML,
    //                training: table.rows[i].cells[4].innerHTML,
    //                varfeed: table.rows[i].cells[5].innerHTML,
    //                rofeed: table.rows[i].cells[6].innerHTML
    //            });
    //        }
    var myTableArray = [];
    $("table#matchTable tr").each(function () {
        var arrayOfThisRow = [];
        var tableData = $(this).find('td');
        if (tableData.length > 0) {
            tableData.each(function () {
                arrayOfThisRow.push($(this).text());
            });
            myTableArray.push(arrayOfThisRow);
        }
    });


    var res = doc.autoTableHtmlToJson(document.getElementById("matchTable"));
    console.log(res);

    var hardware = document.getElementById("hardware").value;
    var software = document.getElementById("software").value;
    var comments = document.getElementById("comments").value;
    var link = document.getElementById("link").value;

    var quirks = document.getElementById("quirks").value;
    var improve = document.getElementById("improvements").value;
    var gen_comms = document.getElementById("gen_comments").value;
    var header = "LTR Ratings";

    //doc.text(team1 + " vs " + team2 + " Match Report", 210, 35);
    doc.myText(team1 + " vs " + team2 + " Match Report", {
        align: "center"
    }, 0, 35);


    doc.setTextColor(0, 0, 255);
    doc.setFontSize(9);
    doc.myText(link, {
        align: "center"
    }, 0, 55);


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
        startY: doc.autoTableEndPosY() + 70,
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
        },
        {
            "position": "AVAR",
            "varrating": acomms_var,
            "rorating": acomms_ro,
            "refrating": acomms_ref,
            "decrating": adecision,
            "prorating": aprotocol,
            "notes": anotes
        },
        ];

    doc.autoTable(ratecolumns, raterows, {
        //margin: {horizontal:5,top: 20},
        padding: {
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
            "checklist": ltrchecklist,
            "rigging": ltrrigging,
            "understand": ltrunderstand,
            "helpful": ltrcompetent
        }
//
//        {
//            "comm": "b) Referees",
//            "checklist": ltrrefchecklist,
//            "rigging": ltrrefrigging,
//            "understand": ltrrefunderstand,
//            "helpful": ltrrefcompetent
//        },
//
//        {
//            "comm": "c) Stadium Personnel",
//            "checklist": ltrstachecklist,
//            "rigging": ltrstarigging,
//            "understand": ltrstaunderstand,
//            "helpful": ltrstacompetent
//        }

        ];

    doc.autoTable(ltrcolumns, ltrrows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak',
        },
        columnStyles: {
            checklist: {
                columnWidth: 90
            }
        }
    });

    //Match Report Rating  TABLE
    //doc.text("RATINGS DETAILS", 14, 75);
    var links = [];


    //        for (var i = 1; i < table.rows.length; i++) {

    //    }
    var inccolumns = [
        {
            title: "Incident Number",
            dataKey: "incNum"
        },
        {
            title: "Incident Type",
            dataKey: "type"
        },
        {
            title: "Correction or Overrule",
            dataKey: "correct"
        },
        {
            title: "Description",
            dataKey: "description"
        },
        {
            title: "Training Clip",
            dataKey: "training"
        },
        {
            title: "VAR Feedback",
            dataKey: "varfeed"
        },
        {
            title: "RO Feedback",
            dataKey: "rofeed"
        }
        ];

    var incrows = [

        {
            "incNum": numIncidents,
            "type": incType,
            "correct": confirm,
            "description": description,
            "training": training,
            "varfeed": varfeed,
            "rofeeed": rofeed
            }

            ];

    doc.autoTable(inccolumns, incrows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        },
        columnStyles: {
            description: {
                columnWidth: 150
            },
            training: {
                columnWidth: 40
            },
            rofeed: {
                columnWidth: 100
            },
            varfeed: {
                columnWidth: 100
            }
        }
    });


    //Quirks Report Rating  TABLE
    //doc.text("RATINGS DETAILS", 14, 75);

    var qicolumns = [
        {
            title: "Quirks",
            dataKey: "quirks"
        }
        ];

    var imcolumns = [
        {
            title: "Improvements Made",
            dataKey: "improvements"
        }];

    var cocolumns = [
        {
            title: "General Comments",
            dataKey: "comms"
        }
        ];

    var qirows = [

        {
            "quirks": quirks,
            "improvements": "",
            "comms": ""
        }
        ];


    var imrows = [

        {
            "quirks": "",
            "improvements": improvements,
            "comms": ""
        }

        ];

    var corows = [

        {
            "quirks": "",
            "improvements": "",
            "comms": gen_comms
        }

        ];

    doc.autoTable(qicolumns, qirows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        }
    });

    doc.autoTable(imcolumns, imrows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 70,
        styles: {
            overflow: 'linebreak'
        }
    });


    doc.autoTable(cocolumns, corows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        theme: 'grid',
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        }
    });


    var header = function (data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        styles: {
            fillColor: "#2fba8e"
        }; //doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
        doc.text(team1 + " vs " + team2 + " Match Report", data.settings.margin.left, 50);
    };

    //      doc.autoTable(res.columns, res.data, options);
    //      doc.autoTable(rate.columns, rate.data, options);
    //      doc.autoTable(match.columns, match.data, options);
    doc.save(date + " " + team1 + " vs " + team2 + '.pdf');

    var pdf = doc.output('blob');
    console.log(pdf)
    var data = new FormData();
    data.append("data", pdf);
    var xhr = new XMLHttpRequest();
    xhr.open('post', '../php/upload.php', true);
    xhr.send(data);

}