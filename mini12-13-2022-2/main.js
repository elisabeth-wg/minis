// Race Day
// Codecademy’s annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

// As a timeline, registration would look like this:registration-timeline

// Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

// Race number:

// Early adults receive a race number at or above 1000.
// All others receive a number below 1000.
// Start time:

// Adult registrants run at 9:30 am or 11:00 am.
// Early adults run at 9:30 am.
// Late adults run at 11:00 am.
// Youth registrants run at 12:30 pm (regardless of registration).

let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true
let runnersAge = 25

if(registeredEarly && runnersAge > 18) {
   raceNumber += 1000
}

if(registeredEarly && runnersAge > 18) {
  console.log(`Your race is at 9:30 am. Your number is ${raceNumber}. Good luck!`)
} else if(!registeredEarly && runnersAge > 18) {
  console.log(`Your race is at 11:00 am. Your number is ${raceNumber}. Good luck!`)
} else if(runnersAge < 18) {
  console.log(`Your race is at 12:30 pm. Your number is ${raceNumber}. Good luck!`)
} else {
  console.log(`Please see the registration desk for your race time and number. Thank you.`)
}