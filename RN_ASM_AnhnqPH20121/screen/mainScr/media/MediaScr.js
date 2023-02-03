import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MediaItem from './MediaItem/MediaItem'
import Style from './MediaStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MediaScr = () => {
    let inputData = [
        {
            id: 1,
            name: 'Music1',
            author: 'Author1'
        },
        {
            id: 2,
            name: 'Music2',
            author: 'Author2'
        },
        {
            id: 3,
            name: 'Music3',
            author: 'Author3'
        },
        {
            id: 4,
            name: 'Music4',
            author: 'Author4'
        },
        {
            id: 5,
            name: 'Music5',
            author: 'Author5'
        },
        {
            id: 6,
            name: 'Music6',
            author: 'Author6'
        },
        {
            id: 7,
            name: 'Music7',
            author: 'Author7'
        },
        {
            id: 8,
            name: 'Music8',
            author: 'Author8'
        },
        {
            id: 9,
            name: 'Music9',
            author: 'Author9'
        },
        {
            id: 10,
            name: 'Music10',
            author: 'Author10'
        },
    ]
    return (
        <View>
            <View style={Style.listBH}>
                <FlatList
                    keyExtractor={item => `${item.id}`}
                    data={inputData}
                    renderItem={({ item }) => <MediaItem inputData={item} />}
                />
            </View>
            <View style={Style.playNow}>
                <View style={Style.buttonContainer}>
                    <TouchableOpacity style={Style.buttonBox}>
                        <Ionicons style={Style.mediaBtn} name='play-skip-back-circle-outline'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={Style.buttonBox}>
                        <Ionicons style={Style.mediaBtn} name='play-circle-outline'/>
                    </TouchableOpacity>
                    {/* pause-circle-outline */}
                    <TouchableOpacity style={Style.buttonBox}>
                        <Ionicons style={Style.mediaBtn} name='play-skip-forward-circle-outline'/>
                    </TouchableOpacity>
                </View>
                <View style={Style.songInfor}>
                    <Text style={Style.songName}>Song Name</Text>
                    <Text style={Style.songAuthor}>Author</Text>
                </View>
            </View>
        </View>
    )
}

export default MediaScr