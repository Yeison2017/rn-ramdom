/**
 * Calcula las probabilidades de tener más números pares, más números impares o igual cantidad de ambos en subarreglos de una matriz de números, considerando solo las posiciones del 0 al 4 en cada subarreglo.
 *
 * @param {number[][]} matrix - Matriz que contiene subarreglos de números a evaluar.
 * @returns {[number, number, number]} - Un arreglo con las probabilidades de tener más números pares, más números impares o igual cantidad de ambos en subarreglos, expresadas en porcentaje, considerando solo las posiciones del 0 al 4 en cada subarreglo.
 */
export const calculateProbabilitiesFrom0to4 = (
  matrix: number[][]
): [number, number, number] => {
  let morePares = 0;
  let moreImpares = 0;
  let equalParesImpares = 0;

  matrix.forEach((subarray) => {
    const subarraySlice = subarray.slice(0, 5); // Consider positions 0 to 4
    const numPares = subarraySlice.filter((num) => num % 2 === 0).length;
    const numImpares = subarraySlice.length - numPares;

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
