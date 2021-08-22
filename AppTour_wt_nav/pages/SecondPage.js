// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import React, { useState, useEffect } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { copilot, walkthroughable, CopilotStep,  } from "react-native-copilot";

import FirstPage from './FirstPage';
import ThirdPage from './ThirdPage';
import './Help';

const SecondPage = (props) => {
    const { navigation, route } = props;
    
    const WalkthroughableText = walkthroughable(Text)
    const WalkThroughableImage = walkthroughable(Image)
    const WalkThroughableButton = walkthroughable(TouchableOpacity)
    const handleStepChange = (step) => {
        console.log(`Current step is: ${step.name}`);
        
    }
    //route.params?.post
    useEffect(() => {
        foo ? props.start() : null
        props.copilotEvents.on('stepChange', handleStepChange)
    }, []);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        This is Second Page of the App
                    </Text>
                    <CopilotStep
                        text="Click to go back"
                        order={1}
                        name="firstUniqueKey"
                    >
                        <WalkThroughableButton>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.goBack()}
                        ><Text>Go back</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                    <CopilotStep
                        text="Click to push the page"
                        order={2}
                        name="secondUniqueKey"
                    >
                        <WalkThroughableButton>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.push('SecondPage')}
                    ><Text>Go to second Page .. again</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                    <CopilotStep
                        text="Click to go to replace with third page"
                        order={3}
                        name="thirdUniqueKey"
                    >
                        <WalkThroughableButton>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.replace('ThirdPage', {
                                someParam: 'Param',
                            })
                        }
                    ><Text>Replace this screen with Third Page</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                    <CopilotStep
                        text="Click to reset the navigation to third page"
                        order={4}
                        name="fourthUniqueKey"
                    >
                        <WalkThroughableButton>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                            navigation.reset({
                                index: 0,
                                routes: [
                                    {
                                        name: 'ThirdPage',
                                        params: { someParam: 'reset' },
                                    },
                                ],
                            })
                        }
                    ><Text>Reset navigator state to Third Page</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                    <CopilotStep
                        text="Click to got to first page"
                        order={5}
                        name="fifthUniqueKey"
                    >
                        <WalkThroughableButton>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('FirstPage')}
                    ><Text>Go to First Page</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                    <CopilotStep
                        text="Click to go to third page"
                        order={6}
                        name="sixthUniqueKey"
                    >
                        <WalkThroughableButton>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('ThirdPage', { someParam: 'Param1' })}
                    ><Text>Go to Third Page</Text></TouchableOpacity></WalkThroughableButton></CopilotStep>
                </View>
                <Text
                    style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    Navigate Between Screens using
                    {'\n'}
                    React Navigation
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        textAlign: 'center',
                        color: 'grey'
                    }}>
                    www.aboutreact.com
                </Text>
            </View>
        </SafeAreaView>
    );
}

const style = {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingTop: 5
};

const Foo = () =>{
    console.log(foo);
    global.foo = false;
    console.log(foo);
}

export default copilot({
    labels: {
        skip: <TouchableOpacity onPress={() => Foo()}><Text>Skip</Text></TouchableOpacity>,
        finish: <TouchableOpacity onPress={() => Foo()}><Text>Finish</Text></TouchableOpacity>
    },
    verticalOffset: 24,
    arrowColor: '#FF00FF',
    tooltipStyle: style,
    backdropColor: "rgba(50, 50, 100, 0.9)",
    overlay: "svg",//or view
    animated: true
})(SecondPage);

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
});
