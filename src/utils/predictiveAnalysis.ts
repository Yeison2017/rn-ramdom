import { SubArray } from "../interfaces";
import { historicResult } from "../data/historicResult";

// Función para calcular la frecuencia de cada número
export const calculateFrequencies = (
  data: SubArray[]
): { [key: number]: number } => {
  const frequencies: { [key: number]: number } = {};
  data.forEach((subArray) => {
    subArray.forEach((num) => {
      frequencies[num] = (frequencies[num] || 0) + 1;
    });
  });
  return frequencies;
};

// Función para predecir los próximos números
export const predictNextNumbers = (
  frequencies: { [key: number]: number },
  count: number
): number[] => {
  return Object.entries(frequencies)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map((entry) => parseInt(entry[0]));
};

// Función principal de análisis predictivo
export const performPredictiveAnalysis = (count: number = 6): number[] => {
  const frequencies = calculateFrequencies(historicResult);
  return predictNextNumbers(frequencies, count);
};
