import { SubArray } from "../interfaces";

/**
 * Genera un número entero aleatorio en un rango especificado.
 *
 * @param {number} min - El valor mínimo del rango (incluido).
 * @param {number} max - El valor máximo del rango (incluido).
 * @returns {number} - Un número entero aleatorio entre `min` y `max`.
 */
export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Genera un arreglo de números aleatorios únicos en un rango especificado.
 *
 * @param {number} length - La longitud deseada del arreglo.
 * @param {number} min - El valor mínimo del rango (incluido).
 * @param {number} max - El valor máximo del rango (incluido).
 * @returns {number[]} - Un arreglo de números aleatorios únicos en el rango especificado.
 */
export const generateRandomNumberArray = (
  length: number,
  min: number,
  max: number
) => {
  const result: number[] = [];
  while (result.length < length) {
    const randomNumber = getRandomInt(min, max);
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
};

export const hasConsecutiveNumbers = (array: SubArray) => {
  for (let i = 0; i <= 4; i++) {
    if (array[i] + 1 === array[i + 1] && array[i + 1] + 1 === array[i + 2]) {
      return true;
    }
  }
  return false;
};
