import { Coach } from "./Coach";
import { CricketCoach } from "./CircketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach: Coach = new CricketCoach();
let golfCoach: Coach = new GolfCoach();

// declare an array for coaches
let coaches: Coach[] = [];

// add the coaches to the array
coaches.push(cricketCoach);
coaches.push(golfCoach);

// loop through the array and print the daily workout for each coach
for (let coach of coaches) {
    console.log(coach.getDailyWorkout());
}