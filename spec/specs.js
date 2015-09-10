describe("romanNumeral", function() {
  it('inputs roman numeral value and returns equivalent roman numeral', function() {
    expect(romanNumeral(5)).to.equal("V");
  });

  it('generate roman numeral symbols that represent entered number', function() {
    expect(romanNumeral(6)).to.equal("VI");
  });

  it('returns up to three repetitive symbols within the total roman numeral symbols that represent entered number', function() {
    expect(romanNumeral(9)).to.equal("IX");
  });
});
