/**
 * Calcula el porcentaje de arreglos cuyas primeras cinco posiciones contienen exclusivamente números menores o iguales a 22 y los que contienen números mayores o iguales a 23 en esas posiciones.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números que se evaluarán en función de su valor en las primeras cinco posiciones.
 * @returns {{ lessThanOrEqual22: number, greaterThanOrEqual23: number }} - Un objeto que muestra el porcentaje de arreglos cuyas primeras cinco posiciones contienen exclusivamente números menores o iguales a 22 y los que contienen números mayores o iguales a 23 en esas posiciones.
 */
export const calculateNumberOccurrencesPercentageInRange = (
  arrayOfArrays: number[][]
) => {
  let totalArrays = arrayOfArrays.length;
  let totalLessThanOrEqual22 = 0;
  let totalGreaterThanOrEqual23 = 0;

  arrayOfArrays.forEach((array) => {
    const range = array.slice(0, 5); // Posiciones 0 a 4
    const isLessThanOrEqual22 = range.every((num) => num <= 22);
    const isGreaterThanOrEqual23 = range.every((num) => num >= 23);

    if (isLessThanOrEqual22) {
      totalLessThanOrEqual22++;
    }

    if (isGreaterThanOrEqual23) {
      totalGreaterThanOrEqual23++;
    }
  });

  const lessThanOrEqual22Percentage =
    (totalLessThanOrEqual22 / totalArrays) * 100;
  const greaterThanOrEqual23Percentage =
    (totalGreaterThanOrEqual23 / totalArrays) * 100;

  return {
    lessThanOrEqual22: lessThanOrEqual22Percentage,
    greaterThanOrEqual23: greaterThanOrEqual23Percentage,
  };
};
