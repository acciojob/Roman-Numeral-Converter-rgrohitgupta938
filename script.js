function convertToRoman(num) {
  let obj = {
    0: ["M", 1000],
    1: ["D", 500],
    2: ["C", 100],
    3: ["L", 50],
    4: ["X", 10],
    5: ["V", 5],
    6: ["I", 1],
  };

  let result = "";
  for (let [symbol, value] of Object.entries(obj)) {
    while (num >= value[1]) {
      console.log(symbol, value, result);
      result += value[0];
      num -= value[1];
    }
  }
	result = result.replace("IIII", "IV")
                 .replace("VIIII", "IX")
                 .replace("LXXXX", "XC")
                 .replace("DCCCC", "CM");
  console.log(result);
  return  result ;
}
module.exports = convertToRoman;
//console.log(convertToRoman(36));
