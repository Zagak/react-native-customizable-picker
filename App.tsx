import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Choice, Chooser } from "./components";
import { Ionicons } from '@expo/vector-icons';
import Example1 from "./examples/Example1";
import Example2 from "./examples/Example2";
import Example3 from "./examples/Example3";

export default function App() {

  const [test, setTest] = useState<string[]>([]);

  const testHandle = (values: any) => {
    console.log(values)
    setTest(values);
  }

  return (
    <View style={styles.container}>
      {/* Uncomment the example you want to try yourself !  */}
      <Example1 />
      {/* <Example2 /> */}
      {/* <Example3 /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
