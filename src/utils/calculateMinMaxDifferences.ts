/**
 * Calculate the minimum and maximum difference between the first and fifth elements
 * of subarrays in a given array of arrays.
 *
 * @param {number[][]} historical - The array of arrays to calculate differences from.
 * @returns {[number, number]} - An array with the minimum and maximum differences.
 * @throws {Error} - Throws an error if the input array is empty or if any subarray
 * doesn't have at least 5 elements.
 */
export const calculateMinMaxDifferences = (
  historical: number[][]
): [number, number] => {
  if (historical.length === 0) {
    throw new Error("The array is empty.");
  }

  let minDiff = Infinity;
  let maxDiff = -Infinity;

  for (const subarray of historical) {
    if (subarray.length < 5) {
      throw new Error("Subarrays must contain at least 5 elements.");
    }

    const diff = subarray[4] - subarray[0];

    if (diff < minDiff) {
      minDiff = diff;
    }

    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }

  return [minDiff, maxDiff];
};

export const calculateMinMaxDifferences2 = (
  historical: number[][]
): {
  minDifference: number;
  maxDifference: number;
  minArray: number[];
  maxArray: number[];
} => {
  if (historical.length === 0) {
    throw new Error("The array is empty.");
  }

  let minDifference = Infinity;
  let maxDifference = -Infinity;
  let minArray: number[] = [];
  let maxArray: number[] = [];

  for (const subarray of historical) {
    if (subarray.length < 5) {
      throw new Error("Subarrays must contain at least 5 elements.");
    }

    const diff = subarray[4] - subarray[0];

    if (diff < minDifference) {
      minDifference = diff;
      minArray = subarray;
    }

    if (diff > maxDifference) {
      maxDifference = diff;
      maxArray = subarray;
    }
  }

  return {
    minDifference,
    maxDifference,
    minArray,
    maxArray,
  };
};
