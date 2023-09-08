/**
 * @typedef {Object} QuestionType
 * @property {string} shortQ - Short question identifier.
 * @property {string} text - The question text.
 * @property {string[]} choices - An array of answer choices.
 * @property {string} technicalExplanation - The technical explanation.
 * @property {string} simpleExplanation - The simple explanation.
 * @property {string} whatIsQuestion - The explanation of what the question is.
 * @property {string} notes - Additional notes.
 */

/**
 * Shows the "What is an Equipment Suffix Code?" popup description.
 * This description is located inside the index.html file.
 */
function showPopup()
{
    // Get the <Span> element that contains the popup text
    var popup = document.getElementById("codeExplanationPopup");
    // Toggle the popup's visibility
    popup.classList.toggle("show");
}

/**
 * This Constant variable contains all the available equipment suffix codes.
 * We use a string of the user's selected equipment to determine what suffix code to use.
 */
const equipmentReference = 
{
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-UNK,TACAN-N":"/W", // /W
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/Z",   // /Z
    "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/L",   // /L
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N":"/X",   // /X
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-N":"/T",   // /T
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-N,TACAN-N":"/U",   // /U
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/D",   // /D
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/B",   // /B
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-Y,TACAN-N":"/A",   // /A
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/M",   // /M
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/N",   // /N
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-Y,TACAN-Y":"/P",   // /P
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/M",   // /M
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/N",   // /N
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-N,DME-N,TACAN-Y":"/P",   // /P
    "RVSM-N,XPDR-N,MODEC-N,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/Y",   // /Y
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/C",   // /C
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-N,RNAV-Y,DME-Y,TACAN-N":"/I",   // /I
    "RVSM-N,XPDR-N,MODEC-N,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/V",   // /V
    "RVSM-N,XPDR-Y,MODEC-N,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/S",   // /S
    "RVSM-N,XPDR-Y,MODEC-Y,GNSS-Y,RNAV-Y,DME-Y,TACAN-N":"/G"    // /G
}

/**
 * This Constant variable contains all the questions that will be asked to the user.
 * It also contains that specific question's technical explanation, simple explanation, and notes.
 */
const questions = [
    {
        shortQ: "XPDR",
        text: "Do you have a Transponder?",
        choices: ["Yes", "No"],
        technicalExplanation: "A transponder is an electronic device that produces a response when it receives a radio-frequency interrogation.<br />Aircraft have transponders to assist in identifying them on air traffic control radar.<br />Collision avoidance systems have been developed to use transponder transmissions as a means of detecting aircraft at risk of colliding with each other.<br /><br />Air traffic control units use the term \"squawk\" when they are assigning an aircraft a transponder code, e.g., \"Squawk 7421\".<br />Squawk thus can be said to mean \"select transponder code\" or \"squawking xxxx\" to mean \"I have selected transponder code xxxx\".<br />",
        simpleExplanation: "If you can input a code that ATC gives you in a device similar to <a href='https://www.google.com/search?q=airplane+transponder&rlz=1C1CHBD_enUS884US884&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjR5-vG1aTvAhWOMd8KHRo3DgoQ_AUoAnoECBQQBA&biw=1440&bih=797#imgrc=dj86MIjIEMrVDM' target='_blank'>THIS</a>, select YES to this question.<br /><br />",
        whatIsQuestion: "WHAT IS A \"TRANSPONDER\"?",
        notes: "<b><mark class=\"red\">WARNING:</mark><b> On the VATSIM network, simulation of aircraft without a transponder is only permitted with air traffic control approval."
    },
    {
        shortQ: "MODEC",
        text: "Do you have a Mode-C transponder?",
        choices: ["Yes", "No"],
        technicalExplanation: "<a href='https://www.skybrary.aero/index.php/Transponder#:~:text=Civil%20aircraft%20may%20be%20equipped,and%20also%20permits%20data%20exchange.' target='_blank'>Click HERE</a> for more information.<br />",
        simpleExplanation: "If your transponder have the abiility to report your altitude to ATC, then answer YES to this question.<br /><br />",
        whatIsQuestion: "WHAT IS A \"MODE C TRANSPONDER\"?",
        notes: "The \"Mode C\" portion of your transponder is usually turned on by selecting the \"ALT\" option on your transponder.<br /><br /><b><mark class=\"red\">WARNING</mark><b> On the VATSIM network, you must have a transponder that reports altitude to ATC."
    },
    {
        shortQ: "GNSS", 
        text: "Do you have the ability to navigate via Global Navigation Satellite System (GNSS)?", 
        choices: ["Yes", "No"],
        technicalExplanation: "Global Navigation Satellite System (GNSS) refers to a constellation of satellites providing signals from space that transmit positioning and timing data to GNSS receivers. The receivers then use this data to determine location.<br /><br />By definition, GNSS provides global coverage. Examples of GNSS include Europe’s Galileo, the USA’s NAVSTAR Global Positioning System (GPS), Russia’s Global'naya Navigatsionnaya Sputnikovaya Sistema (GLONASS) and China’s BeiDou Navigation Satellite System.<br /><br /><a href='https://www.gsa.europa.eu/european-gnss/what-gnss' target='_blank'>Click HERE</a> for more information.<br />",
        simpleExplanation: "If your aircraft uses satellites to navigate, answer YES to this question.<br /><br />",
        whatIsQuestion: "WHAT IS \"GNSS\"?"
    },
    {
        shortQ: "RNAV", 
        text: "Do you have the ability to navigate via RNAV?", 
        choices: ["Yes", "No"],
        technicalExplanation: "<a href='https://www.skybrary.aero/index.php/Area_Navigation_(RNAV)' target='_blank' >Click HERE</a> for more information.<br />",
        simpleExplanation: "If ATC told you \"Cleared direct (any NAVAID or Point)\", would you be able to type that into your navigation system and go straight to that point?<br /><br />",
        whatIsQuestion: "WHAT IS \"RNAV\"?"
    },
    {
        shortQ: "RVSM",
        text: "Is your aircraft authorized for RVSM flight?", 
        choices: ["Yes", "No"],
        technicalExplanation: "<a href='https://www.faa.gov/air_traffic/separation_standards/rvsm/' target='_blank'>Click HERE</a> for more information.<br />",
        simpleExplanation: "If you have equipment on your aircraft that allows you to fly at altitudes at and between FL290 and FL410 where ATC only has to provide 1,000ft of separation from you, then answer YES to this question.<br /><br />",
        whatIsQuestion: "WHAT IS \"RVSM\"?",
        notes: "Answering NO to this question may prevent you from being allowed to fly a cruising altitude at or between FL290 and FL410.",
    },
    {
        shortQ: "DME", 
        text: "Do you have a have DME capability?", 
        choices: ["Yes", "No"],
        technicalExplanation: "<a href='https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gbng/lpdme/' target='_blank'>Click HERE</a> for more information.<br />",
        simpleExplanation: "If your aircraft has the ability to tell how far away you are from a point or NAVAID, answer YES to this question.<br /><br />", 
        whatIsQuestion: "WHAT IS \"DME\"?"
    },
    {
        shortQ: "TACAN", 
        text: "Do you have the ability to navigate via TACAN?", 
        choices: ["Yes", "No"],
        technicalExplanation: "A tactical air navigation system (TACAN) is a navigation system used by military aircraft.<br />It provides the user with bearing and distance (slant-range or hypotenuse) to a ground or ship-borne station.<br />It is a more accurate version of the VOR/DME system that provides bearing and range information for civil aviation.<br />Aircraft equipped with TACAN avionics can use this system for en route navigation as well as non-precision approaches to landing fields.<br />",
        simpleExplanation: "Generally speaking, unless you are flying a military aircraft, you will likely need to answer NO to this question.<br /><br />", 
        whatIsQuestion: "WHAT IS A \"TACAN\"?"
    }
]

/**
 * Helper function to get the Equipment string this code uses to determine 
 * the equipment suffix code from the suffix code alone.
 * ex. func("/L") will return "RVSM-Y,XPDR-Y,MODEC-Y,GNSS-Y,RNAV-Y,DME-Y,TACAN-N"
 * @param {String} equipmentCode 
 * @returns {String|null}
 */
function getEquipmentString(equipmentCode){
    // Loop through the equipmentReference keys "EquipmentString"
    for (const key in equipmentReference) {
        // Check to see if the Value for the current key is equal to the equipmentCode we want.
        if (equipmentReference[key] === equipmentCode){
            // If it is, return the key "EquipmentString".
            return key;
        }
    }
    // If we get here, we didn't find the equipmentCode we were looking for.
    return null;
}

/**
 * Show the Equipment Code, if one was determined, at the end of the Quiz.
 */
function showEquipmentCode(){
    // This variable will hold the HTML that will be displayed at the end of the quiz.
    var endHTML = "";
    // Store the Equipment Code determinied by the users answers in the quiz.
    var equipmentCode = equipmentReference[quiz.equipmentString];
    // If the equipmentCode is undefined, then the user entered an impossible combination of equipment.
    if (equipmentCode === undefined){
        // Display an error message to the user.
        endHTML += "<h2>It appears you have entered an impossible combination of equipment capabilities or a combination that the FAA does not account for. Speak to a controller about your equipment suffix code.</h2><br /><br /><br />"
    }else{
        // Display the equipment code to the user.
        endHTML += "<h1> Equipment Suffix: </h1> <h1 style=\"font-weight: bolder; color: #01BBFF;\">" + equipmentCode + "</h1>" + "<br /><br /><br />";
    }
    // Display the FAA's explanation of the equipment suffix codes.
    endHTML += "<h2>For more information: \"FAA <a href='https://www.faa.gov/air_traffic/publications/atpubs/aim_html/index.html' target='_blank'>Aeronautical Information Manual</a> 5-1-8\"</h2>";
    // Change the HTML of the quiz div to the endHTML variable.
    document.getElementById("quiz").innerHTML = endHTML;
}

/**
 * Update the page with the current question and choices.
 */
function updateHTML(){
    // Check if the quiz is complete.
    if (quiz.IsComplete()){
        // If it is, show the equipment code and/or error message.
        showEquipmentCode();
    }else{
        // If it isn't, update the page with the current question and choices.

        // TODO - Add comments about this section
        // ------------------------------------------------------------------------
        if(quiz.questionIndex == 5 && quiz.equipmentTypeValues.DME != "DME-UNK"){
            quiz.AdvanceQuestionIndex();
        }
        else if(quiz.questionIndex == 6 && (quiz.equipmentTypeValues.GNSS != "GNSS-N" || quiz.equipmentTypeValues.RNAV != "RNAV-N")){
            quiz.AdvanceQuestionIndex();
        }
        // ------------------------------------------------------------------------

        // Update the page with the current question and what is question.
        document.getElementById("question").innerHTML = quiz.GetQuestionFromCurrentIndex().text;
        document.getElementById("whatIs").innerHTML = quiz.GetQuestionFromCurrentIndex().whatIsQuestion;

        // Display the notes for the current question.
        quiz.DisplayNotes("notes");

        // Link the Simple Information and Technical Information buttons to their respective functions.
        quiz.displaySimpleInfo("btnSimpInfo");
        quiz.displayTechInfo("btnTechInfo");

        // Update the page with the current choices.
        var choices = quiz.GetQuestionFromCurrentIndex().choices;

        // Loop through the choices and update the page with the current choices.
        for(var i = 0; i < choices.length; i++) {
            // Get the element by its ID and update the innerHTML with the current choice.
            var element = document.getElementById("choice" + i);
            // Update the innerHTML of the element with the current choice.
            element.innerHTML = choices[i];
            // Link the button to the userSelection function.
            userSelection("btn" + i, choices[i]);
        }
    }
}

/**
 * The user has made a selection for the current question.
 * Set the equipmentTypeValues property based on the user's choice.
 * @param {string} id button id
 * @param {string} choice user choice 
 */
function userSelection(id, choice){
    // Clear out the Technical Information and Simple Information.
    document.getElementById("techexplanation").innerHTML = ""; // Clear the Technical Information.
    document.getElementById("simpleexplanation").innerHTML = ""; // Clear the Simple Information.

    // Get the Button object by its ID.
    var button = document.getElementById(id);
    // Set the onclick function of the button to advance the question index and compile the equipment string.
    button.onclick = function(){
        switch (quiz.questionIndex) {
            case 0:
                // Do you have Transponder?
                quiz.equipmentTypeValues.XPDR = (choice === "Yes") ? "XPDR-Y" : "XPDR-N";
                if (choice === "No"){
                    quiz.equipmentTypeValues.MODEC = "MODEC-N";
                    quiz.AdvanceQuestionIndex();
                }
                break;
            case 1:
                // Do you have Mode-C Transponder?
                quiz.equipmentTypeValues.MODEC = (choice === "Yes") ? "MODEC-Y" : "MODEC-N";
                break;
            case 2:
                // Do you have the ability to navigate via Global Navigation satellite System (GNSS)?
                quiz.equipmentTypeValues.GNSS = (choice === "Yes") ? "GNSS-Y" : "GNSS-N";
                if (choice === "Yes"){
                    quiz.equipmentTypeValues.RNAV = "RNAV-Y";
                    quiz.equipmentTypeValues.DME = "DME-Y";
                    quiz.AdvanceQuestionIndex();
                }
                break;
            case 3:
                // Do you have the ability to navigate via RNAV?
                quiz.equipmentTypeValues.RNAV = (choice === "Yes") ? "RNAV-Y" : "RNAV-N";
                if (choice === "Yes"){
                    quiz.equipmentTypeValues.DME = "DME-Y";
                }
                break;
            case 4:
                // Is your aircraft authorized for RVSM flight?
                quiz.equipmentTypeValues.RVSM = (choice === "Yes") ? "RVSM-Y" : "RVSM-N";
                break;
            case 5:
                // Do you have a have DME capability?
                quiz.equipmentTypeValues.DME = (choice === "Yes") ? "DME-Y" : "DME-N";
                break;
            case 6:
                // Do you have the ability to navigate via TACAN?
                quiz.equipmentTypeValues.TACAN = (choice === "Yes") ? "TACAN-Y" : "TACAN-N";
                break;
        }
        quiz.AdvanceQuestionIndex();
        quiz.CompileEquipmentString();
        updateHTML();
    }
}

/**
 * Class that contains all the data needed to determine the Equipment suffix code
 * based on the choices the user makes in the quiz.
 */
class Quiz{
    /**
     * Constructor for the Quiz class.
     * This sets up the Quiz with everything we will need to determin Equipment suffix codes.
     */
    constructor(){
        this.equipmentString = "";
        this.questionIndex = 0;
        this.equipmentTypeValues = {
            "RVSM":"RVSM-UNK",
            "XPDR":"XPDR-UNK",
            "MODEC":"MODEC-UNK",
            "GNSS":"GNSS-UNK",
            "RNAV":"RNAV-UNK",
            "DME":"DME-UNK",
            "TACAN":"TACAN-N"
        }
    }

    /**
     * Get the current question object based on the current question index.
     * @returns {QuestionType} The current question object with properties like 'shortQ', 'text', 'choices', etc.
     */
    GetQuestionFromCurrentIndex(){
        return questions[this.questionIndex];
    }

    /**
     * Advance the question index by 1.
     */
    AdvanceQuestionIndex(){
        this.questionIndex++;
    }

    /**
     * Determine the TACAN equipment status based on specific conditions.
     * If the equipmentString matches certain codes and the questionIndex is less than or equal to 6,
     * it sets the equipmentTypeValues.TACAN to "TACAN-UNK".
     */
    DetermineTacan(){
        // Check if the equipmentString matches specific codes and if the questionIndex is within the allowed range.
        if ((this.equipmentString == getEquipmentString("/D") ||
             this.equipmentString == getEquipmentString("/B") ||
             this.equipmentString == getEquipmentString("/A") ||
             this.equipmentString == getEquipmentString("/X") ||
             this.equipmentString == getEquipmentString("/T") ||
             this.equipmentString == getEquipmentString("/U")) &&
             this.questionIndex <= 6){
                // Set the TACAN equipment value to "TACAN-UNK".
                this.equipmentTypeValues.TACAN = "TACAN-UNK";
        }
    }

    /**
     * Compile the equipment values into a single comma-separated string.
     * This method iterates over the properties of 'equipmentTypeValues', concatenates them into a string,
     * and removes the trailing comma.
     */
    CompileEquipmentString() {
        // Initialize the equipmentString as an empty string.
        this.equipmentString = "";

        // Iterate over the properties of 'equipmentTypeValues'.
        for (const key in this.equipmentTypeValues) {
            // Concatenate the value associated with the current property and a comma to the equipmentString.
            this.equipmentString += this.equipmentTypeValues[key] + ",";
        }

        // Remove the trailing comma from the equipmentString.
        this.equipmentString = this.equipmentString.substring(0, this.equipmentString.length - 1);
    }

    /**
     * Check if the quiz is complete.
     * This method determines the completion status of the quiz based on various conditions.
     * @returns {boolean} True if the quiz is complete, false otherwise.
     */
    IsComplete() {
        // Determine the TACAN equipment status.
        this.DetermineTacan();

        // Compile the equipment values into a string.
        this.CompileEquipmentString();

        // Check if the equipmentString exists in the 'equipmentReference' object.
        if (equipmentReference[this.equipmentString] !== undefined) {
            // If it exists, return true (quiz is complete).
            return true;
        } else {
            // If it doesn't exist, check if the questionIndex is greater than or equal to the total number of questions.
            // If true, return true (quiz is complete), otherwise return false.
            return this.questionIndex >= questions.length;
        }
    }

    /**
     * Display the Simple Information for the current question the quiz is on.
     * This also clears the Technical Information.
     * @param {string} id Element ID.
     */
    displaySimpleInfo(id){
        // Get the Simple Information Button by its ID.
        var button = document.getElementById(id);
        // Set the onclick function of the button to display the Simple Information.
        button.onclick = function(){
            document.getElementById("techexplanation").innerHTML = ""; // Clear the Technical Information.
            document.getElementById("simpleexplanation").innerHTML = quiz.GetQuestionFromCurrentIndex().simpleExplanation;
        }
    }

    /**
     * Display the Technical Information for the current question the quiz is on.
     * This also clears the Simple Information.
     * @param {string} id Element ID.
     */
    displayTechInfo(id){
        // Get the Technical Information Button by its ID.
        var button = document.getElementById(id);
        // Set the onclick function of the button to display the Technical Information.
        button.onclick = function(){
            document.getElementById("techexplanation").innerHTML = quiz.GetQuestionFromCurrentIndex().technicalExplanation;
            document.getElementById("simpleexplanation").innerHTML = ""; // Clear the simple Information.
        }
    }

    /**
     * Display the questions notes if there are any.
     * @param {string} id element ID.
     */
    DisplayNotes(id){
        // Get the notes section of the html by its ID.
        var element = document.getElementById(id);
        // Check if the current question has notes.
        if (this.GetQuestionFromCurrentIndex().notes !== undefined){
            // If it does, display the notes.
            element.innerHTML = "NOTES: <br />" + this.GetQuestionFromCurrentIndex().notes;
        }else{
            // If it doesn't, clear the notes section.
            element.innerHTML = "";
        }
    }
}

// Create a new Quiz object.
var quiz = new Quiz();

// Update the HTML with the current question and choices.
updateHTML();