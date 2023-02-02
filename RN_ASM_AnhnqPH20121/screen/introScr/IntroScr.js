import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Style from './StyleIntroScr'

const introImg = 'https://transcode-v2.app.engoo.com/image/fetch/f_auto,c_lfill,w_300,dpr_3/https://assets.app.engoo.com/images/rGTEEA2fm66YMzeJz2UbwkKOW62bZVlqKOKZrXlMN7g.jpeg'

const IntroScr = ({ navigation }) => {
    return (
        <View style={Style.container}>
            <View style={Style.imgIntroBox}>
                <Image source={{ uri: introImg }} style={Style.imgIntro} />
            </View>
            <View style={Style.textBox}>
                <Text style={Style.textIntro}>Let's connect with each other</Text>
            </View>
            <View style={Style.textBox}>
                <Text style={Style.textDes}>Discover the best reels by millions of people</Text>
            </View>
            <View style={Style.textBox}>
                <View style={Style.dotl} />
                <View style={Style.dots} />
                <View style={Style.dots} />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('DangNhap')} style={Style.btnGetStarted}>
                <View>
                    <Text style={Style.textGetStarted}>Get Started</Text>
                    {/* Press to go to DangNhap */}
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default IntroScr