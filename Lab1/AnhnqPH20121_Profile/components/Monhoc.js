import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import rnIcon from '../assets/react-icon.png';

const Monhoc = () => {
  return (
    <View style = {styles.container}>
      <Image source={rnIcon} style = {styles.image}/>
      <Text style = {styles.text}>React Native</Text>
    </View>
  );
};

export default Monhoc;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    image:{
        width: '20%', 
        height: null, 
        aspectRatio: 128/111,
      },
    text:{
        fontSize: 20,
        marginLeft: 10
    }
});
