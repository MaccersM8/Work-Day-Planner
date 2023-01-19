// PSUEDOCODE FOR PROGRAM

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
// Current Day (   Moment.js = "moment().format('dddd');  )
var CurrentDay = moment().format('dddd');
console.log("Today Is " + CurrentDay);
// Current Date (   Moment.js = "moment().format('MMMM Do YYYY');   )
var CurrentDate = moment().format('Do MMMM YYYY');
console.log("The Current Date Is " + CurrentDate);
// Create Variable For Full Date
// Full Date = Current Day + Current Date
var FullDate = moment().format('dddd Do MMMM YYYY');
console.log("The Full Date Is " + FullDate);
// Display Full Date On Web Page
$("#currentDay").text(FullDate);

var FullTime = moment().format('h:mm a');
$('#currentTime').text("Time: " + FullTime);

// Function For 9AM
        // IF Current Time < 9AM
            // Mark Time Block As Future
        // ELSE IF Current Time = 9AM
            // Mark Time Block As Current
        // ELSE IF Current Time > 9AM
            // Mark Time Block As Past

// Function For 10AM
        // IF Current Time < 10AM
            // Mark Time Block As Future
        // ELSE IF Current Time = 10AM
            // Mark Time Block As Current
        // ELSE IF Current Time > 10AM
            // Mark Time Block As Past

// Function For 11AM
        // IF Current Time < 11AM
            // Mark Time Block As Future
        // ELSE IF Current Time = 11AM
            // Mark Time Block As Current
        // ELSE IF Current Time > 11AM
            // Mark Time Block As Past

// Function For 12PM
        // IF Current Time < 12PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 12PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 12PM
            // Mark Time Block As Past

// Function For 1PM
        // IF Current Time < 1PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 1PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 1PM
            // Mark Time Block As Past

// Function For 2PM
        // IF Current Time < 2PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 2PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 2PM
            // Mark Time Block As Past

// Function For 3PM
        // IF Current Time < 3PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 3PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 3PM
            // Mark Time Block As Past

// Function For 4PM
        // IF Current Time < 4PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 4PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 4PM
            // Mark Time Block As Past

// Function For 5PM
        // IF Current Time < 5PM
            // Mark Time Block As Future
        // ELSE IF Current Time = 5PM
            // Mark Time Block As Current
        // ELSE IF Current Time > 5PM
            // Mark Time Block As Past

// Store User Input (The To Dos) To Local Storage - PER HOUR
        // WHEN User Clicks SAVE Button For An Hour Slot
            // Create Variable For Each Hour User Input
            // Save To Local Storage

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