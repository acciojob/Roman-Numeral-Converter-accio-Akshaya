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
        ['CM', 900], ['CD', 400],  
        ['XC', 90], ['XL', 40],    
        ['IX', 9], ['IV', 4]       
    ];

    
    while (num >= 1000) {
        romanNumeral += 'M';
        num -= 1000;
    }


    romanPairs.forEach(([symbol, value]) => {
        while (num >= value) {
            romanNumeral += symbol;
            num -= value;
        }
    });

    
    for (let i = 0; i <= 6; i++) {
        while (num >= obj[i][1]) {
            romanNumeral += obj[i][0];
            num -= obj[i][1];
        }
    }

    return romanNumeral;
}

// Test the function
console.log(convertToRoman(98765));


// do not edit below this line
module.exports = convertToRoman
