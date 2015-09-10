describe("romanNumeral", function() {
  it('inputs roman numeral value and returns equivalent roman numeral', function() {
    expect(romanNumeral(5)).to.equal("V");
  });

  it('input value and returns up to three roman numeral symbols', function() {
    expect(romanNumeral(6)).to.equal("VI");
  });
});
