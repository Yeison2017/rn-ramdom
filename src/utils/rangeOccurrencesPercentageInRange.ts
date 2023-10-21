export const calculateRangeOccurrencesPercentageInRange = (
  arrayOfArrays: number[][]
) => {
  let totalArrays = arrayOfArrays.length;
  const rangeStart = 5;
  const rangeEnd = 43;

  const result: { [key: string]: number } = {};

  for (let i = rangeStart; i <= rangeEnd; i++) {
    let totalInRange = 0;

    arrayOfArrays.forEach((array) => {
      const range = array.slice(0, 5); // Posiciones 0 a 4
      const isInRange = range.every((num) => num <= i);

      if (isInRange) {
        totalInRange++;
      }
    });

    result[`LessThanOrEqual${i}`] = (totalInRange / totalArrays) * 100;
  }

  return result;
};
