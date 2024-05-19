import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
