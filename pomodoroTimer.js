var workTime = document.getElementById("work-time");
workTime.setAttribute("style", "font-size : 40px");
var breakTime = document.getElementById("break-time");
breakTime.setAttribute("style", "font-size : 40px");
//set time parameters
var hours = 0;
var mins = 0;
var secs = 0;
//innerHTML part
var work_time = "0" + hours + " : " + "0" + mins + " : " + "0" + secs;
var break_time = "0" + hours + " : " + "0" + mins + " : " + "0" + secs
workTime.innerHTML = "work time " + work_time;
breakTime.innerHTML = "break time " + break_time;
//setTimeOut() method
var WorktimerRUN;
var BreaktimerRUN;
//run variables
var runSec = secs;
var runMin = mins;
//break variables
var breakSec = secs;
var breakMin = mins;
//global function
var timer_is_on_for_work = 0;
var timer_is_on_for_break = 0;
function globalcountforWork(){
    workTime.innerHTML = "work time " + ((hours < 10) ? ("0" + hours) : hours)+ " : " + ((runMin < 10) ? ("0" + runMin) : runMin) + " : " + ((runSec < 10) ? ("0" + runSec) : runSec);
    runSec += 1;
    if (runSec == 59) {
        runMin += 1;
        runSec = 0
    }
    if (runMin == 59) {
        hours += 1;
        runMin = 0
    }
    WorktimerRUN = setTimeout(function(){globalcountforWork()}, 1000)
} 
function globalcountforBreak(){
    clearTimeout(WorktimerRUN);
    breakTime.innerHTML = "break time " + ((hours < 10) ? ("0" + hours) : hours)+ " : " + ((breakMin < 10) ? ("0" + breakMin) : breakMin) + " : " + ((breakSec < 10) ? ("0" + breakSec) : breakSec);
    breakSec += 1;
    if (breakSec == 59) {
        breakMin += 1;
        breakSec = 0
    }
    if (breakMin == 59) {
        hours += 1;
        breakMin = 0
    }
    BreaktimerRUN = setTimeout(function() {globalcountforBreak()}, 1000)
}
function runTime(){
    if(!timer_is_on_for_work){
        timer_is_on_for_work = 1;
        globalcountforWork();
    }
}
function breaktimer(){
    if(!timer_is_on_for_break){
        timer_is_on_for_break = 1;
        globalcountforBreak();
    }
    else{
        globalcountforBreak();
    }
}
function resumeTime() {
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN)    
    globalcountforWork();
}
function endTime() {
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN);
    mins = 0;
    secs = 0;
    breakSec=0;
    runSec = 0;
    timer_is_on_for_break = 0;
    timer_is_on_for_work = 0;
    workTime.innerHTML = "work time " + "0" + hours + " : " + "0" + mins + " : " + "0" + secs;
    breakTime.innerHTML = "break time " + "0" + hours + " : " + "0" + mins + " : " + "0" + secs;
}