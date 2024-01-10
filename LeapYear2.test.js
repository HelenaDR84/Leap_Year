const leapYear = require("./LeapYear2");

test('1997 is not a leap year', () => { 
    expect(leapYear(1997)).toBe(false);
});

test('1996 is a leap year', () => {
    expect(leapYear(1996)).toBe(true);
 });

 test('1600 is a leap year', () => {
    expect(leapYear(1600)).toBe(true);
  });

  test('1800 is not a leap year', () => {
    expect(leapYear(1800)).toBe(false);
  });