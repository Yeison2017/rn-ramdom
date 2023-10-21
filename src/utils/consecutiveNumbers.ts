/**
 * Cuenta la cantidad de secuencias consecutivas de números de una longitud dada en un arreglo.
 *
 * @param {number[]} array - Arreglo de números en el que se buscarán secuencias consecutivas.
 * @param {number} length - Longitud de las secuencias consecutivas a buscar.
 * @returns {number} - La cantidad de secuencias consecutivas encontradas en el arreglo.
 */
const countConsecutiveNumbers = (array: number[], length: number) => {
  let count = 0;

  for (let i = 0; i < array.length - length + 1; i++) {
    const subArray = array.slice(i, i + length);
    const isConsecutive = subArray.every(
      (num, index) => num === array[i] + index
    );
    if (isConsecutive) {
      count++;
    }
  }

  return count;
};

/**
 * Calcula el porcentaje de secuencias consecutivas de longitud 2 y 3 en todos los subarreglos de una matriz de números.
 *
 * @param {number[][]} arrayOfArrays - Matriz que contiene subarreglos de números en los que se buscarán secuencias consecutivas.
 * @returns {{ twoConsecutive: number, threeConsecutive: number }} - Un objeto que muestra el porcentaje de secuencias consecutivas de longitud 2 y 3 en todos los subarreglos.
 */
export const calculateConsecutiveNumbersPercentageInAllArrays = (
  arrayOfArrays: number[][]
) => {
  const totalArrays = arrayOfArrays.length;
  let totalTwoConsecutiveCount = 0;
  let totalThreeConsecutiveCount = 0;

  arrayOfArrays.forEach((array) => {
    const twoConsecutiveCount = countConsecutiveNumbers(array, 2);
    const threeConsecutiveCount = countConsecutiveNumbers(array, 3);
    totalTwoConsecutiveCount += twoConsecutiveCount;
    totalThreeConsecutiveCount += threeConsecutiveCount;
  });

  const totalElements = totalArrays * 6; // Total de elementos en todos los arrays

  return {
    twoConsecutive: (totalTwoConsecutiveCount / totalElements) * 100,
    threeConsecutive: (totalThreeConsecutiveCount / totalElements) * 100,
  };
};
