import { View, Text, FlatList, ScrollView, RefreshControl } from 'react-native'
import React from 'react'
import { useState } from 'react'
import FriendItem from './friendItem/FriendItem'

const FriendScr = ( { navigation }) => {

  const [profiles, setprofiles] = useState([])
  const [isLoading, setisLoading] = useState(false);


  // Fetch data profile - server
  const getProfiles = async () => {
    let url = 'http://192.168.106.105:3000/profile'
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
    getProfiles();
  }, []);

  // Loadata
  const loadData = React.useCallback(() => {
    setisLoading(true);
    getProfiles();
    setisLoading(false);
  }, []);
  
  return (
    <View>
      <FlatList
      keyExtractor={(item) => { return item.id }}
      data={profiles}
      renderItem={({ item }) => <FriendItem inputData = {item} navigation={navigation} />} 
      key={(item) => { return item.id }}
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={loadData} />
          }
      />
    </View>
  )
}

export default FriendScr