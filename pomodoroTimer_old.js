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
//functions
function runTime() {
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN);

    runSec += 1;
    if (runSec == 59) {
        runMin += 1;
        runSec = 0
    }
    if (runMin == 59) {
        hours += 1;
        runMin = 0
    }
    work_time = ((hours < 10) ? ("0" + hours) : hours) + " : " + ((runMin < 10) ? ("0" + runMin) : runMin) + " : " + ((runSec < 10) ? ("0" + runSec) : runSec);
    workTime.innerHTML = "work time " + work_time;
    WorktimerRUN = setTimeout(function () { runTime() }, 1000)
}
function breaktimer(){
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN); 
    breakSec += 1;
    if (breakSec == 59) {
        breakMin += 1;
        breakSec = 0
    }
    if (breakMin == 59) {
        hours += 1;
        breakMin = 0
    }
    break_time = ((hours < 10) ? ("0" + hours) : hours) + " : " + ((breakMin < 10) ? ("0" + breakMin) : breakMin) + " : " + ((breakSec < 10) ? ("0" + breakSec) : breakSec);
    breakTime.innerHTML = "break time "+ break_time;
    BreaktimerRUN = setTimeout(function() {breaktimer()}, 1000)
}
function resumeTime() {
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN);    
    runTime();
}
function endTime() {
    clearTimeout(BreaktimerRUN);
    clearTimeout(WorktimerRUN);
    mins = 0;
    secs = 0;
    breakSec=0;
    runSec = 0;
    workTime.innerHTML = "work time " + "0" + hours + " : " + "0" + mins + " : " + "0" + secs;
    breakTime.innerHTML = "break time " + "0" + hours + " : " + "0" + mins + " : " + "0" + secs;
}