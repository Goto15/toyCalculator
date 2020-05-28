import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './screens/Calculator';
import Settings from './screens/Settings';

const Stack = createStackNavigator();
const defaultColors = {
  clear: {
    background: 'red',
    text: 'white',
  },
  enter: {
    background: 'deepskyblue',
    text: 'white'
  },
  nums: {
    background: 'grey',
    text: 'white'
  },
  opers: {
    background: '#d3d3d3',
    text: 'black'
  },
};

export default function App() {
  const [colors, setColors] = useState(defaultColors);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Calculator'
          component={Calculator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Settings' component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
