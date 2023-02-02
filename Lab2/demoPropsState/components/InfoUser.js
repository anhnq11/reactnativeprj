import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const infoUser = (props) => {
  return (
    <View>
      <Text>Name: {props.name}; Age: {props.age}</Text>
    </View>
  )
}

export default infoUser;

const styles = StyleSheet.create({})