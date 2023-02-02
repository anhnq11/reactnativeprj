import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import Style from './DangNhapStyleScr'

const DangNhapScr = ({ navigation }) => {
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
                <Text style={Style.inputLabel}>Email address</Text>
                <TextInput style={Style.inputText} placeholder='Enter your email address' />
            </View>
            <View style={Style.inputBox}>
                <Text style={Style.inputLabel}>Password</Text>
                <TextInput style={Style.inputText} placeholder='Enter your password' secureTextEntry={true} />
            </View>
            <TouchableOpacity style={Style.textBox2}>
                <Text style={Style.forgotPass}>Forgot your password</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity onPress={() => navigation.navigate("TabNav")} style={Style.btnSignIn}>
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