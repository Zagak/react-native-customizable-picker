import { useState } from 'react';
import { Chooser, Choice } from "../components";
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Example1 = () => {
  const [choice, setChoice] = useState<string[]>([]);

  const handleChoose = (values: string[]) => {
    console.log(values)
    setChoice(values);
  }

  return (
    <Chooser handleChoose={handleChoose} style={{ flexDirection: 'row' }}>
      <Choice selectedStyle={{ backgroundColor: "#EB87CB" }}
        unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, marginHorizontal: 20 }} value="female">
        <Ionicons name="female" size={60} color={"#4B74BB"} />
      </Choice>
      <Choice selectedStyle={{ backgroundColor: "#4B74BB" }}
        unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, marginHorizontal: 20 }} value="male" >
        <Ionicons name="male" size={60} color={"#EB87CB"} />
      </Choice>
    </Chooser>
  );
}

export default Example1;