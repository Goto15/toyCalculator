import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ColorChanger from '../components/ColorChanger';
import SettingsSwitch from '../components/SettingsSwitch';

const Settings = ({ changeColor, colors, toggleCustomColors, useCustomColors }) => {
  const styles = StyleSheet.create({
    btnTitle: {
      fontSize: 24,
    },
    btnContainer: {},
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
    hr: {
      borderBottomColor: '#232323',
      borderBottomWidth: 1,
    },
    scrollView: {
      paddingTop: '3%',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <View style={styles.hr} />
          <SettingsSwitch
            color={colors.enter.background}
            toggle={toggleCustomColors}
            value={useCustomColors}
          />
          <View style={styles.hr} />
          {Object.keys(colors).map((obj, index) => (
            <ColorChanger key={index} component={obj} color={colors[obj]} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
