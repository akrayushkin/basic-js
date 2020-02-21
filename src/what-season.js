module.exports = function getSeason(date) {
	if (!date) return 'Unable to determine the time of year!';
  if (!{}.toString.call(date).includes('Date')) {
    throw new Error('Invalid argument');
  }
  const month = date.getMonth();
  return month > 1 && month < 5 ? 'spring' :
  	month > 4 && month < 8 ? 'summer' :
  	month > 7 && month < 11 ? 'autumn' : 'winter';
};
