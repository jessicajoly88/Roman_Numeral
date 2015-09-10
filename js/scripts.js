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
    if (number >= 900) {
      array.push("CM");
      number -= 900;
    } else {
      array.push("D");
      number -= 500;
    }
  }

  while (number >= 100) {
    if (number >=400) {
      array.push("CD");
      number -= 400;
    } else {
      array.push("C");
      number -= 100;
    }
  }

  while (number >= 50) {
    if (number >= 90) {
      array.push("XC");
      number -= 90;
    } else {
      array.push("L");
      number -= 50;
    }
  }

  while (number >= 10) {
    if (number >= 40) {
      array.push("XL");
      number -= 40;
    } else {
      array.push("X");
      number -= 10;
    }
  }

  while (number >= 5) {
    if (number >= 9) {
      array.push("IX");
      number -= 9;
    } else {
      array.push("V");
      number -= 5;
    }
  }

  while (number >= 1) {
    if (number >= 4) {
      array.push("IV");
      number -= 4;
    } else {
      array.push("I");
      number -= 1;
    }
  }
  return array.join('');
};

$(document).ready(function() {
  $('form#roman_Numerical').submit(function(event) {
    var number = parseInt($('input#number').val());
    var result = romanNumeral(number);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
