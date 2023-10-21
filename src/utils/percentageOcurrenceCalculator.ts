// percentageOcurrenceCalculator
type SubArray = [number, number, number, number, number, number];

type Result = {
  position0: number;
  position4: number;
  percentage: number;
}[];

export const percentageOcurrenceCalculator = (data: SubArray[]): Result => {
  const maxRange = 43;
  const results: Result = [];

  for (let i = 1; i <= maxRange; i++) {
    for (let j = i + 1; j <= maxRange; j++) {
      const filteredData = data.filter((item) => {
        const firstValue = item[0];
        const fifthValue = item[4];
        return firstValue >= i && fifthValue <= j;
      });

      const percentage = (filteredData.length / data.length) * 100;

      const roundedPercentage = parseFloat(percentage.toFixed(2));
      results.push({
        position0: i,
        position4: j,
        percentage: roundedPercentage,
      });
    }
  }

  results.sort((a, b) => a.percentage - b.percentage);

  return results;
};

export const findPercentageGreaterThanOrEqualToTwo = (
  data: SubArray,
  results: Result
): boolean => {
  const position0 = data[0];
  const position4 = data[4];

  const matchingResult = results.find(
    (result) => result.position0 === position0 && result.position4 === position4
  );

  if (matchingResult && matchingResult.percentage >= 2) {
    return true;
  } else {
    return false;
  }
};
