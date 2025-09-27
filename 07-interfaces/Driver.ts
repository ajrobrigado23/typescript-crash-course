import { Coach } from "./Coach";
import { CricketCoach } from "./CircketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach = new CricketCoach();
console.log(cricketCoach.getDailyWorkout());

let golfCoach = new GolfCoach();
console.log(golfCoach.getDailyWorkout());