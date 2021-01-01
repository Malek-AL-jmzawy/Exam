/*

PART 4 [Problem Solving]:
Solve the question below:

Write a isABalancedString function that takes a string as an input, 
return 'YES' if the parentheses in the input string are balanced,
return 'NO' if the parentheses in the input string are not balanced,. 

*/

console.log('PART 4');

const isABalancedString = (str) => {
  // WRITE YOUR CODE BELOW THIS LINE
  const arr =str.split("")
  var sqr=0
  var sqrClose=0
  var para=0
  var paraClose=0
  var carly=0
  var carlyClose=0
  // for (let i = 0; i < arr.length; i++) {  
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]==="]") {
        sqrClose++
      }
      if (arr[j]==="[") {
        sqr++
      }
      if (arr[j]==="}") {
        carlyClose++
      }
      if (arr[j]==="{") {
        carly++
      }
      if (arr[j]===")") {
        paraClose++
      }
      if (arr[j]==="(") {
        para++
      }
    // }  
    
  }
  if (sqr===sqrClose&&para===paraClose&&carly===carlyClose) {
    console.log(true);
  }else{
    console.log(false);
  }
};

/*

Examples:

isABalancedString( '[]' )
=> YES

isABalancedString( '[{()}]' )
=> YES

isABalancedString( '[()]{}{()()}' )
=> YES

isABalancedString( '[{()}])' )
=> NO

isABalancedString( '({()}])' )
=> NO

isABalancedString( '[{)]({()(})' )
=> NO

isABalancedString( '[(){([])[}]()]' )
=> NO

isABalancedString( '[(){([])}({){}}]' )
=> NO

isABalancedString( '[(){([])})' )
=> NO

*/
