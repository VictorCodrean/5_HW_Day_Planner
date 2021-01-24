// Display the current day at the top of the calendar
var todaysDate = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todaysDate);

// get time in 24 format for if statements
var timeCompare = moment().format("H");
console.log("current time in 24 format: " + timeCompare)
bkGr();
existingNotes();
// Each time block is color - coded to indicate whether it is in the past, present, or future
function bkGr() {
    $("textarea").each(function () {
        var accordingHourBlock = parseInt($(this).attr("id"));
        console.log(accordingHourBlock);
        if (accordingHourBlock < timeCompare) {
            $(this).addClass("past")
        } else if (accordingHourBlock > timeCompare) {
            $(this).addClass("future")
        } else
            $(this).addClass("present")
    });
};

// If click saveBtn then the text from $(textarea).val() is saved in local storage
$(".saveBtn").on("click", function () {
    console.log("hello world")
    var getParent = $(this).parent()
    var textareaId = getParent.children("textarea").attr("id");
    var textareaValue = getParent.children("textarea").val();
    console.log(getParent)
    console.log(textareaId)
    console.log(textareaValue)

    // SYNTAX:            KeyName     Stored value
    localStorage.setItem(textareaId, textareaValue);
    console.log("Get local Storage: " + localStorage.getItem(textareaId))
})

//After refreshing the page, the saved events persist
function existingNotes() {
    $("textarea").each(function () {
        var grabId = $(this).attr("id");
        // console.log(grabValue)
        var content = localStorage.getItem(grabId);
        if (content !== null) {
            $(this).val(content)
        }
    })
};