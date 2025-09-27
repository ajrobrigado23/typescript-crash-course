"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CircketCoach_1 = require("./CircketCoach");
const GolfCoach_1 = require("./GolfCoach");
let cricketCoach = new CircketCoach_1.CricketCoach();
console.log(cricketCoach.getDailyWorkout());
let golfCoach = new GolfCoach_1.GolfCoach();
console.log(golfCoach.getDailyWorkout());
