import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const SettingsSwitch = ({ color, toggle, value }) => {
  const styles = StyleSheet.create({
    toggle: {
      backgroundColor: value ? 'white' : '#eeeeee',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '2%',
      paddingVertical: 10,
    },
    toggleSwtich: {
      flexDirection: 'row-reverse',
    },
    toggleText: {
      fontSize: 18,
      paddingTop: 5,
    },
  });

  return (
    <View style={styles.toggle}>
      <Text style={styles.toggleText}>Custom Colors</Text>
      <Switch
        onValueChange={() => toggle()}
        ios_backgroundColor={'#d3d3d3'}
        trackColor={value ? color : '#d3d3d3'}
        value={value}
      />
    </View>
  );
};

export default SettingsSwitch;
