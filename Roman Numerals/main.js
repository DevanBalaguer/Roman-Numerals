function convertToRoman(num) {
    //assign letters
    let romanLetters = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
  // make result a string
    let result = '';
  
  //see how many symbols are repeated
    for (const property in romanLetters ) {
      result += property.repeat(Math.floor(num / romanLetters[property]));
  //change num to romanletters
    num %= romanLetters[property]};
  
   return result;
  }
  
  console.log(convertToRoman(36));