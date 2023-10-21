/**
 * Calcula el porcentaje de números pares e impares en una posición específica (la sexta posición) de los arreglos en un arreglo de arreglos.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números cuya sexta posición se evaluará para calcular los porcentajes de pares e impares.
 * @returns {{ even: number, odd: number }} - Un objeto que muestra los porcentajes de números pares e impares en la sexta posición de los arreglos.
 */
export const calculateParityPercentageInPosition = (
  arrayOfArrays: number[][]
) => {
  let totalArrays = arrayOfArrays.length;
  let totalEvenCount = 0;
  let totalOddCount = 0;

  arrayOfArrays.forEach((array) => {
    const num = array[5]; // Sexta posición
    if (num % 2 === 0) {
      totalEvenCount++;
    } else {
      totalOddCount++;
    }
  });

  const evenPercentage = (totalEvenCount / totalArrays) * 100;
  const oddPercentage = (totalOddCount / totalArrays) * 100;

  return {
    even: evenPercentage, // par
    odd: oddPercentage, // impar
  };
};
