import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native'

export default class Momo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor='#ad076b'
                />
                <Text style={styles.title}>Nhập số điện thoại</Text>
                <Text style={styles.smallText}>Dùng số điện thoại để đăng ký hoặc đăng nhập Ví MoMo</Text>
                <TextInput style={styles.inputText}
                caretHidden={true}
                placeholder="Nhập số điện thoại"
                />
                <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText}>TIẾP TỤC</Text>
                </TouchableOpacity>
          </View>
        )
    };
}
const styles = StyleSheet.create({
    container:{
      
      flex:1,
      flexDirection:"column",
      backgroundColor:"#ad076b",
      padding:40,
      height:500,
    },
    title:{
      alignSelf:"center",
      marginTop:10,
      marginBottom:10,
      fontSize:20,
      color:"white"
    },
    smallText:{
      paddingLeft:25,
      paddingRight:25,
      fontSize:15,
      color:"white",
      textAlign:'center'
    },
    inputText:{
      
      fontSize:20,
      marginTop:25,
      backgroundColor:"white",
      borderRadius:30,
      height:50,
      textAlign:"center"
    },
    button:{
      marginTop:10,
      height:50,
      borderRadius:30,
      backgroundColor:"#830252"
    },
    btnText:{
      marginTop:13,
      alignSelf:"center",
      fontSize:20,
      color:"white"
    }
});
