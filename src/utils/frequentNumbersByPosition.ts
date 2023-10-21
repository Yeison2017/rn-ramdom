import { calculatePercentageInArrays } from "./numberArray";

/**
 * Calcula los números más frecuentes en cada posición de los subarreglos, basado en los porcentajes calculados.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de subarreglos de números.
 * @returns {number[]} - Un arreglo que contiene los números más frecuentes en cada posición.
 */
export const getMostFrequentNumbersByPosition = (arrayOfArrays: number[][]) => {
  // Obtén los porcentajes de ocurrencia de cada número en cada posición
  const percentageResult = calculatePercentageInArrays(arrayOfArrays);

  const mostFrequentNumbers: number[] = [];

  // Itera a través de las posiciones (0 a 5)
  for (let position = 0; position < 6; position++) {
    let mostFrequentNumber = -1; // Valor inicial
    let highestPercentage = 0; // Valor inicial del porcentaje más alto

    // Itera a través de los números y sus porcentajes en la posición actual
    for (const num in percentageResult) {
      const percentage = percentageResult[num][position];
      if (percentage > highestPercentage) {
        mostFrequentNumber = parseInt(num);
        highestPercentage = percentage;
      }
    }

    mostFrequentNumbers.push(mostFrequentNumber);
  }

  return mostFrequentNumbers;
};
