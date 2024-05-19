import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const CustomToast = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Failed</Text>
    </View>
  );
};

export default CustomToast;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.red,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  text: { color: Colors.white },
});
