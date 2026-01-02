import { Link, Stack } from "expo-router";
import React from "react";
import { View, StyleSheet } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not found" }} />
      <View style={styles.container}>
        <Link href="./" style={styles.button} />
        Go back to Home Screen!
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffffff",
  },
});
