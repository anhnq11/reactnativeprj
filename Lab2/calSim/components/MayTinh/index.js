import { View, Text, Button, Touchable, TouchableOpacity, Alert } from 'react-native'
import * as React from 'react'
import { useState } from 'react'
import styles from './style'

const index = () => {

    const [firstNum, setfirstNum] = useState('');
    const [secondNum, setsecondNum] = useState('');
    const [reSult, setreSult] = useState('0');
    const [cal, setcal] = useState('');

    const handleNumberPress = (value) => {
        setfirstNum(firstNum + value);
    };
    
    const handleCalPress = (value) => {
        setsecondNum(firstNum);
        setfirstNum('');
        setcal(value);
    };

    const clearScr = () => {
        setcal('');
        setfirstNum('');
        setsecondNum('');
        setreSult('0')
    }

    const newCal = () => {
        setfirstNum('');
        setsecondNum('');
        setreSult('0');
    }

    const toResult = () => {
        switch (cal) {
            case '+':
                setreSult(parseFloat(secondNum) + parseFloat(firstNum));
                break;
            case '-':
                setreSult(parseFloat(secondNum) - parseFloat(firstNum));
                break;
            case '*':
                setreSult(parseFloat(secondNum) * parseFloat(firstNum));
                break;
            case '/':
                setreSult(parseFloat(secondNum) / parseFloat(firstNum));
                break;
            default:
                if(firstNum.length !== 0){
                    setreSult(firstNum);
                    newCal();
                }
                break;
        }
    }

  return (
    <View style = {styles.container}>
      <View style = {styles.calScreen}>
          <Text style = {styles.textOnScr}>{secondNum}{cal}{firstNum}</Text>
          <Text style = {styles.Result}>{reSult}</Text>
      </View>
      <View style = {styles.keyBoard}>
        <View style = {styles.rowKeyBoard}>
            <TouchableOpacity style = {styles.calButton } onPress = {() => clearScr()}>
                <Text style = {styles.textButton}>C</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton}>
                <Text style = {styles.textButton}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton}>
                <Text style = {styles.textButton}>D</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton2} onPress = {() => handleCalPress('/')}>
                <Text style = {styles.textButton}>/</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.rowKeyBoard}>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('7')}>
                <Text style = {styles.textButton}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('8')}>
                <Text style = {styles.textButton}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('9')}>
                <Text style = {styles.textButton}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton2} onPress = {() => handleCalPress('*')}>
                <Text style = {styles.textButton}>*</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.rowKeyBoard}>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('4')}>
                <Text style = {styles.textButton}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('5')}>
                <Text style = {styles.textButton}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('6')}>
                <Text style = {styles.textButton}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton2} onPress = {() => handleCalPress('-')}>
                <Text style = {styles.textButton}>-</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.rowKeyBoard}>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('1')}>
                <Text style = {styles.textButton}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('2')}>
                <Text style = {styles.textButton}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('3')}>
                <Text style = {styles.textButton}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton2} onPress = {() => handleCalPress('+')}>
                <Text style = {styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>

        <View style = {styles.rowKeyBoard}>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('0')}>
                <Text style = {styles.textButton}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('00')}>
                <Text style = {styles.textButton}>00</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton3} onPress = {() => handleNumberPress('.')}>
                <Text style = {styles.textButton}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.calButton2} onPress = {() => toResult()}>
                <Text style = {styles.textButton}>=</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default index