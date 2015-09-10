var romanNumeral = function(number) {
  var symbols = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};
  var array = [];

  for(var key in symbols){
    if (symbols[key] === number){
      return key;
    };
  };

  while (number >= 1000) {
    array.push("M");
    number -= 1000;
  }
  while (number >= 500) {
    array.push("D");
    number -= 500;
  }
  while (number >= 100) {
    array.push("C");
    number -= 100;
  }
  while (number >= 50) {
    array.push("L");
    number -= 50;
  }
  while (number >= 10) {
    array.push("X");
    number -= 10;
  }
  while (number >= 5) {
    array.push("V");
    number -= 5;
  }
  while (number >= 1) {
    array.push("I");
    number -= 1;
  }
  return array.join('');
};
