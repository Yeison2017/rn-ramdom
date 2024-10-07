import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  performPredictiveAnalysis,
  calculatePredictionEffectiveness,
} from "../utils/predictiveAnalysis";

interface PredictiveAnalysisProps {
  count?: number;
}

const PredictiveAnalysis: React.FC<PredictiveAnalysisProps> = ({
  count = 6,
}) => {
  const [predictedNumbers, setPredictedNumbers] = useState<number[]>([]);
  const [effectiveness, setEffectiveness] = useState<number>(0);

  useEffect(() => {
    const predicted = performPredictiveAnalysis(count);
    setPredictedNumbers(predicted);
    const effectivenessPercentage = calculatePredictionEffectiveness(count);
    setEffectiveness(effectivenessPercentage);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Análisis Predictivo:</Text>
      <Text style={styles.subtitle}>Números sugeridos:</Text>
      <Text style={styles.numbers}>{predictedNumbers.join(", ")}</Text>
      <Text style={styles.subtitle}>
        Efectividad en los últimos 10 resultados:
      </Text>
      <Text style={styles.effectiveness}>{effectiveness.toFixed(2)}%</Text>
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
    fontSize: 18,
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 5,
  },
  numbers: {
    fontSize: 18,
    color: "#0066cc",
    marginBottom: 10,
  },
  effectiveness: {
    fontSize: 18,
    color: "#008000",
    marginBottom: 10,
  },
  disclaimer: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#666",
  },
});

export default PredictiveAnalysis;
