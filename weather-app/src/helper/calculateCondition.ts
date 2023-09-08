export function calculateCondition(percentage: number): string {
  if (percentage < 0 || percentage > 100) {
    return 'Percentage out of valid range (0 to 100).';
  }

  const conditions = {
    0: 'clear',
    20: 'few-clouds',
    40: 'cloudy',
    60: 'rain',
    80: 'snow',
    100: 'storm',
  };

  // Find the closest condition
  let minDifference = Infinity;
  let correspondingCondition = '';

  for (const percentageValue in conditions) {
    const difference = Math.abs(+percentageValue - percentage);
    if (difference < minDifference) {
      minDifference = difference;
      //ts-ignore
      correspondingCondition = conditions[`${percentageValue}`];
    }
  }

  return correspondingCondition;
}