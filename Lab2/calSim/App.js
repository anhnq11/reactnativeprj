import { Button, Text, TextInput, View } from 'react-native'
import React from 'react'
import StyleApp from './Style.App'
import Maytinh from './components/MayTinh/index'
import GiaiPT from './components/GiaiPT/index'
import { useState } from 'react'

const App = () => {

  const [callBack, setcallBack] = useState('');

  const callBackFuct = (data) => {
    setcallBack(data);
  }

  return (
    <View style = {StyleApp.container}>
      <Text style = {StyleApp.appName}>My Calculator</Text>
      <View style = {StyleApp.mainContent}>
        <Maytinh/>
        {/* <GiaiPT parentCallBack = {callBackFuct}/>
        <Text style = {StyleApp.textResult}>Youreeee Result: {callBack}</Text> */}
      </View>
    </View>
  )
}

export default App;