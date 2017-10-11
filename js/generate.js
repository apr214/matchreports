var fs = require('fs'),
    path = require('path');

const sgMail = require('@sendgrid/mail');


function generate() {

    var doc = new jsPDF('p', 'pt');

    //VAR Defs
    var team1 = document.getElementById("team1").value;
    var team2 = document.getElementById("team2").value;

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

    var ltrrefchecklist = document.getElementById("refchecklist").value;
    var ltrrefrigging = document.getElementById("refrigging").value;
    var ltrrefunderstand = document.getElementById("refunderstand").value;
    var ltrrefcompetent = document.getElementById("refcompetent").value;

    var ltrstachecklist = document.getElementById("stachecklist").value;
    var ltrstarigging = document.getElementById("starigging").value;
    var ltrstaunderstand = document.getElementById("staunderstand").value;
    var ltrstacompetent = document.getElementById("stacompetent").value;

    var numIncidents = document.getElementById("num_incident").value;
    var incType = document.getElementById("inc_type").value;
    var hardware = document.getElementById("hardware").value;
    var software = document.getElementById("software").value;
    var comments = document.getElementById("comments").value;
    var confirm = document.getElementById("confirm").value;
    var link = document.getElementById("link").value;

    var quirks = document.getElementById("quirks").value;
    var improve = document.getElementById("improvements").value;
    var gen_comms = document.getElementById("gen_comments").value;

    //doc.text(team1 + " vs " + team2 + " Match Report", 210, 35);
    doc.setTextColor(20);
    doc.myText(team1 + " vs " + team2 + " Match Report", {
        align: "center"
    }, 0, 30);


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
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        },
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
        }
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
            title: "Communication",
            dataKey: "comm"
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
            "comm": "a) VOR personnel",
            "checklist": ltrchecklist,
            "rigging": ltrrigging,
            "understand": ltrunderstand,
            "helpful": ltrcompetent
        },

        {
            "comm": "b) Referees",
            "checklist": ltrrefchecklist,
            "rigging": ltrrefrigging,
            "understand": ltrrefunderstand,
            "helpful": ltrrefcompetent
        },

        {
            "comm": "c) Stadium Personnel",
            "checklist": ltrstachecklist,
            "rigging": ltrstarigging,
            "understand": ltrstaunderstand,
            "helpful": ltrstacompetent
        },

        ];


    //Match Report Rating  TABLE
    //doc.text("RATINGS DETAILS", 14, 75);
    var links = [];
    var inccolumns = [
        {
            title: "Important Incident Number",
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
            title: "Link",
            dataKey: "link"
        }
        ];

    var incrows = [

        {
            "incNum": numIncidents,
            "type": incType,
            "correct": confirm,
            "description": comments,
            "link": link
        },

        {
            "incNum": "",
            "type": "",
            "correct": "",
            "description": "",
            "link": ""
        },

        {
            "incNum": "",
            "type": "",
            "correct": "",
            "description": "",
            "link": ""
        }

        ];

    doc.autoTable(inccolumns, incrows, {
        //margin: {horizontal:5,top: 20},
        padding: {
            top: 10
        },
        startY: doc.autoTableEndPosY() + 50,
        styles: {
            overflow: 'linebreak'
        },
        columnStyles: {
            link: {
                columnWidth: 140
            },
            description: {
                columnWidth: 150
            }
        },
        drawCell: function (cell, opts) {
            if (opts.column.dataKey == "link") {
                links.push({
                    x: cell.textPos.x,
                    y: cell.textPos.y
                });
            }
        },
        addPageContent: function () {
            for (var i = 0; i < links.length; i++) {
                doc.textWithLink('', links[i].x, links[i].y, {
                    url: link
                });
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