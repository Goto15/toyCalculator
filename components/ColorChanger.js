import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const ColorChanger = ({ color, component }) => {
  const [backgroundColor, setBackgroundColor] = useState(color.background);

  const styles = StyleSheet.create({
    component: {
      fontSize: 20,
    },
    newColor: {
      borderBottomColor: '#232323',
      borderBottomWidth: 1,
      color: backgroundColor === 'white' ? 'black' : backgroundColor,
      height: 40,
    },
  });
  return (
    <View>
      <Text style={styles.component}>{component}</Text>
      <TextInput style={styles.newColor}></TextInput>
    </View>
  );
};

export default ColorChanger;
