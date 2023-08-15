import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Choice, Chooser } from "./components";
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [test, setTest] = useState<string[]>([]);

  const testHandle = (values: any) => {
    console.log(values)
    setTest(values);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Chooser style={{ flexDirection: 'row', marginHorizontal: 0, alignSelf: 'center' }} handleChoose={testHandle}>
        <Choice style={{ backgroundColor: "pink", borderRadius: 40, padding: 10, marginHorizontal: 20 }}
          unselectedStyle={{ backgroundColor: "#594C4C" }} value="female">
          <Ionicons name="female" size={60} color={"blue"} />
        </Choice>
        <Choice style={{ backgroundColor: "#4B74BB", borderRadius: 40, padding: 10, marginHorizontal: 20 }}
          unselectedStyle={{ backgroundColor: "#594C4C" }} value="male" >
          <Ionicons name="male" size={60} color={"pink"} />
        </Choice>
      </Chooser>
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
