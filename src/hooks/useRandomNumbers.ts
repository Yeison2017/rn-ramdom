import { useState } from "react";
import { SubArray } from "../interfaces";
import { historicResult } from "../data/historicResult";
import {
  generateRandomNumberArray,
  getRandomInt,
  hasConsecutiveNumbers,
  isPercentageGreaterOrEqualToOne,
  calculateParityPercentage,
  calculateNumberOccurrencesPercentageInRange,
  calculatePosition5OccurrencesPercentage,
  calculateUniqueSumPorcentage,
} from "../utils";

export const useRandomNumbers = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [randomBonusNumber, setRandomBonusNumber] = useState<number | null>(
    null
  );
  const [stats, setStats] = useState<any>(null);

  const generateRandomNumbers = () => {
    let generatedNumbers: number[] = [];
    let bonusNumber: number | null = null;
    let uniqueResultFound = false;

    while (!uniqueResultFound) {
      generatedNumbers = generateRandomNumberArray(5, 1, 43);
      bonusNumber = getRandomInt(1, 16);
      generatedNumbers.sort((a, b) => a - b);

      const newResult: SubArray = [
        ...generatedNumbers,
        bonusNumber,
      ] as SubArray;

      const isUnique = !historicResult.some((result) =>
        result.every((num, index) => num === newResult[index])
      );

      if (
        isUnique &&
        !hasConsecutiveNumbers(newResult) &&
        isPercentageGreaterOrEqualToOne(newResult, historicResult) &&
        !generatedNumbers.includes(bonusNumber)
      ) {
        uniqueResultFound = true;
      }
    }

    setRandomNumbers(generatedNumbers);
    setRandomBonusNumber(bonusNumber);
    calculateStats([...generatedNumbers, bonusNumber] as SubArray);
  };

  const calculateStats = (newResult: SubArray) => {
    const parityPercentage = calculateParityPercentage([newResult]);
    const numberOccurrences = calculateNumberOccurrencesPercentageInRange([
      newResult,
    ]);
    const position5Occurrences = calculatePosition5OccurrencesPercentage([
      newResult,
    ]);
    const uniqueSumPercentage = calculateUniqueSumPorcentage([newResult]);

    setStats({
      parityPercentage,
      numberOccurrences,
      position5Occurrences,
      uniqueSumPercentage: uniqueSumPercentage[0],
    });
  };

  return {
    randomNumbers,
    randomBonusNumber,
    stats,
    generateRandomNumbers,
  };
};
