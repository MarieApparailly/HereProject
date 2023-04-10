import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Welcome to Here App</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
});

export default App;
