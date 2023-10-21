/**
 * Calcula el porcentaje de arreglos que tienen un número en la posición 5 que también se encuentra en las primeras 5 posiciones y los que no cumplen con esta condición.
 *
 * @param {number[][]} arrayOfArrays - Arreglo de arreglos que contiene números y se evaluarán en función de la posición 5 y las primeras 5 posiciones.
 * @returns {{ withPosition5: number, withoutPosition5: number }} - Un objeto que muestra el porcentaje de arreglos que tienen un número en la posición 5 que también se encuentra en las primeras 5 posiciones y los que no cumplen con esta condición.
 */
export const calculatePosition5OccurrencesPercentage = (
  arrayOfArrays: number[][]
) => {
  let totalArrays = arrayOfArrays.length;
  let totalWithPosition5 = 0;
  let totalWithoutPosition5 = 0;

  arrayOfArrays.forEach((array) => {
    const numberAtPosition5 = array[5];
    const isContainedInRest = array.slice(0, 5).includes(numberAtPosition5);
    if (isContainedInRest) {
      totalWithPosition5++;
    } else {
      totalWithoutPosition5++;
    }
  });

  const withPosition5Percentage = (totalWithPosition5 / totalArrays) * 100;
  const withoutPosition5Percentage =
    (totalWithoutPosition5 / totalArrays) * 100;

  return {
    withPosition5: withPosition5Percentage,
    withoutPosition5: withoutPosition5Percentage,
  };
};
