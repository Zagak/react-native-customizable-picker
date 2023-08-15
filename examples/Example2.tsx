import { useState } from 'react';
import { Chooser, Choice } from "../components";
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Example2 = () => {
  const [choice, setChoice] = useState<string[]>([]);

  const handleChoose = (values: string[]) => {
    console.log(values)
    setChoice(values);
  }

  return (
    <Chooser handleChoose={handleChoose} maxim={3}>
      <View style={{ flexDirection: 'row' }}>
        <Choice selectedStyle={{ backgroundColor: "#DF8E13" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 90 }} value="egg">
          <Ionicons color={"white"} name="egg" size={60} />
        </Choice>
        <Choice selectedStyle={{ backgroundColor: "#5CB364" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 90 }} value="flashlight" >
          <Ionicons color={"orange"} name="flashlight" size={60} />
        </Choice>
      </View>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Choice selectedStyle={{ backgroundColor: "#EB87CB" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 30 }} value="female">
          <Ionicons color={"purple"} name="female" size={60} />
        </Choice>
        <Choice selectedStyle={{ backgroundColor: "#4B74BB" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 30 }} value="male" >
          <Ionicons color={"blue"} name="male" size={60} />
        </Choice>
      </View>
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Choice selectedStyle={{ backgroundColor: "#B3A72B" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 60 }} value="car" >
          <Ionicons color={"red"} name="car" size={60} />
        </Choice>
        <Choice selectedStyle={{ backgroundColor: "#BB4BBB" }}
          unselectedStyle={{ backgroundColor: "#594C4C", borderRadius: 40, padding: 10, margin: 10, marginHorizontal: 60 }} value="star" >
          <Ionicons color={"green"} name="star" size={60} />
        </Choice>
      </View>
    </Chooser>
  );
}

export default Example2;