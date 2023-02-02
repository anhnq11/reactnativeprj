import { View, Text, TextInput, Button, Alert } from 'react-native'
import React from 'react'
import styles from './style'
import { useState } from 'react'

const index = (props) => {
    const [firstNum, setfirstNum] = useState('0');
    const [secondNum, setsecondNum] = useState('0');
    const [result, setresult] = useState('');

    const updateData1 = (data) => {
        setfirstNum(data);
    }
    
    const updateData2 = (data) => {
        setsecondNum(data);
    }

    const toResult = () => {
        let check = true;
        let alertIsClose = false;
        if(firstNum == ''){
            Alert.alert('Thông báo', 'Nhập số A!',  [
                {
                  text: "Cancel",
                  onPress: () => alertIsClose = true,
                },
              ]);
            check = false;
        }   else{
            if(firstNum == 0){
                Alert.alert('Thông báo', 'Số A không hợp lệ!',[
                    {
                      text: "Cancel",
                      onPress: () => alertIsClose = true,
                    },
                  ]);
                check = false;
            }   else{
                alertIsClose = true;
            }
        }

        if(alertIsClose){
            if(secondNum == ''){
                Alert.alert('Thông báo', 'Nhập số B!');
                check = false;
            }
        }

        if(check == true){
            let num = -parseInt(secondNum)/parseInt(firstNum);
            setresult(num);
            props.parentCallBack(num);
            console.log(num);
        }
    }

    const toReset = () => {
        console.log('ResetClick!!')
        setfirstNum('');
        setsecondNum('');
        setresult('');
        props.parentCallBack('');
    }

  return (
    <View style = {{borderTopWidth: 2, borderTopColor: '#fff', marginTop: 10, paddingTop: 5}}>
      <View style = {styles.container}>
          <TextInput placeholder='Input Number...' keyboardType='numeric' value={firstNum} style = {styles.TextInput} onChangeText = {updateData1}/>
          <TextInput placeholder='Input Number...' keyboardType='numeric' value={secondNum} style = {styles.TextInput} onChangeText = {updateData2}/>
      </View>
      <Button title='Reset' onPress={toReset}/>
      <View style = {{marginTop: 10}}>
        <Button title='Result' onPress={toResult} />      
      </View>
    </View>
  )
}

export default index;