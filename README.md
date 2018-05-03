# react-native-segment-control

A React Native swipeable SegmentedControl component for iOS and Android
<img src="https://github.com/ainurb/react-native-segment-control/blob/master/example/example1.gif" width="30%" />
<img src="https://github.com/ainurb/react-native-segment-control/blob/master/example/example2.gif" width="30%" />

## Installation

```
$ npm install react-native-segment-control --save
```

## Example

```JSX
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SegmentControl from 'react-native-segment-control';

const One = () => {
  return <Text style={styles.text}>This is first view</Text>;
};
const Two = () => {
  return <Text style={styles.text}>This is second view</Text>;
};
const segments = [
  {
    title: 'One',
    view: One
  },
  {
    title: 'Two',
    view: Two
  }
];
const App = () => {
  return (
    <View style={styles.container}>
      <SegmentControl segments={segments} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center'
  },
  text: {
    alignSelf: 'center',
    margin: 50
  }
});

export default App;
```
