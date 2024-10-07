import React from "react";
import { StyleSheet, View } from "react-native";
import { NumberDisplay } from "../components/NumberDisplay";
import { GenerateButton } from "../components/GenerateButton";
import { Stats } from "../components/Stats";
import { useRandomNumbers } from "../hooks/useRandomNumbers";

const HomeScreen = () => {
  const { randomNumbers, randomBonusNumber, stats, generateRandomNumbers } =
    useRandomNumbers();

  return (
    <View style={styles.container}>
      <NumberDisplay
        title="5 números aleatorios del 1 al 43:"
        numbers={randomNumbers}
      />
      <NumberDisplay
        title="Número aleatorio del 1 al 16:"
        numbers={[randomBonusNumber]}
        isBonusNumber
      />
      <GenerateButton onPress={generateRandomNumbers} />
      {stats && <Stats stats={stats} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default HomeScreen;
