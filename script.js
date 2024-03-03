function convertToRoman(num) {
   const symbols = [
    ['M', 1000],
    ['D', 500],
    ['C', 100],
    ['L', 50],
    ['X', 10],
    ['V', 5],
    ['I', 1]
  ];

  let result = "";

  for (let [symbol, value] of symbols) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  result = result.replace("DCCCC", "CM")
                 .replace("CCCC", "CD")
                 .replace("LXXXX", "XC")
                 .replace("XXXX", "XL")
                 .replace("VIIII", "IX")
                 .replace("IIII", "IV");

  console.log(result);
  return  result ;
}
module.exports = convertToRoman;
//console.log(convertToRoman(36));
