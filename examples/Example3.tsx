import { useState } from 'react';
import { Chooser, Choice } from "../components";
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Example3 = () => {
  const [choice, setChoice] = useState<string[]>([]);

  const handleChoose = (values: string[]) => {
    console.log(values)
    setChoice(values);
  }

  return (
    <Chooser handleChoose={handleChoose} style={{ flexDirection: 'row', maxHeight: 300 }}>
      <Choice selectedStyle={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 0, paddingBottom: 40 }}
        unselectedStyle={{ marginTop: 80, padding: 10, marginHorizontal: 20, }} value="face">
        {choice.includes("face") ? <Ionicons name="happy" size={60} color={"#EB87CB"} /> : <Ionicons name="sad" size={60} color={"#4B74BB"} />}
      </Choice>
      <Choice selectedStyle={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 0, paddingBottom: 40 }}
        unselectedStyle={{ marginTop: 80, padding: 10, marginHorizontal: 20, }} value="thumbs" >
        {choice.includes("thumbs") ? <Ionicons name="thumbs-up" size={60} color={"#EB87CB"} /> : <Ionicons name="thumbs-down" size={60} color={"#4B74BB"} />}
      </Choice>
      <Choice selectedStyle={{ borderBottomColor: '#000000', borderBottomWidth: 1, marginTop: 0, paddingBottom: 40 }}
        unselectedStyle={{ marginTop: 80, padding: 10, marginHorizontal: 20, }} value="lock">
        {choice.includes("lock") ? <Ionicons name="lock-open" size={60} color={"#EB87CB"} /> : <Ionicons name="lock-closed" size={60} color={"#4B74BB"} />}
      </Choice>
    </Chooser>
  );
}

export default Example3;