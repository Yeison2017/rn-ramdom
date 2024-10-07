import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface GenerateButtonProps {
  onPress: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>Generar números</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  textButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
