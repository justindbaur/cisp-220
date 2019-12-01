/* 
   Murfreesboro Regional Soccer League
   Filename: script.js

   Author: Justin Baur  
   Date: 12/1/2019     
   HTML5 and CSS3 Illustrated Unit M, Independent Challenge 2
 */

//  create variables
var redButton = document.getElementsByClassName('red-team-button')[0];
var blueButton = document.getElementsByClassName('blue-team-button')[0];
var greenButton = document.getElementsByClassName('green-team-button')[0];
var yellowButton = document.getElementsByClassName('yellow-team-button')[0];
var redSchedule = document.getElementsByClassName('red-team-schedule')[0];
var blueSchedule = document.getElementsByClassName('blue-team-schedule')[0];
var greenSchedule = document.getElementsByClassName('green-team-schedule')[0];
var yellowSchedule = document.getElementsByClassName('yellow-team-schedule')[0];


// function that will show read team schedule and hide others
function showRed() {
    redSchedule.className = "red-team-schedule show";
    blueSchedule.className = "blue-team-schedule";
    greenSchedule.className = "green-team-schedule";
    yellowSchedule.className = "yellow-team-schedule";
}


// function that will show read team schedule and hide others
function showBlue() {
    redSchedule.className = "red-team-schedule";
    blueSchedule.className = "blue-team-schedule show";
    greenSchedule.className = "green-team-schedule";
    yellowSchedule.className = "yellow-team-schedule";
}

// function that will show read team schedule and hide others
function showGreen() {
    redSchedule.className = "red-team-schedule";
    blueSchedule.className = "blue-team-schedule";
    greenSchedule.className = "green-team-schedule show";
    yellowSchedule.className = "yellow-team-schedule";
}

// function that will show read team schedule and hide others
function showYellow() {
    redSchedule.className = "red-team-schedule";
    blueSchedule.className = "blue-team-schedule";
    greenSchedule.className = "green-team-schedule";
    yellowSchedule.className = "yellow-team-schedule show";
}

// add event listeners
redButton.onclick = showRed;
blueButton.onclick = showBlue;
greenButton.onclick = showGreen;
yellowButton.onclick = showYellow;