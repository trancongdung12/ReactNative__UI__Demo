import React, { Component } from 'react'
import { Text, View,Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Banner from '../assets/fb_banner.png'
export default class Facebook extends Component {
    render() {
        return (
            <View style={this.styles.container}>
                <Image
                style = {this.styles.img}
                 source={Banner}
                />
                <View style={this.styles.languages}>
                    <Text  style={this.styles.textLan}>English •</Text>
                    <Text  style={this.styles.textLan}>我們(我們) •</Text>
                    <Text

                     style={{color:"blue"}}
                    >Thêm...</Text>
                </View>
                <TextInput
                 style={this.styles.inputText}
                placeholder="Số điện thoại hoặc email"
                />
                <TextInput
                style={this.styles.inputText}
                placeholder="Mật khẩu"
                />
                <TouchableOpacity style={this.styles.btnLogin}>
                    <Text style={this.styles.textBtn}>Đăng nhập</Text>
                </TouchableOpacity>
                <Text style={this.styles.textForgot}>Quên mật khẩu?</Text>
                <View style={this.styles.containOption}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={{width: 50, textAlign: 'center'}}>Hoặc</Text>
                    </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                    </View>
                <TouchableOpacity  style={this.styles.btnSignUp}>
                    <Text  style={this.styles.textBtnSignUp}
                  
                    >Tạo tài khoản Facebook mới</Text>
                </TouchableOpacity>
            </View>
        )
    }
    styles = StyleSheet.create({
        container:{
            flex: 1,
            flexDirection:"column",
        },
        img:{
            width:"100%",
            height:180
        },
        languages:{
           marginTop:10,
           flexDirection:'row',
           alignSelf:"center",
           marginBottom:70
        },
        textLan:{
            marginRight:5
        },
        inputText:{
            fontSize:18,
            width:"80%",
            alignSelf:"center",
            marginBottom:20,
            borderBottomColor:"gray",
            borderBottomWidth:1
        },
        btnLogin:{
            width:"80%",
            backgroundColor:"blue",
            alignSelf:"center",
            height:50,
            borderRadius:5
        },
        textBtn:{
            padding:13,
            alignSelf:"center",
            color:"white",
            fontWeight:"bold"
        },
        textForgot:{
            fontWeight:"bold",
            color:"blue",
            marginTop:15,
            alignSelf:"center"
        },
        containOption:{
            width:"80%",
            alignItems:"center",
            flexDirection:"row",
            alignSelf:"center",
            marginTop:50,
            marginBottom:50
        },
        btnSignUp:{
            alignSelf:'center',
            backgroundColor:"green",
            width:"60%",
            borderRadius:5,
            height:40,
            
        },
        textBtnSignUp:{
            padding:10,
            alignSelf:"center",
            color:"white",
            fontWeight:"bold"
        }
        
        
    })
}
