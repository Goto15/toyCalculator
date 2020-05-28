import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const RenderButton = ({ funct, btnStyle, char }) => {
  return (
    <TouchableOpacity onPress={() => funct(char)} style={btnStyle.button}>
      <Text style={btnStyle.text}>{char}</Text>
    </TouchableOpacity>
  );
};

export default RenderButton;