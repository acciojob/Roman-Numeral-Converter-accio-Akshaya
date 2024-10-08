function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let romanNumeral = '';
    const romanPairs = [
        ['CM', 900], ['CD', 400],  // 900 and 400
        ['XC', 90], ['XL', 40],    // 90 and 40
        ['IX', 9], ['IV', 4]       // 9 and 4
    ];

    // Handle special subtractive cases first
    romanPairs.forEach(([symbol, value]) => {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    });

    // Handle remaining values using the provided symbols
    for (let i = 0; i <= 6; i++) {
        while (num >= obj[i][1]) {
            romanNumeral += obj[i][0];
            num -= obj[i][1];
        }
    }

    return romanNumeral;
}

// Test cases
console.log(convertToRoman(14));  // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII


// do not edit below this line
module.exports = convertToRoman
