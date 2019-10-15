function reduce(srcArr, callbackFunct, startingPoint=undefined){
  if (startingPoint) {
    let acc = startingPoint;
    let newSrcArr = srcArr
  }else {
    let acc = srcArr[0];
    let newSrcArr = srcArr.slice(1)
  }

  newSrcArr.forEach((element) => {
    acc = callbackFunct(acc, element)
  })
  return acc
}



function reduceToTtlCallback(accumulator, el){
  return accumulator + el;
}

function reduceToAllTrueCallback(accumulator, el){
}

let foo = reduce(0, [1, 2, 3, 4], reduceToTtlCallback)
console.log(foo)




let bar= reduce([true, true, true], reduceToTtlCallback, true)
let baz= reduce([true, false, true], reduceToTtlCallback, true)

  /*



















function reduceToTotalCallback(accumulator, element){
  return accumulator + element
}

function reduceToAllTrueCallback(accumulator, element){
  return accumulator && element 
}

function reduceToAnyTrueCallback(accumulator, element){
  return accumulator || element 
}

let x = reduce(0, [1, 2, 3, 4], reduceToTotalCallback)

let y = reduce(false, [true, true, true, true], reduceToAnyTrueCallback)
let z = reduce(false, [false, true, false, false], reduceToAnyTrueCallback)
let r = reduce(false, [false, false, false, false], reduceToAnyTrueCallback)

console.log(y)
console.log(z)

console.log(r)




function reduceToTotal(src, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < src.length; i++ ) {
    total = total + src[i]
  }
  return total
}

function reduceToAllTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (!src[i]) return false
  }
  return true
}

function reduceToAnyTrue(src) {
  for (let i = 0; i < src.length; i++ ) {
    if (src[i]) return true
  }
  return false
}
*/
