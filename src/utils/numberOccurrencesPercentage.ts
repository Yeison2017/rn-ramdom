/**
 * Calcula el porcentaje de arreglos que contienen exclusivamente números menores o iguales a 22 y los que contienen exclusivamente números mayores o iguales a 23.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números que se evaluarán en función de su valor.
 * @returns {{ lessThanOrEqual22: number, greaterThanOrEqual23: number }} - Un objeto que muestra el porcentaje de arreglos que contienen exclusivamente números menores o iguales a 22 y los que contienen exclusivamente números mayores o iguales a 23.
 */
export const calculateNumberOccurrencesPercentage = (
  arrayOfArrays: number[][]
) => {
  let totalArrays = arrayOfArrays.length;
  let totalLessThanOrEqual22 = 0;
  let totalGreaterThanOrEqual23 = 0;

  arrayOfArrays.forEach((array) => {
    const isLessThanOrEqual22 = array.every((num) => num <= 22);
    const isGreaterThanOrEqual23 = array.every((num) => num >= 23);

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
