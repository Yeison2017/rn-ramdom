/**
 * Calcula el porcentaje de recurrencia de números pares e impares en cada posición de arreglos en un arreglo de arreglos.
 *
 * @param {number[][]} historical - Arreglo de arreglos que contiene números cuyos porcentajes de recurrencia se calcularán en cada posición.
 * @returns {{ evens: number[], odds: number[] }} - Un objeto que muestra los porcentajes de recurrencia de números pares e impares en cada posición de los arreglos internos.
 */
export const calculatePercentageRecurrence = (
  historical: number[][]
): { evens: number[]; odds: number[] } => {
  const numArrays = historical.length;
  const numPositions = historical[0].length;
  const evens: number[] = new Array(numPositions).fill(0);
  const odds: number[] = new Array(numPositions).fill(0);

  historical.forEach((array) => {
    for (let j = 0; j <= 5; j++) {
      const num = array[j];
      if (num % 2 === 0) {
        evens[j] += 1;
      } else {
        odds[j] += 1;
      }
    }
  });

  // Calculate percentage of recurrence
  const percentageRecurrenceEvens = evens.map(
    (count) => (count / numArrays) * 100
  );
  const percentageRecurrenceOdds = odds.map(
    (count) => (count / numArrays) * 100
  );

  return { evens: percentageRecurrenceEvens, odds: percentageRecurrenceOdds };
};
