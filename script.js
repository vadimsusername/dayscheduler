var currentHour = moment().toObject().hours;//

$("textarea").each(function(){
    var dataHour = parseInt($(this).attr("data-hour"));
    //console.log(dataHour);
    var entry = localStorage.getItem("hour"+ $(this).attr("data-hour"));
    if(entry){
        $(this).val(entry);
    }
    
    if(currentHour === dataHour){
        $(this).addClass("present");
    }else if(dataHour < currentHour){
        $(this).addClass("past");
    }else if(dataHour > currentHour){
        $(this).addClass("future");
    }   
  
})

$("button").on("click",function(){
    //console.log($(this).parent().prev().val());
    //console.log($(this).parent().prev().attr("data-hour"));
    localStorage.setItem("hour" + $(this).parent().prev().attr("data-hour"),$(this).parent().prev().val());

})


//Display current day and time in header
var currentDay = $("#currentDay");
var momentVal;
timeInterval = setInterval(function(){

momentVal  = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(momentVal);
if(moment().format("mm") === "00"){
  //adjust colors
}
},1000);