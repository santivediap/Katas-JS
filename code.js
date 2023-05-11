// https://www.codewars.com/kata/59f7fc109f0e86d705000043/javascript
// function divisibleByThree(str){
  
//   let fixedStr = str.split()

//   let reducedNumbers = fixedStr.reduce((pVal, cVal) => pVal + cVal)
//   let result = reducedNumbers / 3;

//   return Math.floor(result) == result
// }

// https://www.codewars.com/kata/56b22765e1007b79f2000079/train/javascript

function isNarcissistic(n) {
    let stringNumber = `${n}`

    let fixedArray = [];

    for(let i = 0; i < stringNumber.length; i++) {
        fixedArray.push(stringNumber[i]);
    }

    let result = fixedArray.map(num => num ** fixedArray.length).reduce((pV, cV) => pV += cV);

    return result == n
  }