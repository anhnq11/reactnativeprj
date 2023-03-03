import { View, Text, TouchableOpacity, TextInput, Image, Modal, Alert } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'
import Style from './DangNhapStyleScr'
import URL from '../../UrlAPi';

const DangNhapScr = ({ navigation }) => {

    const [userName, setuserName] = useState('');
    const [passw, setpassw] = useState('');

    // Kiểm tra thông tin đăng nhập
    const checkLogin = () => {
        let check = true;

        // Check trống tên đăng nhập
        if (userName === '') {
            check = false;
        }

        // Check trống mật khẩu
        if (passw === '') {
            check = false;
        }

        // Fetch dữ liệu, kiểm tra thông tin tồn tại
        if (check) {
            let mCheck = true;
            let url = URL + '/profiles?name=' + userName;
            fetch(url)
                .then((res) => { return res.json() })
                .then(async (resLog) => {
                    // Kiểm tra tồn tại tên đăng nhập và mật khẩu
                    if (resLog.length != 1) {
                        mCheck = false;
                    } else {
                        let objU = resLog[0];
                        if (objU.password != passw) {
                            mCheck = false;
                        } else {
                            // Đẩy lại thông tin User lên server
                            try {
                                await AsyncStorage.setItem('loginInfo', JSON.stringify(objU))
                            } catch (e) {
                                console.log(e);
                            }
                        }
                    }
                    if (!mCheck) {
                        Alert.alert('Thông báo', 'Tên đăng nhập hoặc mật khẩu không đúng!')
                    }
                    else {
                        Alert.alert('Thông báo', 'Đăng nhập thành công!');
                        navigation.navigate("TabNav")
                    }
                })
        }
        // Sai thông tin, thông báo nhập lại
        else {
            Alert.alert('Thông báo', 'Nhập đầy đủ tên đăng nhập và mật khẩu!')
        }

        // Ghi dữ liệu vào LS

    }

    return (
        <View style={Style.container}>
            <View style={Style.textBox}>
                <Text style={Style.textIntro}>Hello Again!</Text>
            </View>
            <View style={Style.textBox}>
                <Text style={Style.textDes}>Sign in to your account</Text>
            </View>

            {/* Text Input */}
            <View style={Style.inputBox}>
                <Text style={Style.inputLabel}>Username</Text>
                <TextInput style={Style.inputText} placeholder='Enter your username' onChangeText={(text) => { setuserName(text) }} />
            </View>
            <View style={Style.inputBox}>
                <Text style={Style.inputLabel}>Password</Text>
                <TextInput style={Style.inputText} placeholder='Enter your password' secureTextEntry={true} onChangeText={(text) => { setpassw(text) }} />
            </View>
            <TouchableOpacity style={Style.textBox2}>
                <Text style={Style.forgotPass}>Forgot your password</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity onPress={checkLogin} style={Style.btnSignIn}>
                {/* () => navigation.navigate("TabNav") */}
                <View>
                    <Text style={Style.textSignIn}>Sign In</Text>
                </View>
            </TouchableOpacity>

            {/* Sign In Option */}
            <View style={Style.textBox3}>
                <Text style={Style.orWith}>----- Or with -----</Text>
            </View>
            <TouchableOpacity style={Style.loginBox}>
                <View style={Style.loginImgBox}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png' }} style={Style.loginImg} />
                </View>
                <Text style={Style.loginLabel}>Sign in with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.loginBox}>
                <View style={Style.loginImgBox}>
                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' }} style={Style.loginImg} />
                </View>
                <Text style={Style.loginLabel}>Sign in with Twitter</Text>
            </TouchableOpacity>

            {/* Sign Up Button */}
            <View style={Style.textBox4}>
                <Text style={Style.dontAcc}>Don't have account? Let's</Text>
                <TouchableOpacity onPress={() => navigation.navigate("DangKy")}>
                    <Text style={Style.signUp}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DangNhapScr