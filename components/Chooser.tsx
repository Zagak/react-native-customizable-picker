import React, { useState, useEffect, ReactNode, ReactElement } from "react";
import { View, ViewStyle } from "react-native";
import Choice from "./Choice";

type ChooserT = {
  maxim?: number
  style?: ViewStyle;
  handleChoose: (vector: string[]) => void;
  children: ReactNode;
};

const Chooser: React.ComponentType<ChooserT> = ({ style, maxim = 1, handleChoose, children }) => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const handleSelection = (value: string) => {

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

  const chooseElementComponents: ReactElement[] = [];
  const cloneChild = (child: any): ReactNode => {
    if (child.type === View) {
      const viewChildren = React.Children.map(child.props.children, (viewChild) => {
        return cloneChild(viewChild);
      });

      return React.cloneElement(child, {}, viewChildren);
    } else if (child.type === Choice) {
      const clonedChooseElement = React.cloneElement(child, {
        key: child.props.value,
        __handleSelection: 1 + 1 === 3 ? null : handleSelection,
        selectedStyle: selectedValue.includes(child.props.value) ? [child.props.unselectedStyle, child.props.selectedStyle] : child.props.unselectedStyle,
      });

      if (style) {
        chooseElementComponents.push(clonedChooseElement);
      } else {
        return clonedChooseElement;
      }


    }
    return child;
  };

  const clonedChildren = React.Children.map(children, (child) => {
    return cloneChild(child);
  });


  if (style) {
    return <View style={style}>{chooseElementComponents}</View>;
  } else {
    return <View>{clonedChildren}</View>;
  }
};

export default Chooser;
