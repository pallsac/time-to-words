// expecting time to be a string in the format like '8:15' or '12:30'
const digitToName = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "quarter",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty-one",
  22: "twenty-two",
  23: "twenty-three",
  24: "twenty-four",
  25: "twenty-five",
  26: "twenty-six",
  27: "twenty-seven",
  28: "twenty-eight",
  29: "twenty-nine",
  30: "half"
}

function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  let splitTime = time.split(':')
  let firstHalf = parseInt(splitTime[0])
  let secondHalf = parseInt(splitTime[1])
  let stringTime = ""

  if (firstHalf === 0 && secondHalf === 0){
    return "midnight"
  }
  if (firstHalf === 12 && secondHalf === 0){
    return "midday"
  }
  
  let secondHalfString = String(digitToName[secondHalf]) + " past "
  if (secondHalf > 30) {
    secondHalfString = String(digitToName[60 - secondHalf]) + " to "
    firstHalf = firstHalf + 1
    if (firstHalf === 24){
      firstHalf = 0
    }
  }
  let fristHalfString = String(digitToName[firstHalf])
  if (secondHalf === 0){
    secondHalfString = ""
    fristHalfString = fristHalfString + " o'clock"
  }

  if (firstHalf === 12){
    fristHalfString = "midday"
  }
  
  stringTime = secondHalfString + fristHalfString
  return stringTime;
}

module.exports = { convertTimeToWords };