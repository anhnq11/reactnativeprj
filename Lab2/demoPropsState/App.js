import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import InfoUser from './components/InfoUser'
import CallBackComps from './components/CallBackComps'


const App = () => {
  const [name, setname] = useState('Demo');
  const [callbackData, setcallbackData] = useState('');

  const updateData = (data) => {
    setname(data);
  }

  const toUpperCaseText = () => {
    // Chuyển 'name' thành chữ in hoa - in ngược lại text
    setname(name.toUpperCase());
  }

  // CallBack Function Parent
  const callBackFuct = (cbData) => {
    setcallbackData(cbData);
  }

  return (
    <View style = {styles.container}>
      {/* onChangeText lấy data của TextInput và truyền lên updateData */}
      <TextInput placeholder='Nhập họ và tên...' style = {styles.TextInput} onChangeText = {updateData}/>
      <Button title='Convert' style = {styles.Button} onPress = {toUpperCaseText}/>
      <Text style = {styles.TextOutput}>{name}</Text>

      {/* Truyền từ Comp cha vào Comp con */}
      <InfoUser name = 'abc' age = '20'/>

      {/* Truyền từ Comp con và Comp cha */}
      <CallBackComps parentCallBack = {callBackFuct}/>
      <Text>Child: {callbackData}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    width: '100%', height: '100%',
    justifyContent: 'center', alignItems: 'center',
  },
  TextInput:{
    borderWidth: 2,
    borderColor: '#fff',
    width: '80%',
    marginHorizontal:'10%',
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,

  },
  Button:{
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  TextOutput:{
    marginTop: 5,
    fontSize: 18
  }
})