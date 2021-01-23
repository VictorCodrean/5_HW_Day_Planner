
// Display the current day at the top of the calendar
var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todaysDate);

var timeCompare = moment().format("H");

// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours


// WHEN I view the time blocks for that day
// THEN each time block is color - coded to indicate whether it is in the past, present, or future
function bkGr() {
    $("textarea").each(function () {
        var accordingHour = parseInt($(this).attr("id"));
        console.log(accordingHour);

        if (accordingHour === timeCompare) {
            $(this).addClass("present")
        } else if (accordingHour > timeCompare) {
            $(this).addClass("future")
        } else // if (accordingHour < timeCompare) {
            $(this).addClass("past")
        //}
    });
};
bkGr();
console.log("break")
console.log(timeCompare)
console.log()



// WHEN I click into a time block
// THEN I can er an event


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage


// WHEN I refresh the page
// THEN the saved events persist