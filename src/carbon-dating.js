const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = +Math.log(2).toFixed(3);

module.exports = function dateSample(sampleActivity) {
  const sampleСontent = parseFloat(sampleActivity);
  return (sampleСontent <= 0 || sampleСontent > MODERN_ACTIVITY || isNaN(sampleСontent) || typeof sampleActivity !== "string") ? false : Math.ceil(Math.log(MODERN_ACTIVITY / sampleСontent) / ( k / HALF_LIFE_PERIOD));
};
