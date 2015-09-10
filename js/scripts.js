var romanNumeral = function(number) {


  var symbols = {"I":1, "V":5, "X":10, "L":50, "C":100, "D":500, "M":1000};

  for(var key in symbols){
    if (symbols[key] === number){
      return key;
    };
  };

};
