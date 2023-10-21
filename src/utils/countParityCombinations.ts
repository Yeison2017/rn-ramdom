type parameters = { par: number; impar: number; percentage: number }[];

export const countParityCombinations = (historical: number[][]): parameters => {
  const combinations: { [key: string]: number } = {
    "0 par y 6 impar": 0,
    "1 par y 5 impar": 0,
    "2 par y 4 impar": 0,
    "3 par y 3 impar": 0,
    "4 par y 2 impar": 0,
    "5 par y 1 impar": 0,
    "6 par y 0 impar": 0,
  };

  const totalSubarrays = historical.length;

  for (const subarray of historical) {
    const evenCount = subarray.filter((num) => num % 2 === 0).length;
    const oddCount = subarray.length - evenCount;

    if (evenCount >= 0 && evenCount <= 6) {
      const key = `${evenCount} par y ${oddCount} impar`;
      combinations[key]++;
    }
  }

  const result: { par: number; impar: number; percentage: number }[] = [];

  for (let i = 0; i <= 6; i++) {
    const evenCount = i;
    const oddCount = 6 - i;
    const key = `${evenCount} par y ${oddCount} impar`;
    const percentage = (combinations[key] / totalSubarrays) * 100;

    result.push({
      par: evenCount,
      impar: oddCount,
      percentage: parseFloat(percentage.toFixed(2)),
    });
  }

  return result;
};

export const checkPercentage = (
  combinationArray: parameters,
  values: number[]
): boolean => {
  const evenCount = values.filter((num) => num % 2 === 0).length;
  const oddCount = values.length - evenCount;
  const key = `${evenCount} par y ${oddCount} impar`;

  const combination = combinationArray.find(
    (item) => `${item.par} par y ${item.impar} impar` === key
  );

  if (combination && combination.percentage > 20) {
    return true;
  } else {
    return false;
  }
};
