import { View, FlatList, TouchableOpacity, TextInput, Text, Button } from 'react-native'
import { useState } from 'react';
import React from 'react'
import NewItems from './newsItems/NewItems';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AwesomeAlert from 'react-native-awesome-alerts';
import Style from './HomeStyleScr';

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const HomeScr = ({ navigation }) => {

  const [ShowAlert, setShowAlert] = useState(false)

  let inputData = [
    {
      id: 1,
      name: 'AnhNQ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 2,
      name: 'name2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 3,
      name: 'name3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
    },
    {
      id: 4,
      name: 'name4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 5,
      name: 'name5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 6,
      name: 'name6',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 7,
      name: 'name7',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },
    {
      id: 8,
      name: 'name8',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non.',
      image: introImg,
    },


  ];

  return (
    <View>
      <FlatList
        keyExtractor={item => `${item.id}`}
        data={inputData}
        renderItem={({ item }) => <NewItems inputData={item} navigation={navigation} />}
      />
      <TouchableOpacity style={Style.addBtnBox} onPress={() => setShowAlert(!ShowAlert)}>
        <Entypo name='plus' style={Style.addBtn} />
      </TouchableOpacity>
      
      <AwesomeAlert

        show={ShowAlert}
        title='New Post'
        titleStyle={Style.titleAlert}

        closeOnTouchOutside={false}
        closeOnHardwareBackPress={false}

        showCancelButton={true}
        showConfirmButton={true}

        cancelText="Cancel"
        cancelButtonStyle={Style.btnBgr}
        cancelButtonTextStyle={Style.btnText}

        confirmText="Post"
        confirmButtonStyle={Style.btnBgr}
        confirmButtonTextStyle={Style.btnText}

        onCancelPressed={() => {
          setShowAlert(false)
        }}
        onConfirmPressed={() => {
          setShowAlert(true)
        }}

        customView={
          <View>
            <TextInput placeholder="What's on your mind?"
            multiline
            numberOfLines={2}
            maxLength={400}
            style={Style.inputText}
            />
            <TouchableOpacity style={Style.addImgBox}>
              <MaterialIcons style={Style.addImgIcon} name='add-a-photo'/>
              <Text style={Style.addImg}>Add a photo</Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  )
}

export default HomeScr