//import React in our code
import React, { useState, useEffect } from 'react';

//import all the components we are going to use
import {
    SafeAreaView,
    Text,
    View,
    Image,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity,
    Switch
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';


const Stack = createStackNavigator();

const App = ({ navigation, route }) => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstPage">
                <Stack.Screen 
                    name="FirstPage"
                    component={FirstPage}
                    options={{
                        title:'First Page',
                        headerStyle:{
                            backgroundColor:'#f4511e',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
                 <Stack.Screen
                    name="SecondPage"
                    component={SecondPage}
                    options={{
                        title: 'Second Page', //Set Header Title
                        headerStyle: {
                            backgroundColor: '#f4511e', //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
                
                <Stack.Screen
                    name="ThirdPage"
                    component={ThirdPage}
                    options={{
                        title: 'Third Page', //Set Header Title
                        headerStyle: {
                            backgroundColor: '#f4511e', //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold', //Set Header text style
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
