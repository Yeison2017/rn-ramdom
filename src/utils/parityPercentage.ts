/**
 * Calcula el porcentaje de números pares e impares en un arreglo de arreglos, donde cada posición de los arreglos internos se evalúa.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números cuyos porcentajes de pares e impares se calcularán.
 * @returns {{ even: number, odd: number }} - Un objeto que muestra los porcentajes de números pares e impares en el arreglo de arreglos.
 */
export const calculateParityPercentage = (arrayOfArrays: number[][]) => {
  let totalArrays = arrayOfArrays.length;
  let totalEvenCount = 0;
  let totalOddCount = 0;

  arrayOfArrays.forEach((array) => {
    let evenCount = 0;
    let oddCount = 0;

    array.forEach((num) => {
      if (num % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    });

    totalEvenCount += evenCount;
    totalOddCount += oddCount;
  });

  const evenPercentage = (totalEvenCount / (totalArrays * 6)) * 100;
  const oddPercentage = (totalOddCount / (totalArrays * 6)) * 100;

  return {
    even: evenPercentage, // par
    odd: oddPercentage, // impar
  };
};
