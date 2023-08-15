# react-native-customizable-picker


A customizable picker component for React Native which let you define a collection of choices.

Define how you want the look of the choosed options to change.

Decide from how many options are available for chosing.

![Example 1](./Example1.gif) ![Example2](./Example2.gif) ![Example3](./Example3.gif)


## Getting Started

### Installing


npm i reat-native-customizable-picker


### Basic Usage

Every item that you want to be a possible choice to pick from need to be wrapped in a Choice ,
and all of them wrapped in a Chooser which is the container for all of the Choice elements.

```js
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Chooser, Choice } from 'react-native-customizable-picker';

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
```

#### Look in the examples folder for more                                                                                                   


## Props

### Chooser


| Name                                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Details                  |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `style`                                 | The style you want to apply to the container .<br> When this prop is used it will also wrap under the hood all of the Choice elements into a View and apply the `style` to them ; if not each element will be returned independently.<br> So you may want to use this prop just for simple pickers , for more complex styling and grouping shall not be used.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | **required**<br>function |
| `maxim`                                         | The number of maximum elements that can be choosed from the container .<br> By default is setted to 1.                                    | **required**<br>array    |
| `handleChoose`                                   |The callback function which returns the array of currently choosed elements . <br> It returns the `value` specified in the `Choice` prop                                                                                                                                                                                                                                                                                                         | object                   |

