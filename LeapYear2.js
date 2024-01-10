function leapYear2(year) {
   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
};

module.exports = leapYear2;