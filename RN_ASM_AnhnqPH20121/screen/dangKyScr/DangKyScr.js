import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import Style from './DangKyScrStyle'
import Icons from 'react-native-vector-icons/Ionicons'
import URL from '../../UrlAPi';

const DangKyScr = ({ navigation }) => {

    const [fullname, setfullname] = useState('');
    const [name, setname] = useState('');
    const [passw, setpassw] = useState('');
    const [rePassw, setrePassw] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'User', value: '0' },
        { label: 'Admin', value: '1' }
    ]);
    const [isAdmin, setisAdmin] = useState(false)
    const [secuCode, setsecuCode] = useState('')
    const [isSignIn, setisSignIn] = useState(false)

    // Kiểm tra thông tin đăng ký
    const checkRegis = () => {
        let check = true;

        // Kiểm tra trống tên
        if (fullname === '') {
            check = false;
        }

        // Kiểm tra trống tên đăng nhập
        if (name === '') {
            check = false;
        }

        // Kiểm tra trống passw
        if (passw === '') {
            check = false;
        }

        // Kiểm tra trống repassw
        if (rePassw === '') {
            check = false;
        }

        // Kiểm tra chọn quyền đăng ký
        if (value == null) {
            check = false;
        }

        // Kiểm tra trống thông tin
        if (!check) {
            // Trống - Thông báo, yêu cầu nhập
            Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin!')
        } else if (value == '1') {
            // Kiểm tra quyền đăng ký

            // Kiểm tra Security Code
            if (secuCode !== 'anhnq123') {
                Alert.alert('Thông báo', 'Security Code sai!')
                setisSignIn(false)
            } else {
                setisSignIn(true)
            }

        } else {
            setisSignIn(true)
        }

        // Thông tin hợp lệ => Đăng ký tài khoản
        if (isSignIn) {
            // Đầy đủ thông tin
            // Kiểm tra trùng tên đăng nhập
            let mCheck = true;
            let url = URL + '/profiles?name=' + name;
            fetch(url)
                .then((res) => { return res.json() })
                .then(async (resLog) => {
                    if (resLog.length != 0) {
                        mCheck = false;
                        Alert.alert('Thông báo', 'Tên đăng nhập đã tồn tại!');
                    } else {
                        // Check passw-repassw
                        if (passw != rePassw) {
                            Alert.alert('Thông báo', 'Xác nhận mật khẩu sai!');
                            mCheck = false;
                        } else {
                            // Gửi thông tin tài khoản lên server

                            let accInfo = {
                                name: name,
                                password: passw,
                                fullname: fullname,
                                type: value,
                                img: 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
                            }

                            let urlPost = URL + '/profiles'
                            fetch(urlPost, {
                                method: 'POST',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(accInfo)
                            })
                                .then((res) => {
                                    if (res.status == 201) {
                                        Alert.alert("Thông báo!", "Đăng ký tài khoản thành công!")
                                        navigation.navigate("DangNhap")
                                    }
                                    else {
                                        Alert.alert("Add Fail!")
                                        console.log(res.status);
                                    }
                                })
                                .catch((ex) => {
                                    console.log(ex);
                                });
                        }
                    }
                })
        }
    }

    return (
        <View>
            <TouchableOpacity style={Style.backBtnBox} onPress={() => navigation.navigate("DangNhap")}>
                <Icons name='arrow-back' style={Style.backBtn} />
            </TouchableOpacity>

            <View style={Style.container}>
                <View style={Style.textBox}>
                    <Text style={Style.textIntro}>Wellcome!</Text>
                </View>
                <View style={Style.textBox}>
                    <Text style={Style.textDes}>Create your account</Text>
                </View>

                <View style={Style.inputBox}>
                    {/* <Text style={Style.inputLabel}>Full Name</Text> */}
                    <TextInput style={Style.inputText} placeholder='Enter your full name' onChangeText={(text) => setfullname(text)} />
                </View>
                <View style={Style.inputBox}>
                    {/* <Text style={Style.inputLabel}>User Name</Text> */}
                    <TextInput style={Style.inputText} placeholder='Enter your username' onChangeText={(text) => setname(text)} />
                </View>
                <View style={Style.inputBox}>
                    {/* <Text style={Style.inputLabel}>Password</Text> */}
                    <TextInput style={Style.inputText} placeholder='Enter your password' onChangeText={(text) => setpassw(text)} secureTextEntry={true} />
                </View>
                <View style={Style.inputBox}>
                    {/* <Text style={Style.inputLabel}>Confirm password</Text> */}
                    <TextInput style={Style.inputText} placeholder='Confirm your password' onChangeText={(text) => setrePassw(text)} secureTextEntry={true} />
                </View>
                <View>
                    {/* <Text style={Style.inputLabel}>Account Type</Text> */}
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder="Account Type"
                        placeholderStyle={{
                            color: '#8B8B8B',
                            fontWeight: '500'
                        }}
                        style={Style.inputBox}
                        textStyle={{ fontSize: 18, fontWeight: '600' }}
                        labelStyle={{ fontSize: 18, fontWeight: '600' }}
                        dropDownContainerStyle={{
                            backgroundColor: "#dfdfdf",
                            borderWidth: 2,
                            borderColor: '#30CF59',
                            width: '90%'
                        }}
                        onChangeValue={(value) => {
                            console.log(value);
                            value === '1' ? setisAdmin(true) : setisAdmin(false)
                        }}
                    />
                </View>

                {
                    isAdmin ? <View style={Style.inputBox}>
                        <TextInput style={Style.inputText} placeholder='Security Code' onChangeText={(text) => setsecuCode(text)} secureTextEntry={true} />
                    </View> : <View></View>
                }

                {/* Sign In Button */}
                <TouchableOpacity style={Style.btnSignIn} onPress={checkRegis}>
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