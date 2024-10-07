import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { performPredictiveAnalysis } from "../utils/predictiveAnalysis";

interface PredictiveAnalysisProps {
  count?: number;
}

const PredictiveAnalysis: React.FC<PredictiveAnalysisProps> = ({
  count = 6,
}) => {
  const [predictedNumbers, setPredictedNumbers] = useState<number[]>([]);

  useEffect(() => {
    const predicted = performPredictiveAnalysis(count);
    setPredictedNumbers(predicted);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Números sugeridos basados en análisis predictivo:
      </Text>
      <Text style={styles.numbers}>{predictedNumbers.join(", ")}</Text>
      <Text style={styles.disclaimer}>
        Nota: Estos números son solo para fines informativos y no garantizan
        resultados en juegos de azar reales.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  numbers: {
    fontSize: 18,
    color: "#0066cc",
    marginBottom: 10,
  },
  disclaimer: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#666",
  },
});

export default PredictiveAnalysis;
