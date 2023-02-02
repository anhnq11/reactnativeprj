import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Monhoc from './components/Monhoc';
import FptLogo from './assets/fpt_logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={FptLogo} style={styles.image} />
      <Text style={styles.text}>Họ và tên: Nguyễn Quốc Anh</Text>
      <Text style={styles.text}>Lớp: CP17305</Text>
      <Text style={styles.text}>Email: anhnqph20121@fpt.edu.vn</Text>
      <View style={styles.monhoc}>
        <Monhoc />
        <Monhoc />
        <Monhoc />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '80%',
    height: null,
    aspectRatio: 1260 / 428,
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
  },
  monhoc: {
    marginTop: 15,
  },
});
