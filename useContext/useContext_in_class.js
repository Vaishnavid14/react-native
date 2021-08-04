import React, {Component} from 'react'
import {ThemeContext} from './App'
import { SafeAreaView, Text, View, Button, useWindowDimensions, AppState } from 'react-native';

export default class ClassContextComponent extends Component{
    themeStyles(dark){
        return {
            backgroundColor:dark?'#333':'#CCC',
            color:dark?'#CCC':'#333',
            padding:'2rem',
            margin:'2rem'
        }
    }
    render(){
        return(
            <ThemeContext.Consumer>
                {
                    darktheme=>{
                        return (<View style={this.themeStyles(darktheme)}>
                            <Text>Function Theme</Text>
                        </View>)
                    }
                }
            </ThemeContext.Consumer>
        )
    }
}
