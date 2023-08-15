import React, { ReactNode } from "react";
import { Pressable, ViewStyle } from "react-native";

export type ChoiceT = {
  value: string;
  __handleSelection?: (selection: string) => void;
  children?: ReactNode;
  selectedStyle?: ViewStyle;
  pressed?: boolean;
  unselectedStyle?: ViewStyle;
};

const Choice: React.ComponentType<ChoiceT> = ({ unselectedStyle, selectedStyle, value, children, __handleSelection = (value: string) => { } }: ChoiceT) => {

  return (
    <Pressable onPress={() => __handleSelection(value)} style={({ pressed }) => [selectedStyle, pressed && [{ opacity: 0.7 }]]}>
      {children}
    </Pressable>
  );
}

export default Choice;