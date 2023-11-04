var input = document.getElementById("input");
var calc = document.getElementById("calc");
var erase = document.getElementById("erase");
var clear = document.getElementById("clear");
var buttons = document.querySelector(".buttons")

buttons.addEventListener("click",function(events){

    if(events.target.value !== "=" && events.target.value !== "C" && events.target.value !== undefined){
        input.value += events.target.textContent;
    }

 
});

calc.addEventListener("click",function(){
    if(input.value != ""){
        input.value = eval(input.value)
    }
})

clear.addEventListener("click",function(){
    input.value = "";
})

erase.addEventListener("click",function(){
    input.value = input.value.slice(0, -1);
})