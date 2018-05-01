import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SegmentControl from "./SegmentControl";

const One = () => {
  return <Text style={styles.text}>This is first view</Text>;
};
const Two = () => {
  return <Text style={styles.text}>This is second view</Text>;
};
const segments = [
  {
    title: "One",
    view: One
  },
  {
    title: "Two",
    view: Two
  }
];
const App = () => {
  return (
    <View style={styles.container}>
      <SegmentControl segments={segments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center"
  },
  text: {
    alignSelf: "center",
    margin: 50
  }
});

export default App;
