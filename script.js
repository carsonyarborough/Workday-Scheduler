var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
$()
// var saveBtnEl = $(".saveBtn")
// saveBtnEl.on('click', function() {
//     console.log(this)
//    var hourlyInput = $(this).parent().attr("id")
//    var inputText = $(this).parent('description').val()
// });
var timeEl = $("#currentDay");

timeEl.text(rightNow);

// var timeblock = $("#time-block");

var currentHour = moment().hour();
console.log(currentHour);

function timeSlotColor(){
    $(".time-block").each(function() {
        var timeBlockId = parseInt($(this).attr("id"))
        console.log("timeblock in the loop is"+timeBlockId,currentHour);
        if (currentHour === timeBlockId){
            $(this).addClass("present")
            $(this).removeClass("past")
            $(this).removeClass("future")
        }
        else if(currentHour > timeBlockId){
            $(this).addClass("past")
            $(this).removeClass("present")
            $(this).removeClass("future")
        }
        else {
            $(this).addClass("future")
            $(this).addClass("past")
            $(this).addClass("present")
        }
      });
} 
timeSlotColor();




// need to use window storage to save text thats typed into the text area 


// if (currentHour === currentHour) {
//  var presentHour = $(this).parent("hr-nine").attr()
// }
// var textArea = 
// 
// function displayTime(){
//     var interval = setInterval(rightNow,1000)
//     timeEl.text(interval)
// }
// displayTime()
//setInterval(rightNow, 1000);

// if (rightNow === )
// function currentTime(){
