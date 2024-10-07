import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NumberDisplayProps {
  title: string;
  numbers: (number | null)[];
  isBonusNumber?: boolean;
}

export const NumberDisplay: React.FC<NumberDisplayProps> = ({
  title,
  numbers,
  isBonusNumber = false,
}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.containerNumbers}>
        {numbers.map((number, index) => (
          <View
            key={index}
            style={
              isBonusNumber
                ? styles.containerTextNumber2
                : styles.containerTextNumber
            }
          >
            <Text
              style={isBonusNumber ? styles.textNumber2 : styles.textNumber}
            >
              {number !== null ? number : ""}
            </Text>
          </View>
        ))}
        {numbers.length === 0 &&
          !isBonusNumber &&
          [0, 1, 2, 3, 4].map((_, index) => (
            <View key={index} style={styles.containerTextNumber}>
              <Text style={styles.textNumber}></Text>
            </View>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  containerNumbers: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  containerTextNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  textNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  containerTextNumber2: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  textNumber2: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
