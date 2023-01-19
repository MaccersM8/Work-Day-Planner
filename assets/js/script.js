// Create Variable For Time Of Given Day
// Current Hour (   Moment.js = moment().format('h')   )
var CurrentHour = moment().format('h');
console.log("The Current Hour Is " + CurrentHour);
// Current AM/PM (    Moment.js = moment().format('a')   )
var CurrentAMPM = moment().format('a');
console.log("The Time Is Currently In The " + CurrentAMPM);
// Current Time = Current Hour + Current AM/PM
var CurrentTime = moment().format('ha');
console.log("The Current Time To The Nearest Hour Is " + CurrentTime);

// Create Variable For Date Of Given Day
// Current Day (   Moment.js = moment().format('dddd')  )
var CurrentDay = moment().format('dddd');
console.log("Today Is " + CurrentDay);
// Current Date (   Moment.js = moment().format('MMMM Do YYYY')   )
var CurrentDate = moment().format('Do MMMM YYYY');
console.log("The Current Date Is " + CurrentDate);

// Create Variable For Full Date
// Full Date = Current Day + Current Date
var FullDate = moment().format('dddd Do MMMM YYYY');
console.log("The Full Date Is " + FullDate);
// Display Full Date On Web Page
$("#currentDay").text(FullDate);

// Create Variable For The Full Time Of Current Time
// Full Time = (   Moment.js = moment().format('h:mm a')   )
var FullTime = moment().format('h:mm a');
console.log("The Full Time Is " + FullTime);
// Display Full Time On Web Page
$('#currentTime').text("Time: " + FullTime);

// Function For 9AM
function NineAM() {
    // IF Current Time < 9AM
    if (moment(CurrentTime, "ha").isBefore(moment('9am', 'ha'))) {
        // Mark Time Block As Future
        $("#9AM").addClass("future");
        $("#9AM-Notes").addClass("future");
        console.log("The Time Is Before 9AM");
        // ELSE IF Current Time = 9AM
    } else if (moment(CurrentTime, "ha").isSame(moment('9am', 'ha'))) {
        // Mark Time Block As Current
        $("#9AM").addClass("present");
        $("#9AM-Notes").addClass("present");
        console.log("The Time Is 9AM");
        // ELSE IF Current Time > 9AM
    } else {
        // Mark Time Block As Past
        $("#9AM").addClass("past");
        $("#9AM-Notes").addClass("past");
        console.log("The Time Is After 9AM");
    }
}
NineAM();

// Function For 10AM
function TenAM() {
    // IF Current Time < 10AM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('10am', 'ha'))) {
        // Mark Time Block As Future
        $("#10AM").addClass("future");
        $("#10AM-Notes").addClass("future");
        console.log("The Time Is Before 10AM");
        // ELSE IF Current Time = 10AM
    } else if (moment(CurrentTime, "ha").isSame(moment('10am', 'ha'))) {
        // Mark Time Block As Current
        $("#10AM").addClass("present");
        $("#10AM-Notes").addClass("present");
        console.log("The Time Is 10AM");
        // ELSE IF Current Time > 10AM
    } else {
        // Mark Time Block As Past
        $("#10AM").addClass("past");
        $("#10AM-Notes").addClass("past");
        console.log("The Time Is After 10AM");
    }
}
TenAM();

// Function For 11AM
function ElevenAM() {
    // IF Current Time < 11AM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('11am', 'ha'))) {
        // Mark Time Block As Future
        $("#11AM").addClass("future");
        $("#11AM-Notes").addClass("future");
        console.log("The Time Is Before 11AM");
        // ELSE IF Current Time = 11AM
    } else if (moment(CurrentTime, "ha").isSame(moment('11am', 'ha'))) {
        // Mark Time Block As Current
        $("#11AM").addClass("present");
        $("#11AM-Notes").addClass("present");
        console.log("The Time Is 11AM");
        // ELSE IF Current Time > 11AM
    } else {
        // Mark Time Block As Past
        $("#11AM").addClass("past");
        $("#11AM-Notes").addClass("past");
        console.log("The Time Is After 11AM");
    }
}
ElevenAM();

// Function For 12PM
function TwelvePM() {
    // IF Current Time < 12PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('12pm', 'ha'))) {
        // Mark Time Block As Future
        $("#12PM").addClass("future");
        $("#12PM-Notes").addClass("future");
        console.log("The Time Is Before 12PM");
        // ELSE IF Current Time = 12PM
    } else if (moment(CurrentTime, "ha").isSame(moment('12pm', 'ha'))) {
        // Mark Time Block As Current
        $("#12PM").addClass("present");
        $("#12PM-Notes").addClass("present");
        console.log("The Time Is 12PM");
        // ELSE IF Current Time > 12PM
    } else {
        // Mark Time Block As Past
        $("#12PM").addClass("past");
        $("#12PM-Notes").addClass("past");
        console.log("The Time Is After 12PM");
    }
}
TwelvePM();

// Function For 1PM
function OnePM() {
    // IF Current Time < 1PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('1pm', 'ha'))) {
        // Mark Time Block As Future
        $("#1PM").addClass("future");
        $("#1PM-Notes").addClass("future");
        console.log("The Time Is Before 1PM");
        // ELSE IF Current Time = 1PM
    } else if (moment(CurrentTime, "ha").isSame(moment('1pm', 'ha'))) {
        // Mark Time Block As Current
        $("#1PM").addClass("present");
        $("#1PM-Notes").addClass("present");
        console.log("The Time Is 1PM");
        // ELSE IF Current Time > 1PM
    } else {
        // Mark Time Block As Past
        $("#1PM").addClass("past");
        $("#1PM-Notes").addClass("past");
        console.log("The Time Is After 1PM");
    }
}
OnePM();

// Function For 2PM
function TwoPM() {
    // IF Current Time < 2PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('2pm', 'ha'))) {
        // Mark Time Block As Future
        $("#2PM").addClass("future");
        $("#2PM-Notes").addClass("future");
        console.log("The Time Is Before 2PM");
        // ELSE IF Current Time = 2PM
    } else if (moment(CurrentTime, "ha").isSame(moment('2pm', 'ha'))) {
        // Mark Time Block As Current
        $("#2PM").addClass("present");
        $("#2PM-Notes").addClass("present");
        console.log("The Time Is 2PM");
        // ELSE IF Current Time > 2PM
    } else {
        // Mark Time Block As Past
        $("#2PM").addClass("past");
        $("#2PM-Notes").addClass("past");
        console.log("The Time Is After 2PM");
    }
}
TwoPM();

// Function For 3PM
function ThreePM() {
    // IF Current Time < 3PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('3pm', 'ha'))) {
        // Mark Time Block As Future
        $("#3PM").addClass("future");
        $("#3PM-Notes").addClass("future");
        console.log("The Time Is Before 3PM");
        // ELSE IF Current Time = 3PM
    } else if (moment(CurrentTime, "ha").isSame(moment('3pm', 'ha'))) {
        // Mark Time Block As Current
        $("#3PM").addClass("present");
        $("#3PM-Notes").addClass("present");
        console.log("The Time Is 3PM");
        // ELSE IF Current Time > 3PM
    } else {
        // Mark Time Block As Past
        $("#3PM").addClass("past");
        $("#3PM-Notes").addClass("past");
        console.log("The Time Is After 3PM");
    }
}
ThreePM();

// Function For 4PM
function FourPM() {
    // IF Current Time < 4PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('4pm', 'ha'))) {
        // Mark Time Block As Future
        $("#4PM").addClass("future");
        $("#4PM-Notes").addClass("future");
        console.log("The Time Is Before 4PM");
        // ELSE IF Current Time = 4PM
    } else if (moment(CurrentTime, "ha").isSame(moment('4pm', 'ha'))) {
        // Mark Time Block As Current
        $("#4PM").addClass("present");
        $("#4PM-Notes").addClass("present");
        console.log("The Time Is 4PM");
        // ELSE IF Current Time > 4PM
    } else {
        // Mark Time Block As Past
        $("#4PM").addClass("past");
        $("#4PM-Notes").addClass("past");
        console.log("The Time Is After 4PM");
    }
}
FourPM();

// Function For 5PM
function FivePM() {
    // IF Current Time < 5PM
    // Mark Time Block As Future
    if (moment(CurrentTime, "ha").isBefore(moment('5pm', 'ha'))) {
        // Mark Time Block As Future
        $("#5PM").addClass("future");
        $("#5PM-Notes").addClass("future");
        console.log("The Time Is Before 5PM");
        // ELSE IF Current Time = 4PM
    } else if (moment(CurrentTime, "ha").isSame(moment('5pm', 'ha'))) {
        // Mark Time Block As Current
        $("#5PM").addClass("present");
        $("#5PM-Notes").addClass("present");
        console.log("The Time Is 5PM");
        // ELSE IF Current Time > 5PM
    } else {
        // Mark Time Block As Past
        $("#5PM").addClass("past");
        $("#5PM-Notes").addClass("past");
        console.log("The Time Is After 5PM");
    }
}
FivePM();

// Store User Input (The To Dos) To Local Storage - PER HOUR
// WHEN User Clicks SAVE Button For An Hour Slot
// 9AM NOTES
$("#9AM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes9AM =  $("#9AM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("9AM-Notes", SavedNotes9AM);
    console.log("Saved Agenda Item For 9AM: " + SavedNotes9AM);
})

// 10AM NOTES
$("#10AM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes10AM =  $("#10AM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("10AM-Notes", SavedNotes10AM);
    console.log("Saved Agenda Item For 10AM: " + SavedNotes10AM);
})

// 11AM NOTES
$("#11AM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes11AM =  $("#11AM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("11AM-Notes", SavedNotes11AM);
    console.log("Saved Agenda Item For 11AM: " + SavedNotes11AM);
})

// 12PM NOTES
$("#12PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes12PM =  $("#12PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("12PM-Notes", SavedNotes12PM);
    console.log("Saved Agenda Item For 12PM: " + SavedNotes12PM);
})

// 1PM NOTES
$("#1PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes1PM =  $("#1PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("1PM-Notes", SavedNotes1PM);
    console.log("Saved Agenda Item For 1PM: " + SavedNotes1PM);
})

// 2PM NOTES
$("#2PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes2PM =  $("#2PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("12PM-Notes", SavedNotes2PM);
    console.log("Saved Agenda Item For 2PM: " + SavedNotes2PM);
})

// 3PM NOTES
$("#3PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes3PM =  $("#3PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("3PM-Notes", SavedNotes3PM);
    console.log("Saved Agenda Item For 3PM: " + SavedNotes3PM);
})

// 4PM NOTES
$("#4PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes4PM =  $("#4PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("4PM-Notes", SavedNotes4PM);
    console.log("Saved Agenda Item For 4PM: " + SavedNotes4PM);
})

// 5PM NOTES
$("#5PM-Save").on("click",function(event){
    event.preventDefault();
    // Create Variable For Each Hour User Input
    var SavedNotes5PM =  $("#5PM-Notes").val().trim();
    // Save To Local Storage
    localStorage.setItem("5PM-Notes", SavedNotes5PM);
    console.log("Saved Agenda Item For 5PM: " + SavedNotes5PM);
})

// Load User Input (The To Dos) From Local Stoage - PER HOUR
        // Create Variable For Each Hours Stored Input
        // Display This On Web Page

// Create Function To Validate Time And Run Each Time Specific Function
        // Work Out A Way To Check The Current Time
        // RUN 9AM Function
        // RUN 10AM Function
        // RUN 11AM Function
        // Run 12PM Function
        // Run 1PM Function
        // Run 2PM Function
        // Run 3PM Function
        // Run 4PM Function
        // Run 5PM Function