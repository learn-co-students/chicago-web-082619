// // arrow functions
// // this in arrow vs es5 funct
// // **passing functions around as arguments (callbacks) and ES6 Iterators (map, reduce, forEach, filter, find, etc)**
// // accessing object keys
// // **Spread Operator**
// // **Rest Operator**
// // **Destructuring **



































// // //-------------------------------
// // // Arrow Functions
// // //-------------------------------

// // when theres one line in the logic body that is returned, you can omit the brackets and return
// // when there is just one argument, you can omit the parens
// function sum(a, b)  {
  // return a + b;
// }

// const sum = (a, b) => {
  // return a + b
// }

// const sum = (a, b) => a + b














// function isPositive(num) {
  // return num > 0;
// }

// const isPositive = num => num > 0













// function randomNum() {
  // return Math.random();
// }

// const randomNum = () =>  {
  // console.log('hi')
  // return Math.random()
// }

















// attributes and abilities

// class Person {
  // constructor(){
    // this.age = 100
    // console.log('in constructor', this)
  // }

  // sayHi(){
    // setInterval(() => {
      // console.log(this.age)
    // }, 1000)
  // }
// }

// var raza = new Person()
// raza.sayHi()














// how to write class methods

/*
class User {
  costructor(first_name){
    this.first_name = first_name
    console.log('hoi')
  }

  // sayHi(){
    // console.log('hello')
  // }

  // sayHello = () => {
    // console.log('hi')
  // }
}

*/









































// // const array1 = [1, 2, 4]

// // let foo = array1.reduce((acc, num) => {return acc + num }, 10)
// // console.log('foo', foo)

// // const bar = [1, 2, 3].filter((num) => num === 2)

// // [2]


// // const bar = [1, 2, 3].filter((num) => num === 2)
// // 2




// // **passing functions around as arguments (callbacks) and ES6 Iterators (map, reduce, forEach, filter, find, etc)**


// // accessing object keys


// let person = {
  // name: 'raza', 
  // age: 29
// }


// person.age  // 29
// person['age'] //29

// console.log(person.age)
// console.log(person['age'])


// let age = 'name'

// console.log(person[age]) //'raza'

















// // //-------------------------------
// // // **Spread Operator**
// // //-------------------------------
// // // add elements of one array to another:


// const foo = [1, 3, 5, 11]


// const odds = [...foo, 13, 15, 19] // [1, 3, 5, 11, 13, 15, 19]

// const odds = [foo, 13, 15, 19] // [[1, 3, 5, 11], 13, 15, 19]


const foo = {name: 'raza'}
const person = {
  ...foo,
  age: 29
}
console.log(person)









// pass elements of an array into a f(x) as args


var nums= [1, 2, 3, 45, 32]

function addEm(x, y, z) {
  console.log(x + y + z)
}

addEm(nums[0], nums[1], nums[2])


addEm(...nums)












// addEm(foo[0], foo[1], foo[2])
// vs.
// addEm(...foo)














// //-------------------------------
// // **Rest Operator**
// //-------------------------------
// // condenses multiple elements into an array



function lotsOfArgs(mainVar, ...theRest){
  console.log('this is mainVar', mainVar);
  console.log('this is rest', theRest);
}


lotsOfArgs(1, 'abc', 24, 'foo', false)













// // assign var assignment from arr 
const colors = ['red', 'white', 'yellow', 'green'];


const [primaryColor, secondaryColor, ...backups] = colors;

console.log('-----------')
console.log(primaryColor)
console.log(secondaryColor) 
console.log(backups) 
console.log('-----------XXX')

















// //-------------------------------
// // **Destructuring
// //-------------------------------


const user = {
  firstName: 'r',
  lastName: 'z',
  age: '100',
  friend: {
    friendName: 'pam'
  }
}



// const firstName = user.firstName
const { firstName, lastName, friend: { friendName }} = user

console.log('-----------')
console.log(firstName)
console.log(lastName)
console.log(friendName)












// function hello(user) {
  // const { age, friend: { friendName } } = user;

  // console.log(age) // 'z'
  // console.log(friendName) // 'pam'
  // console.log(`${user.first_name}, hello`)
// }

// const eggs = {a: 1, b: 2}
// const {a, b} = eggs

// */
















