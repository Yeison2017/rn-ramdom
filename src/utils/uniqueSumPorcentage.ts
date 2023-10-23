import { SubArray } from "../interfaces";

type uniqueSumPorcentage = { uniqueSum: number; porcentage: number }[];

export const calculateUniqueSumPorcentage = (
  arrays: SubArray[]
): uniqueSumPorcentage => {
  const sumResults = arrays.map((subarray) =>
    subarray.reduce((acc, curr) => acc + curr, 0)
  );
  const uniqueSumResults = [...new Set(sumResults)];
  uniqueSumResults.sort((a, b) => b - a);

  const result = uniqueSumResults.map((uniqueSum) => ({
    uniqueSum: uniqueSum,
    porcentage: parseFloat(
      (
        (sumResults.filter((sum) => sum === uniqueSum).length / arrays.length) *
        100
      ).toFixed(2)
    ),
  }));

  result.sort((a, b) => b.uniqueSum - a.uniqueSum);

  return result;
};

export const isPercentageGreaterOrEqualToOne = (
  array: SubArray,
  arrays: SubArray[]
): boolean => {
  const sumOfArray = array.reduce((acc, curr) => acc + curr, 0);

  const uniqueSumPercentages = calculateUniqueSumPorcentage(arrays);

  for (const item of uniqueSumPercentages) {
    if (item.uniqueSum === sumOfArray && item.porcentage >= 1.0) {
      return true;
    }
  }
  return false;
};
