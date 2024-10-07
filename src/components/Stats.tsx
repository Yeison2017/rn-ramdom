import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface StatsProps {
  stats: {
    parityPercentage: { even: number; odd: number };
    numberOccurrences: {
      lessThanOrEqual22: number;
      greaterThanOrEqual23: number;
    };
    position5Occurrences: { withPosition5: number };
    uniqueSumPercentage: { uniqueSum: number; porcentage: number };
  };
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <View style={styles.statsContainer}>
      <Text style={styles.statsTitle}>Estadísticas:</Text>
      <Text>
        Paridad: {stats.parityPercentage.even.toFixed(2)}% pares,{" "}
        {stats.parityPercentage.odd.toFixed(2)}% impares
      </Text>
      <Text>
        Números ≤ 22: {stats.numberOccurrences.lessThanOrEqual22.toFixed(2)}%
      </Text>
      <Text>
        Números ≥ 23: {stats.numberOccurrences.greaterThanOrEqual23.toFixed(2)}%
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
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
