

// logStuff = function(number) {
//   console.log(`I WANT TO EAT ${number} PANCAKES PER HOUR`)
// }
//
// array = [1, 2, 3, 4, 6, 7, 8]
// console.log(array)
// array.forEach(logStuff)

// function isCallBackTrue(callbackFn) {
//   if (callbackFn()) {
//     return 'TRUE!'
//   } else {
//     return 'FALSE!'
//   }
// }
//
// twoTwosIsFour = function() {
//   return 2 * 2 == 6
// }
//
// console.log(isCallBackTrue(twoTwosIsFour))

// numAdder = function(x) {
//   const add = function(y) {
//     console.log("in the add function with: ", y)
//     return x + y
//   }
//
//   return add
// }
//
// addFive = numAdder(5)
//
// console.log(addFive(6))


chair = {name: "chair"}

table = {name: "table"}

brokenPlate = {status: "not good"}

myColor = "purple"

myCondition = "new"

mySize = "colossal"

sayName = function(color, condition, size, punctuation) {
  console.log(this)
  console.log(`I am a ${size} ${condition} ${color} ${this.name}${punctuation}`)
}

sayName.call(chair, myColor, myCondition, mySize, "!!!")
//
// args = [myColor, myCondition, mySize, "!!!"]
// sayName.apply(chair, args)

// greet = function() {
//   return `Hello my name is ${this.name}`
// }
//
// patton = {name: "Patton"}
//
// rex = {name: "Rex"}
//
// pattonGreet = greet.bind(patton)
//
// console.log(pattonGreet())
//
// pattonGreet.bind(rex)
//
// console.log(pattonGreet())

arrowWrapper = function() {
  console.log(this)


  const arrowFn = () => {
    console.log(this)
    return 'I am an arrow function!'
  }

  arrowFn()
}

console.log(arrowWrapper.call(chair))


const iifeVal = (function myIIFE() {
  console.log('immediately invoked!')
  return 'hi'
})()

// console.log(myIIFE)


// forEach passing function definition
let arr = [1, 2, 3, 4, 5];
arr.forEach(num => console.log(num))
// => 1
// => 2
// => 3
// => 4
// => 5

// forEach passing function by reference
arr.forEach(console.log);
// => 1 0 (5) [1, 2, 3, 4, 5]
// => 2 1 (5) [1, 2, 3, 4, 5]
// => 3 2 (5) [1, 2, 3, 4, 5]
// => 4 3 (5) [1, 2, 3, 4, 5]
// => 5 4 (5) [1, 2, 3, 4, 5]

// map passing function definition
let numsTimesThree = arr.map(num => num * 3);
numsTimesThree; // => [3, 6, 9, 12, 15]

// filter passing function definition
let numsLessThanTen = numsTimesThree.filter(num => num < 10);
numsLessThanTen; // => [3, 6, 9]

// reduce passing function definition
let sum = numsLessThanTen.reduce((acc, val, ind) => acc + val);
sum; // => 18

// All of the above chained together
val = arr.map(num => num * 3)
.filter(num => num < 10)
.reduce((acc, val, ind) => acc + val)
// => 18

console.log(val)
