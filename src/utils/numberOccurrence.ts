type NumberOccurrences = Record<number, number>;
/**
 * Cuenta las ocurrencias de números en un arreglo bidimensional y devuelve un objeto que muestra el número de ocurrencias de cada número.
 *
 * @param {number[][]} historical - Arreglo bidimensional que contiene números a contar.
 * @returns {NumberOccurrences} - Un objeto que muestra las ocurrencias de cada número.
 */
const countOccurrences = (historical: number[][]): NumberOccurrences => {
  const result: NumberOccurrences = {};

  historical.forEach((arr) => {
    arr.forEach((num, index) => {
      if (result[num] === undefined) {
        result[num] = 0;
      }
      result[num]++;
    });
  });

  return result;
};

export const calculatePercentage = (
  historical: number[][]
): NumberOccurrences => {
  const totalCount = historical.reduce((total, arr) => total + arr.length, 0);
  const _countOccurrences = countOccurrences(historical);

  const percentageOccurrences: NumberOccurrences = {};

  for (const num in _countOccurrences) {
    if (_countOccurrences.hasOwnProperty(num)) {
      const count = _countOccurrences[num];
      const percentage = (count / totalCount) * 100;
      percentageOccurrences[parseInt(num)] = percentage;
    }
  }

  return percentageOccurrences;
};
