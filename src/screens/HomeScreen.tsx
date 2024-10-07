import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { historicResult } from "../data/historicResult";
import {
  calculateNumberOccurrencesPercentageInRange,
  calculateParityPercentage,
  calculatePosition5OccurrencesPercentage,
  calculateUniqueSumPorcentage,
  generateRandomNumberArray,
  getRandomInt,
  hasConsecutiveNumbers,
  isPercentageGreaterOrEqualToOne,
} from "../utils";
import { SubArray } from "../interfaces";
import { PredictiveAnalysis } from "../components";

const HomeScreen = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>5 números aleatorios del 1 al 43:</Text>
      <View style={styles.containerNumbers}>
        {randomNumbers.map((number, index) => (
          <View key={index} style={styles.containerTextNumber}>
            <Text style={styles.textNumber}>{number}</Text>
          </View>
        ))}
        {randomNumbers.length === 0 &&
          [0, 1, 2, 3, 4].map((_, index) => (
            <View key={index} style={styles.containerTextNumber}>
              <Text style={styles.textNumber}></Text>
            </View>
          ))}
      </View>
      <Text style={styles.text}>Número aleatorio del 1 al 16:</Text>
      <View style={styles.containerTextNumber2}>
        <Text style={styles.textNumber2}>{randomBonusNumber}</Text>
      </View>
      <Pressable style={styles.button} onPress={generateRandomNumbers}>
        <Text style={styles.textButton}>Generar números</Text>
      </Pressable>
      {stats && (
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Estadísticas:</Text>
          <Text>
            Paridad: {stats.parityPercentage.even.toFixed(2)}% pares,{" "}
            {stats.parityPercentage.odd.toFixed(2)}% impares
          </Text>
          <Text>
            Números ≤ 22: {stats.numberOccurrences.lessThanOrEqual22.toFixed(2)}
            %
          </Text>
          <Text>
            Números ≥ 23:{" "}
            {stats.numberOccurrences.greaterThanOrEqual23.toFixed(2)}%
          </Text>
          <Text>
            Número bonus en primeros 5:{" "}
            {stats.position5Occurrences.withPosition5.toFixed(2)}%
          </Text>
          <Text>
            Suma única: {stats.uniqueSumPercentage.uniqueSum} (
            {stats.uniqueSumPercentage.porcentage.toFixed(2)}%)
          </Text>
        </View>
      )}
      <PredictiveAnalysis count={6} />
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
    height: 32,
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
    height: 32,
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
  statsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  statsTitle: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
