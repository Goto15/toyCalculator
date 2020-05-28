import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CalcButton from '../components/CalcButton';

const Calculator = ({ navigation }) => {
  const [displayText, setDisplayText] = useState('');
  const [justAnswered, setJustAnswered] = useState(false);

  const appendCharToDisplay = (event) => {
    if (justAnswered) {
      setJustAnswered(false);
      setDisplayText(event);
    } else {
      setDisplayText(displayText + event);
    }
  };

  const calculateAnswer = () => {
    setDisplayText(eval(displayText));
    setJustAnswered(true);
  };

  const clearDisplay = () => {
    setDisplayText('');
  };

  return (
    <SafeAreaView>
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

const clearButton = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    width: '47%',
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});

const displayStyle = StyleSheet.create({
  container: {
    height: '25%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});

const enterButton = StyleSheet.create({
  button: {
    backgroundColor: 'deepskyblue',
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    width: '47%',
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});

const numButton = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    width: '22.5%',
  },
  text: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
});

const operButton = StyleSheet.create({
  button: {
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    justifyContent: 'center',
    marginLeft: '2%',
    marginTop: '2%',
    width: '22.5%',
  },
  text: {
    color: 'black',
    fontSize: 32,
    textAlign: 'center',
  },
});

const styles = StyleSheet.create({
  buttonContainer: {
    height: '70%',
  },
  row: {
    flexDirection: 'row',
    height: 100,
  },
});

export default Calculator;
