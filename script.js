

$("textarea").each(function(){
    var dataHour = parseInt($(this).attr("data-hour"));
    console.log(dataHour);
    var entry = localStorage.getItem("hour"+ $(this).attr("data-hour"));
    if(entry){
        $(this).val(entry);
    }
    
  
})

$("button").on("click",function(){
    console.log($(this).parent().prev().val());
    console.log($(this).parent().prev().attr("data-hour"));
    localStorage.setItem("hour" + $(this).parent().prev().attr("data-hour"),$(this).parent().prev().val());

})