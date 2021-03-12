var equipmentReference = 
{
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-UNK,TACAN-N":"/W",
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/Z",
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/L",
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N":"/X",
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N":"/T",
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-N,TACAN-N":"/U",
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/D",
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/B",
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/A",
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/M",
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/N",
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/P",
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/M", // DME-N TACN-Y
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/N", // DME-N TACN-Y
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/P", // DME-N TACN-Y
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/Y",
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/C",
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/I",
    "RVSM-N,XPDR-N,MODEC-N,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/V",
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/S",
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/G"
}

function Quiz(questions) {
    this.answerString = "";
    this.questions = questions;
    this.questionIndex = 0;
    this.equipmentTypeValues = 
    {
        "RVSM":"RVSM-UNK",
	    "XPDR":"XPDR-UNK",
	    "MODEC":"MODEC-UNK",
	    "GNSS":"GNSS-UNK",
	    "RNAV":"RNAV-UNK",
	    "DME":"DME-UNK",
	    "TACAN":"TACAN-N"
    }
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function() {
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    if((quiz.answerString == "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N" 
            || quiz.answerString == "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N" 
            || quiz.answerString == "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-Y,TACAN-N" 
            || quiz.answerString == "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N"
            || quiz.answerString == "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N"
            || quiz.answerString == "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-N,TACAN-N")
            && quiz.questionIndex <= 6)
    {
        quiz.equipmentTypeValues.TACAN = "TACAN-UNK";
        quiz.compileEquipment();
    }

    if((equipmentReference[quiz.answerString] === undefined) === false)
    {
        return true;
    }
    else
    {
        return this.questionIndex >= this.questions.length;
    }
}

Quiz.prototype.compileEquipment = function()
{
    output = "";
    output += quiz.equipmentTypeValues.RVSM + ",";
    output += quiz.equipmentTypeValues.XPDR + ",";
    output += quiz.equipmentTypeValues.MODEC + ",";
    output += quiz.equipmentTypeValues.GNSS + ",";
    output += quiz.equipmentTypeValues.RNAV + ",";
    output += quiz.equipmentTypeValues.DME + ",";
    output += quiz.equipmentTypeValues.TACAN;
    quiz.answerString = output;
}
 
 
function Question(shortQ, text, choices, techExplanation, simpleExplanation, whatIsQuestion, notes) {
    this.shortQ = shortQ
    this.text = text;
    this.choices = choices;
    this.technicalExplanation = techExplanation;
    this.simpleExplanation = simpleExplanation;
    this.whatIsQuestion = whatIsQuestion;
    this.notes = notes;
}

function showPopup()
{
    var popup = document.getElementById("codeExplanationPopup");
    popup.classList.toggle("show");
}

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        if(quiz.questionIndex == 5 && quiz.equipmentTypeValues.DME != "DME-UNK")
        {
            quiz.questionIndex++;
        }
        else if(quiz.questionIndex == 6 && (quiz.equipmentTypeValues.GNSS != "GNSS-N" || quiz.equipmentTypeValues.RNAV != "RNAV-N"))
        {
            quiz.questionIndex++;
        }

        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var element1 = document.getElementById("whatIs");
        element1.innerHTML = quiz.getQuestionIndex().whatIsQuestion;

        displayTechInfo("btnTechInfo");
        displaySimpleInfo("btnSimpInfo")
        displayNotes("notes")
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};

function displayNotes(id)
{
    if(quiz.getQuestionIndex().notes != undefined)
    {
        var element = document.getElementById(id)
        element.innerHTML = "NOTES: <br />" + quiz.getQuestionIndex().notes;
    }else
    {
        var element = document.getElementById(id)
        element.innerHTML = "";
    }
}

function displayTechInfo(id)
{
    var button = document.getElementById(id)
    button.onclick = function()
    {
        document.getElementById("simpleExplination").innerHTML = "";
        var element = document.getElementById("techExplination");
        element.innerHTML = quiz.getQuestionIndex().technicalExplanation;
    }
}

function displaySimpleInfo(id)
{
    var button = document.getElementById(id)
    button.onclick = function()
    {
        document.getElementById("techExplination").innerHTML = "";
        var element = document.getElementById("simpleExplination");
        element.innerHTML = quiz.getQuestionIndex().simpleExplanation;
    }
}
 
function guess(id, guess) {
    document.getElementById("techExplination").innerHTML = "";
    document.getElementById("simpleExplination").innerHTML = "";

    var button = document.getElementById(id);
    button.onclick = function() {
        if(guess == "Yes")
        {
            if(quiz.questionIndex == 0)
            {
                // Do you have Transponder?
                quiz.equipmentTypeValues.XPDR = "XPDR-Y";
            }
            if(quiz.questionIndex == 1)
            {
                // Do you have Mode-C Transponder? 
                quiz.equipmentTypeValues.MODEC = "MODEC-Y";
            }
            if(quiz.questionIndex == 2)
            {
                // Do you have the ability to navigate via Global Navigation satellite System (GNSS)?
                quiz.equipmentTypeValues.GNSS = "GNSS-Y";
                quiz.equipmentTypeValues.RNAV = "RNAV-Y";
                quiz.equipmentTypeValues.DME = "DME-Y";
                quiz.questionIndex++;
            }
            if(quiz.questionIndex == 3)
            {
                // Do you have the ability to navigate via RNAV?
                quiz.equipmentTypeValues.RNAV = "RNAV-Y";
                quiz.equipmentTypeValues.DME = "DME-Y";
            }
            if(quiz.questionIndex == 4)
            {
                // Is your aircraft authorized for RVSM flight?
                quiz.equipmentTypeValues.RVSM = "RVSM-Y";
            }
            if(quiz.questionIndex == 5)
            {
                //Do you have a have DME capability?
                quiz.equipmentTypeValues.DME = "DME-Y";
                //quiz.equipmentTypeValues.TACAN = "TACAN-N";
            }
            if(quiz.questionIndex == 6)
            {
                // Do you have the ability to navigate via TACAN?
                quiz.equipmentTypeValues.TACAN = "TACAN-Y";
            }
        }
        else 
        {
            if(quiz.questionIndex == 0)
            {
                // Do you have Transponder?
                quiz.equipmentTypeValues.XPDR = "XPDR-N";
                quiz.equipmentTypeValues.MODEC = "MODEC-N";
                quiz.questionIndex ++;
            }
            if(quiz.questionIndex == 1)
            {
                // Do you have Mode-C Transponder? 
                quiz.equipmentTypeValues.MODEC = "MODEC-N";
            }
            if(quiz.questionIndex == 2)
            {
                // Do you have the ability to navigate via Global Navigation satellite System (GNSS)?
                quiz.equipmentTypeValues.GNSS = "GNSS-N";
            }
            if(quiz.questionIndex == 3)
            {
                // Do you have the ability to navigate via RNAV?
                quiz.equipmentTypeValues.RNAV = "RNAV-N";
            }
            if(quiz.questionIndex == 4)
            {
                // Is your aircraft authorized for RVSM flight?
                quiz.equipmentTypeValues.RVSM = "RVSM-N";
            }
            if(quiz.questionIndex == 5)
            {
                // Do you have a have DME capability?
                quiz.equipmentTypeValues.DME = "DME-N";
                //quiz.equipmentTypeValues.TACAN = "TACAN-N";
            }
            if(quiz.questionIndex == 6)
            {
                // Do you have the ability to navigate via TACAN?
                quiz.equipmentTypeValues.TACAN = "TACAN-N";
            }
        }
        quiz.guess();
        quiz.compileEquipment()
        populate();
    }
};
 
function showScores() {
    var gameOverHTML = "";
    var equipmentCode = "";
    equipmentCode = equipmentReference[quiz.answerString];
    
    if(equipmentCode == undefined)
    {
        // It appears you have entered an impossible combination of equipment capabilities or a combination that the FAA does not account for. Speak to a controller about your equipment suffix code.
        gameOverHTML += "<h2>It appears you have entered an impossible combination of equipment capabilities or a combination that the FAA does not account for. Speak to a controller about your equipment suffix code.</h2><br /><br /><br />"
    }
    else
    {
        gameOverHTML += "<h1> Equipment Suffix: </h1> <h1 style=\"font-weight: bolder; color: #01BBFF;\">" + equipmentCode + "</h1>" + "<br /><br /><br />";
    }
    gameOverHTML +="<h2>For more information: \"FAA <a href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/index.html' target='_blank'>Aeronautical Information Manual</a> 5-1-8\"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question(
        "XPDR",
        "Do you have a Transponder?", 
        ["Yes", "No"],
        "A transponder is an electronic device that produces a response when it receives a radio-frequency interrogation.<br />Aircraft have transponders to assist in identifying them on air traffic control radar.<br />Collision avoidance systems have been developed to use transponder transmissions as a means of detecting aircraft at risk of colliding with each other.<br /><br />Air traffic control units use the term \"squawk\" when they are assigning an aircraft a transponder code, e.g., \"Squawk 7421\".<br />Squawk thus can be said to mean \"select transponder code\" or \"squawking xxxx\" to mean \"I have selected transponder code xxxx\".<br />",
        "If you can input a code that ATC gives you in a device similar to <a href='https://www.google.com/search?q=airplane+transponder&rlz=1C1CHBD_enUS884US884&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjR5-vG1aTvAhWOMd8KHRo3DgoQ_AUoAnoECBQQBA&biw=1440&bih=797#imgrc=dj86MIjIEMrVDM' target='_blank'>THIS</a>, select YES to this question.<br /><br />",
        "WHAT IS A \"TRANSPONDER\"?",
        "<b><mark class=\"red\">WARNING:</mark><b> On the VATSIM network, simulation of aircraft without a transponder is only permitted with air traffic control approval."),
    new Question(
        "MODEC", 
        "Do you have a Mode-C transponder?", 
        ["Yes", "No"],
        "<a href='https://www.skybrary.aero/index.php/Transponder#:~:text=Civil%20aircraft%20may%20be%20equipped,and%20also%20permits%20data%20exchange.' target='_blank'>Click HERE</a> for more information.<br />",
        "If your transponder have the abiility to report your altitude to ATC, then answer YES to this question.<br /><br />",
        "WHAT IS A \"MODE C TRANSPONDER\"?",
        "The \"Mode C\" portion of your transponder is usually turned on by selecting the \"ALT\" option on your transponder.<br /><br /><b><mark class=\"red\">WARNING</mark><b> On the VATSIM network, you must have a transponder that reports altitude to ATC."),
    new Question(
        "GNSS", 
        "Do you have the ability to navigate via Global Navigation Satellite System (GNSS)?", 
        ["Yes", "No"],
        "Global Navigation Satellite System (GNSS) refers to a constellation of satellites providing signals from space that transmit positioning and timing data to GNSS receivers. The receivers then use this data to determine location.<br /><br />By definition, GNSS provides global coverage. Examples of GNSS include Europe’s Galileo, the USA’s NAVSTAR Global Positioning System (GPS), Russia’s Global'naya Navigatsionnaya Sputnikovaya Sistema (GLONASS) and China’s BeiDou Navigation Satellite System.<br /><br /><a href='https://www.gsa.europa.eu/european-gnss/what-gnss' target='_blank'>Click HERE</a> for more information.<br />",
        "If your aircraft uses satellites to navigate, answer YES to this question.<br /><br />",
        "WHAT IS \"GNSS\"?"),
    new Question(
        "RNAV", 
        "Do you have the ability to navigate via RNAV?", 
        ["Yes", "No"],
        "<a href='https://www.skybrary.aero/index.php/Area_Navigation_(RNAV)' target='_blank' >Click HERE</a> for more information.<br />",
        "If ATC told you \"Cleared direct (any NAVAID or Point)\", would you be able to type that into your navigation system and go straight to that point?<br /><br />",
        "WHAT IS \"RNAV\"?"),
    new Question(
        "RVSM",
        "Is your aircraft authorized for RVSM flight?", 
        ["Yes", "No"],
        "<a href='https://www.faa.gov/air_traffic/separation_standards/rvsm/' target='_blank'>Click HERE</a> for more information.<br />",
        "If you have equipment on your aircraft that allows you to fly at altitudes at and between FL290 and FL410 where ATC only has to provide 1,000ft of separation from you, then answer YES to this question.<br /><br />",
        "WHAT IS \"RVSM\"?",
        "Answering NO to this question may prevent you from being allowed to fly a cruising altitude at or between FL290 and FL410."),
    new Question(
        "DME", 
        "Do you have a have DME capability?", 
        ["Yes", "No"],
        "<a href='https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gbng/lpdme/' target='_blank'>Click HERE</a> for more information.<br />",
        "If your aircraft has the ability to tell how far away you are from a point or NAVAID, answer YES to this question.<br /><br />", 
        "WHAT IS \"DME\"?"),
    new Question(
        "TACAN", 
        "Do you have the ability to navigate via TACAN?", 
        ["Yes", "No"],
        "A tactical air navigation system (TACAN) is a navigation system used by military aircraft.<br />It provides the user with bearing and distance (slant-range or hypotenuse) to a ground or ship-borne station.<br />It is a more accurate version of the VOR/DME system that provides bearing and range information for civil aviation.<br />Aircraft equipped with TACAN avionics can use this system for en route navigation as well as non-precision approaches to landing fields.<br />",
        "Generally speaking, unless you are flying a military aircraft, you will likely need to answer NO to this question.<br /><br />", 
        "WHAT IS A \"TACAN\"?")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();