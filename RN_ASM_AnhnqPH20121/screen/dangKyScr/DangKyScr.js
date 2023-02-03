import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Style from './DangKyScrStyle'
import Icons from 'react-native-vector-icons/Ionicons'

const DangKyScr = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity style={Style.backBtnBox} onPress={() => navigation.navigate("DangNhap")}>
                <Icons name='arrow-back' style = {Style.backBtn}/>
            </TouchableOpacity>

            <View style={Style.container}>
                <View style={Style.textBox}>
                    <Text style={Style.textIntro}>Wellcome!</Text>
                </View>
                <View style={Style.textBox}>
                    <Text style={Style.textDes}>Create your account</Text>
                </View>

                <View style={Style.inputBox}>
                    <Text style={Style.inputLabel}>User Name</Text>
                    <TextInput style={Style.inputText} placeholder='Enter your full name' />
                </View>
                <View style={Style.inputBox}>
                    <Text style={Style.inputLabel}>Email address</Text>
                    <TextInput style={Style.inputText} placeholder='Enter your email address' />
                </View>
                <View style={Style.inputBox}>
                    <Text style={Style.inputLabel}>Password</Text>
                    <TextInput style={Style.inputText} placeholder='Enter your password' secureTextEntry={true} />
                </View>
                <View style={Style.inputBox}>
                    <Text style={Style.inputLabel}>Confirm password</Text>
                    <TextInput style={Style.inputText} placeholder='Confirm your password' secureTextEntry={true} />
                </View>

                {/* Sign In Button */}
                <TouchableOpacity onPress={() => navigation.navigate("TabNav")} style={Style.btnSignIn}>
                    <View>
                        <Text style={Style.textSignIn}>Sign Up</Text>
                    </View>
                </TouchableOpacity>

                {/* Sign Up Button */}
            <View style={Style.textBox4}>
                <Text style={Style.dontAcc}>You have account? Let's</Text>
                <TouchableOpacity onPress={() => navigation.navigate("DangNhap")}>
                    <Text style={Style.signUp}>Sign in</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    )
}

export default DangKyScr