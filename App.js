import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './screens/Calculator';
import Settings from './screens/Settings';

const Stack = createStackNavigator();
const defaultColors = {
  background: {
    background: 'white',
  },
  clear: {
    background: 'red',
    text: 'white',
  },
  enter: {
    background: 'deepskyblue',
    text: 'white',
  },
  nums: {
    background: 'grey',
    text: 'white',
  },
  opers: {
    background: '#d3d3d3',
    text: 'black',
  },
};
const customColors = {
  background: {
    background: 'white',
  },
  clear: {
    background: 'red',
    text: 'white',
  },
  enter: {
    background: 'deepskyblue',
    text: 'white',
  },
  nums: {
    background: 'grey',
    text: 'white',
  },
  opers: {
    background: '#d3d3d3',
    text: 'black',
  },
};

export default function App() {
  const [colors, setColors] = useState(defaultColors);
  const [useCustomColors, setUseCustomColors] = useState(false);

  const changeColor = (button, property, value) => {
    customColors[button[property]] = value;
    setColors(customColors);
  };

  const toggleCustomColors = () => {
    setUseCustomColors(previousState => !previousState);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Calculator' options={{ headerShown: false }}>
          {(props) => <Calculator {...props} colors={colors} />}
        </Stack.Screen>
        <Stack.Screen name='Settings'>
          {(props) => (
            <Settings
              {...props}
              colors={colors}
              changeColor={changeColor}
              useCustomColors={useCustomColors}
              toggleCustomColors={toggleCustomColors}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
