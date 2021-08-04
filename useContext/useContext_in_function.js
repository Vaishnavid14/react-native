import React, { Component } from 'react'
import { ThemeContext } from './App'
import { SafeAreaView, Text, View, Button, } from 'react-native';

export default function FunctionContextComponent(){
    //using the context of ThemeContext
    const darkTheme = React.useContext(ThemeContext)
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        height: '45%',
        width: '100%',
        flexDirection: "row",
        justifyContent: 'center',
    }
    return(
        <View style={themeStyles}>
            <Text>Function Theme</Text>
        </View>
    )
}
