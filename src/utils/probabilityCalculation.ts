/**
 * Calcula las probabilidades de tener más números pares, más números impares o igual cantidad de ambos en subarreglos de una matriz de números.
 *
 * @param {number[][]} matrix - Matriz que contiene subarreglos de números a evaluar.
 * @returns {[number, number, number]} - Un arreglo con las probabilidades de tener más números pares, más números impares o igual cantidad de ambos, expresadas en porcentaje.
 */
export const calculateProbabilities = (
  matrix: number[][]
): [number, number, number] => {
  let morePares = 0;
  let moreImpares = 0;
  let equalParesImpares = 0;

  matrix.forEach((subarray) => {
    const numPares = subarray.filter((num) => num % 2 === 0).length;
    const numImpares = subarray.length - numPares;

    if (numPares > numImpares) {
      morePares++;
    } else if (numImpares > numPares) {
      moreImpares++;
    } else {
      equalParesImpares++;
    }
  });

  const totalSubarrays = matrix.length;
  const probabilityMorePares = (morePares / totalSubarrays) * 100;
  const probabilityMoreImpares = (moreImpares / totalSubarrays) * 100;
  const probabilityEqualParesImpares =
    (equalParesImpares / totalSubarrays) * 100;

  return [
    probabilityMorePares,
    probabilityMoreImpares,
    probabilityEqualParesImpares,
  ];
};
