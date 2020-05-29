import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CalcButton from '../components/CalcButton';

const Calculator = ({ navigation, colors }) => {
  const [displayText, setDisplayText] = useState('');
  const [justAnswered, setJustAnswered] = useState(false);

  const appendCharToDisplay = (event) => {
    if (displayText.length <= 35) {
      if (justAnswered) {
        setJustAnswered(false);
        setDisplayText(event);
      } else {
        setDisplayText(displayText + event);
      }
    }
  };

  const calculateAnswer = () => {
    setDisplayText(eval(displayText));
    setJustAnswered(true);
  };

  const clearDisplay = () => {
    setDisplayText('');
  };

  const clearButton = StyleSheet.create({
    button: {
      backgroundColor: colors.clear.background,
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: '2%',
      marginTop: '2%',
      width: '47%',
    },
    text: {
      color: colors.clear.text,
      fontSize: 32,
      textAlign: 'center',
    },
  });

  const displayStyle = StyleSheet.create({
    container: {
      height: '27%',
      justifyContent: 'center',
    },
    text: {
      fontVariant: ['tabular-nums'],
      fontSize: 50,
    },
  });

  const enterButton = StyleSheet.create({
    button: {
      backgroundColor: colors.enter.background,
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: '2%',
      marginTop: '2%',
      width: '47%',
    },
    text: {
      color: colors.enter.text,
      fontSize: 32,
      textAlign: 'center',
    },
  });

  const numButton = StyleSheet.create({
    button: {
      backgroundColor: colors.nums.background,
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: '2%',
      marginTop: '2%',
      width: '22.5%',
    },
    text: {
      color: colors.nums.text,
      fontSize: 32,
      textAlign: 'center',
    },
  });

  const operButton = StyleSheet.create({
    button: {
      backgroundColor: colors.opers.background,
      borderRadius: 10,
      justifyContent: 'center',
      marginLeft: '2%',
      marginTop: '2%',
      width: '22.5%',
    },
    text: {
      color: colors.opers.text,
      fontSize: 32,
      textAlign: 'center',
    },
  });

  const settingsButton = StyleSheet.create({
    container: {
      flexDirection: 'row-reverse',
      marginLeft: '4%',
    },
    text: {
      padding: 5,
    },
  });

  const styles = StyleSheet.create({
    background: {
      backgroundColor: colors.background.background,
    },
    buttonContainer: {
      height: '70%',
    },
    row: {
      flexDirection: 'row',
      height: 100,
    },
  });

  return (
    <SafeAreaView style={styles.background}>
      <View style={settingsButton.container}>
        <TouchableOpacity onPress={() => navigation.push('Settings')}>
          <Text style={settingsButton.text}>Settings ></Text>
        </TouchableOpacity>
      </View>
      <View style={displayStyle.container}>
        <Text style={displayStyle.text}>{displayText}</Text>
      </View>
      <View>
        <View style={styles.row}>
          <CalcButton funct={clearDisplay} char='Clear' btnStyle={clearButton} />
          <CalcButton funct={appendCharToDisplay} char='%' btnStyle={operButton} />
          <CalcButton funct={appendCharToDisplay} char='/' btnStyle={operButton} />
        </View>
        <View style={styles.row}>
          <CalcButton funct={appendCharToDisplay} char='7' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='8' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='9' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='*' btnStyle={operButton} />
        </View>
        <View style={styles.row}>
          <CalcButton funct={appendCharToDisplay} char='4' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='5' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='6' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='-' btnStyle={operButton} />
        </View>
        <View style={styles.row}>
          <CalcButton funct={appendCharToDisplay} char='1' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='2' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='3' btnStyle={numButton} />
          <CalcButton funct={appendCharToDisplay} char='+' btnStyle={operButton} />
        </View>
        <View style={styles.row}>
          <CalcButton funct={appendCharToDisplay} char='.' btnStyle={operButton} />
          <CalcButton funct={appendCharToDisplay} char='0' btnStyle={numButton} />
          <CalcButton funct={calculateAnswer} char='Enter' btnStyle={enterButton} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
