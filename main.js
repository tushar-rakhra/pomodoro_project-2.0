var wm = parseInt(prompt("Enter minutes to work"));
var wm1 = wm;
var ws = parseInt(prompt("Enter seconds to work"));
var ws1 = ws;
var bm = parseInt(prompt("Enter minutes for break"));
var bm1 = bm;
var bs = parseInt(prompt("Enter seconds for break"));
var bs1 = bs;

function template() {
    document.getElementById("w_minutes").innerHTML = wm;
    document.getElementById("w_seconds").innerHTML = ws;
    
    document.getElementById("b_minutes").innerHTML = bm;
    document.getElementById("b_seconds").innerHTML = bs;
}


var start = document.getElementById("start");
var stop = document.getElementById("stop");


//store ref to timer var

var startTimer;
 
start.addEventListener('click',function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer,1000)
    }else{
        alert('timer is already running');
    }
})





function timer(){
    //work timer
    if(ws != 0) {
        ws--;
        document.getElementById("w_seconds").innerHTML = ws;
    } else if(wm !=0 && ws == 0) {
        wm--;
        ws = 59;
        document.getElementById("w_minutes").innerHTML = wm;
    }

    //break timer
    if(wm == 0 && ws == 0){
        if(bs != 0){
            bs--;
            document.getElementById("b_seconds").innerHTML = bs;
        } else if(bm !=0 && bs == 0) {
            bs = 59;
            bm--;
            document.getElementById("b_minutes").innerHTML = bm;
        }
    }


//increment cycles
if(wm == 0 && ws == 0 && bm ==0 && bs == 0){
    

    document.getElementById("w_minutes").innerHTML = wm1;
    document.getElementById("w_seconds").innerHTML = ws1;    
    document.getElementById("b_minutes").innerHTML = bm1;
    document.getElementById("b_seconds").innerHTML = bs1;
    
    document.getElementById("counter").innerHTML++;

}
}
