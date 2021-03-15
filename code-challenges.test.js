// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it, expect } = require("@jest/globals")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variable provided.


describe('When spyifyWords is called',() => {
  it('returns vowels turned into letters when a string is passed', () => {
    var secretCodeWord1 = "lackadaisical"
    
    expect(spyifyWords(secretCodeWord1)).toEqual("l4ck4d41s1c4l")
  }) 
  it('returns vowels turned into letters when a string is passed', () => {
    var secretCodeWord2 = "gobbledygook"
    
    expect(spyifyWords(secretCodeWord2)).toEqual("g0bbl3dyg00k")
  })
})


// b) Create the function that makes the test pass.

const spyifyWords = (string) => {
  let replacements = ['4', '3', '1', 0]
  return string.split('').map(value => {
    return (value === 'a') ? replacements[0] : 
           (value === 'e') ? replacements[1] :
           (value === 'i') ? replacements[2] :
           (value === 'o') ? replacements[3] : value
  }).join('')
}



// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.


describe('When containsA is called', () => {
  it('returns words containing the letter a when an array is passed', () => {
    var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
    // Expected output: ["Apple", "Banana", "Peach"]
    expect(containsA(arrayOfWords)).toEqual(["Apple", "Banana", "Peach"])
  })
})


// b) Create the function that makes the test pass.

// (works)
// const containsA = (array) => {
//   return array.filter(value => {
//     return value.toLowerCase().includes('a')
//   })
// }


// trying implicit rerturn on filter (works)
// const containsA = (array) => {
//   return array.filter(value => value.toLowerCase().includes('a'))
// }

// trying implicit return on arrow function 
const containsA = (array) => array.filter(value => value.toLowerCase().includes('a'))


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.


describe('When isFullHouse is called', () => {
  it('returns a boolean value when an array of 5 is passed', () => {
    var hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    
    expect(isFullHouse(hand1)).toEqual(true)
  })
  it('returns a boolean value when an array of 5 is passed', () => {
    var hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    
    expect(isFullHouse(hand2)).toEqual(false)
  })
  it('returns a boolean value when an array of 5 is passed', () => {
    var hand3 = [5, 5, 5, 5, 4]
    // Expected output: false

    expect(isFullHouse(hand3)).toEqual(false)
  })
})


// b) Create the function that makes the test pass.

// sort array 
// add them up 
// if number is equal to first cubed and last doubled and added 
// return true 

// const isFullHouse = (array) => {
//   let num1 = array.sort().pop()
//   let num2 = array.sort().shift()
//   if num 
//   let num3 = num1 + num1 + num1
// }
// this thinking is flawed in that the it could be [x,x,z,z,z] might return


// sort the array
// find one number and find another number
// filter to return subsets of that array
// if ones has three and the other has two then its true 



// const isFullHouse = (array) => {
//   let num1 = (array.sort())[0]
//   let num2 = (array.sort())[array.length - 1]
//   let subset1 = array.filter(value => value === num1)
//   let subset2 = array.filter(value => value === num2)
//   return (subset1.length === subset2.length) ? 
//     false :
//     (subset1.length === 2 || subset1.length === 3) && (subset2.length === 2 || subset2.length === 3)
// }

const isFullHouse = (array) => {
  if(array.length != 5){
    return false
  } else {
    let num1 = (array.sort())[0]
    let num2 = (array.sort())[array.length - 1]
    let subset1 = array.filter(value => value === num1).length
    let subset2 = array.filter(value => value === num2).length
    return (subset1 === subset2) 
              ? false 
              : (subset1 === 2 || subset1 === 3) && (subset2 === 2 || subset2 === 3)
  }
}

console.log(isFullHouse(['A', 2, 3, 4, 5, 6]))
console.log(isFullHouse([4, 2, 2, 2, 5, 5]))
console.log(isFullHouse([4, 2, 2, 2]))