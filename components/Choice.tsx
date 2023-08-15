import React from "react";
import { Pressable, ViewStyle, View } from "react-native";

type ChooseElementT = {
  value: string;
  __handleSelection?: (selection: string) => void;
  children?: any;
  style?: ViewStyle;
  pressed?: any;
  unselectedStyle?: ViewStyle;
};

const Choice: React.ComponentType<ChooseElementT> = ({ unselectedStyle, style, value, children, __handleSelection = (value: string) => { } }: ChooseElementT) => {

  return (
    <Pressable onPress={() => __handleSelection(value)} style={({ pressed }) => [style, pressed && [{ opacity: 0.7 }]]}>
      {children}
    </Pressable>
  );
}

export default Choice;