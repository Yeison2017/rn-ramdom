/**
 * Cuenta la ocurrencia de números en un arreglo de arreglos y devuelve un objeto que muestra la cantidad de ocurrencias de cada número en cada posición de los arreglos internos.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números a contar.
 * @returns {Object<number, number[]>} - Un objeto que muestra las ocurrencias de cada número en cada posición de los arreglos internos.
 */
const countNumbersInArrays = (arrayOfArrays: number[][]) => {
  const result: { [key: number]: number[] } = {};

  arrayOfArrays.forEach((array) => {
    array.forEach((num, index) => {
      if (!result[num]) {
        result[num] = new Array(6).fill(0);
      }
      result[num][index]++;
    });
  });

  return result;
};

/**
 * Calcula el porcentaje de ocurrencia de números en un arreglo de arreglos en cada posición de los arreglos internos.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números cuyos porcentajes se calcularán.
 * @returns {Object<number, number[]>} - Un objeto que muestra los porcentajes de ocurrencia de cada número en cada posición de los arreglos internos.
 */
export const calculatePercentageInArrays = (arrayOfArrays: number[][]) => {
  const countResult = countNumbersInArrays(arrayOfArrays);
  const totalArrays = arrayOfArrays.length;
  const percentageResult: { [key: number]: number[] } = {};

  for (const num in countResult) {
    percentageResult[num] = countResult[num].map(
      (count) => (count / totalArrays) * 100
    );
  }

  return percentageResult;
};
