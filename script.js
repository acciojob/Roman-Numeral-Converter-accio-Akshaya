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


console.log(convertToRoman(36));

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
