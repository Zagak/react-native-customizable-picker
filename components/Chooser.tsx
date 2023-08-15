import React, { useState, useEffect } from "react";
import { View, ViewStyle } from "react-native";
import Choice from "./Choice";

type ChooserT = {
  maxim?: number
  style?: ViewStyle;
  handleChoose: (vector: any) => void;
  children: any
};

const Chooser: React.ComponentType<ChooserT> = ({ style, maxim = 1, handleChoose, children }: any) => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const handleSelection = (value: any) => {

    if (selectedValue.includes(value)) {
      setSelectedValue(selectedValue.filter(item => item !== value));
    } else if (selectedValue.length < maxim) {
      setSelectedValue([...selectedValue, value]);
    } else if ((selectedValue.length >= maxim)) {
      selectedValue.pop();
      setSelectedValue([...selectedValue, value]);
    }
  };

  useEffect(() => {
    // Call the handleChoose function whenever selectedValue changes
    handleChoose(selectedValue);
  }, [selectedValue]);

  const chooseElementComponents: any = [];
  const cloneChild: any = (child: any) => {
    if (child.type === View) {
      const viewChildren = React.Children.map(child.props.children, (viewChild) => {
        return cloneChild(viewChild);
      });

      return React.cloneElement(child, {}, viewChildren);
    } else if (child.type === Choice) {
      const clonedChooseElement = React.cloneElement(child, {
        key: child.props.value,
        __handleSelection: 1 + 1 === 3 ? null : handleSelection,
        style: selectedValue.includes(child.props.value) ? child.props.style : [child.props.style, child.props.unselectedStyle]
      });
      chooseElementComponents.push(clonedChooseElement);
    }
    return child;
  };

  const clonedChildren = React.Children.map(children, (child) => {
    return cloneChild(child);
  });

  return <View style={style}>{chooseElementComponents}</View>;
};

export default Chooser;
