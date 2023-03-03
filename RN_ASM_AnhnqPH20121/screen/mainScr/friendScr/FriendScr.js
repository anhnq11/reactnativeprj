import { View, Text, FlatList, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './friendItem/FriendItem'
import AsyncStorage from '@react-native-async-storage/async-storage';
import URL from '../../../UrlAPi'
import Style from './FriendStyleScr';

const FriendScr = ({ navigation }) => {

  const [profiles, setprofiles] = useState([])
  const [isLoading, setisLoading] = useState(false);
  const [userInfo, setuserInfo] = useState({})

  // Lấy thông tin người dùng hiện tại trong LS, hiển thị lên màn hình
  const getUserInfo = async () => {
    try {
      const value = await AsyncStorage.getItem('loginInfo')
      if (value !== null) {
         getProfiles(JSON.parse (value))
      }
    } catch (e) {
      console.log("Error: " + e);
    }
  }

  // Fetch data profile - server: Lấy danh sách tài khoản
  const getProfiles = async (value) => {
    let url = URL + '/profiles?id_ne=' + value.id + '&_embed=follows'
    setuserInfo(value)
    try {
      const response = await fetch(url);
      const json = await response.json();
      setprofiles(json);
    } catch (error) { 
      console.error(error);
    }
  }

  // Refresh
  React.useEffect(() => {
    getUserInfo();
  }, []);

  // Loadata
  const loadData = React.useCallback(() => {
    setisLoading(true);
    getUserInfo();
    setisLoading(false);
  }, []);

  return (
    <View style={Style.container}>
      <FlatList
        keyExtractor={(item) => { return item.id }}
        data={profiles}
        renderItem={({ item }) => <FriendItem inputData={item} navigation={navigation} user={userInfo} onRefresh={() => loadData()} />}
        key={(item) => { return item.id }}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={loadData} />
        }
      />
    </View>
  )
}

export default FriendScr