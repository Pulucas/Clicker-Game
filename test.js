// This is where I learn with experimenting
// When I find something on the internet and want to learn more
// Or i'm testing something I already know to make sure it works properly
// This is where I put that code
// I don't label this stuff, so you might not find it in the final code

var newValue = 1.15;
function SetTo5(varString) {
  return eval(varString *= newValue);
}
console.log(Math.ceil(SetTo5(17.25)))

console.log(8%1)

let time = 1
let newInterval = setInterval(() => {
  console.log(time, "seconds have passed")
  time += 1
}, 1000)

function setIntervals() {

console.log("interval cleared")

time = 1

clearInterval(newInterval)

newInterval = setInterval(() => {
  console.log(time, "seconds have passed")
  time += 1
}, 1000)

}

setTimeout(() => setIntervals(), 2300)

// Having trouble when cps is set to 0
console.log("1/0 =", 1/0)
// Apparently "1/0 = Infinity" to JS
// https://stackoverflow.com/questions/53129908/why-is-1-0-infinity-and-1-0-infinity

let newIntervall = null
clearInterval(newIntervall)

// console.log(setInterval(() => {null}, 400))

console.log(1/3 === 0.3)
console.log(2.400000000000001%1)