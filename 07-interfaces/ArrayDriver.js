"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CircketCoach_1 = require("./CircketCoach");
const GolfCoach_1 = require("./GolfCoach");
let cricketCoach = new CircketCoach_1.CricketCoach();
let golfCoach = new GolfCoach_1.GolfCoach();
// declare an array for coaches
let coaches = [];
// add the coaches to the array
coaches.push(cricketCoach);
coaches.push(golfCoach);
// loop through the array and print the daily workout for each coach
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}
