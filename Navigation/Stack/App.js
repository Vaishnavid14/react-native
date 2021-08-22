import * as React from 'react';
import {Button , View , Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

const Stack = createStackNavigator();

function App(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstPage">
                <Stack.Screen
                    name="FirstPage"
                    component={FirstPage}
                    options={{
                        title:'First Page ',
                        headerStyle : {
                            backgroundColor :'#f4511e',
                        },
                        headerTintColor : '#fff',
                        headerTitleStyle :{
                            fontWeight:'bold',
                        },
                    }}
                />
                <Stack.Screen
                    name="SecondPage"
                    component={SecondPage}
                    options={{
                        title:'Second Page'
                        headerStyle:{
                            backgroundColor:'#f4511e',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle:{
                            fontWeight:'bold',
                        },
                    }} 
                />
                <Stack.Screen 
                    name="ThirdPage"
                    component={ThirdPage}
                    options={{
                        title:'Third Page',
                        headerStyle:{
                            backgroundColor:'#f4511e',
                        },
                        headerTintColor:'#fff',
                        headerTitleStyle:{
                            fontWeight:'bold',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
