import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CallBackComps = (props) => {
    props.parentCallBack('TesstttttDataaa');
  return (
    <View>
      <Text>Name: {props.name}; Age: {props.age}</Text>
    </View>
  )
}

export default CallBackComps

const styles = StyleSheet.create({})