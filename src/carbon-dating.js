const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (isNaN(sampleActivity) || typeof sampleActivity !== 'string' || +sampleActivity <= 0 || +sampleActivity > 15) return false;
  
  const doubleNumber = parseFloat(sampleActivity);
  const log = 0.693 / HALF_LIFE_PERIOD;
  const total = Math.ceil((Math.log(MODERN_ACTIVITY / doubleNumber)) / log);

  return total;
};
