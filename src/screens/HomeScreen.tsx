import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { historicResult } from "../data/historicResult";
import {
  findPercentageGreaterThanOrEqualToTwo,
  generateRandomNumberArray,
  getRandomInt,
  hasConsecutiveNumbers,
  percentageOcurrenceCalculator,
} from "../utils";
import { SubArray } from "../interfaces";

const HomeScreen = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [randomBonusNumber, setRandomBonusNumber] = useState<number | null>(
    null
  );

  const generateRandomNumbers = () => {
    let generatedNumbers: number[] = [];
    let bonusNumber: number | null = null;
    let uniqueResultFound = false;

    // Loop para encontrar una combinación única de números.
    while (!uniqueResultFound) {
      generatedNumbers = generateRandomNumberArray(5, 1, 43);
      bonusNumber = getRandomInt(1, 16);
      generatedNumbers.sort((a, b) => a - b);

      const newResult: any = [...generatedNumbers, bonusNumber];
      const isEqualAllArray = historicResult.some((result) =>
        result.every((num, index) => num === newResult[index])
      );

      const isEqualBallot = historicResult.some((result) =>
        result.every((num, index) => num === generatedNumbers[index])
      );

      if (!isEqualAllArray && !isEqualBallot) {
        uniqueResultFound = true;
      }

      if (!onExpectedPercentage(newResult)) {
        uniqueResultFound = false;
      }

      if (generatedNumbers.includes(bonusNumber)) {
        uniqueResultFound = false;
      }

      if (hasConsecutiveNumbers(newResult)) {
        uniqueResultFound = false;
      }
    }

    setRandomNumbers(generatedNumbers);
    setRandomBonusNumber(bonusNumber);

    onCalculate();
  };

  const onExpectedPercentage = (generatedArray: SubArray): boolean => {
    const results = percentageOcurrenceCalculator(historicResult);

    const isPercentageGreaterThanOrEqualToOne =
      findPercentageGreaterThanOrEqualToTwo(generatedArray, results);

    return isPercentageGreaterThanOrEqualToOne;
  };

  const onCalculate = () => {
    const generatedArray: SubArray = [8, 9, 13, 28, 38, 13];
    const result = hasConsecutiveNumbers(generatedArray);
    console.log("result: ", result);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>5 números aleatorios del 1 al 43:</Text>
      <View style={styles.containerNumbers}>
        {randomNumbers.map((number, index) => (
          <View key={index} style={styles.containerTextNumber}>
            <Text style={styles.textNumber}>{number}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.text}>Número aleatorio del 1 al 16:</Text>
      <View style={styles.containerTextNumber2}>
        <Text style={styles.textNumber2}>{randomBonusNumber}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={generateRandomNumbers}>
        <Text style={styles.textButton}>Generar números</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerNumbers: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 32,
  },
  containerTextNumber: {
    backgroundColor: "#ffa10b",
    padding: 4,
    borderRadius: 50,
    width: 32,
    alignItems: "center",
  },
  textNumber: {
    fontSize: 18,
  },
  containerTextNumber2: {
    backgroundColor: "#B22212",
    padding: 4,
    borderRadius: 50,
    width: 32,
    alignItems: "center",
  },
  textNumber2: {
    color: "#fff",
    fontSize: 18,
  },
  text: {
    fontSize: 14,
    marginBottom: 8,
    color: "#459a96",
  },
  button: {
    borderWidth: 1,
    borderColor: "#e2e2e2",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
    backgroundColor: "#459a96",
  },
  textButton: {
    color: "#fff",
  },
});
