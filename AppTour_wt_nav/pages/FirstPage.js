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

import SecondPage from './SecondPage';
import './Help';


import { useNavigation} from '@react-navigation/native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot";


const FirstPage = (props) => {
    //const navigation = useNavigation();
    const { navigation, route } = props;
    const [secondStepAction, setSecondStepAction] = useState(true);
    const [darkTheme, setDarkTheme] = useState({data:false});
    const WalkthroughableText = walkthroughable(Text)
    const WalkThroughableImage = walkthroughable(Image)
    const WalkThroughableButton = walkthroughable(TouchableOpacity)


    useEffect(() => {
        props.copilotEvents.on('stepChange', handleStepChange)
        console.log(foo);
    }, []);

    const handleStepChange = (step) => {
        console.log(`Current step is: ${step.name}`);
    }

    const setStart = () =>{
        //foo ? setDarkTheme({ data: true }) : setDarkTheme({ data: false });
        global.foo = true;
    }
   
    const onStartAppTour = () => {
        // Start show AppTour
        // Use AppTour.start(step) to jump to step
        setStart();
        props.start(); 
    };


    const GoToButton = () =>{
        const dam = darkTheme.data;
        navigation.navigate({
            name: 'SecondPage', params: { post: darkTheme.data }
          });
          console.log('new')
        console.log(foo);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <CopilotStep
                    text="This is at left"
                    order={4}
                    name="fourthUniqueKey"
                >
                    <WalkthroughableText style={styles.left}>
                        Text
                    </WalkthroughableText>
                </CopilotStep>
                <CopilotStep
                    text="Go to next page"
                    order={5}
                    name="fifthUniqueKey"
                >
                    <WalkThroughableButton style={styles.right}>
                        <TouchableOpacity style={styles.button} onPress={GoToButton}>
                            <Text style={styles.buttontext}>Right</Text>
                        </TouchableOpacity>
                    </WalkThroughableButton>
                </CopilotStep>
                <CopilotStep
                    text="This is the heading with some style"
                    order={1}
                    name="firstUniqueKey"
                >
                    <WalkthroughableText style={styles.title}>
                        Example of App Introduction Tour in React Native App
                    </WalkthroughableText>
                </CopilotStep>
                <CopilotStep
                    text="This is a image"
                    order={3}
                    name="thirdUniqueKey"
                >
                    <WalkThroughableImage
                        source={{ uri: 'https://cdn.pixabay.com/photo/2021/07/19/22/07/mountains-6479150_960_720.jpg' }}
                        style={styles.image}
                    />
                </CopilotStep>
                {/*Step 2 to show the normal text */}
                <View style={styles.activeSwitchContainer}>
                    <CopilotStep
                        active={secondStepAction}
                        text="This is simple text without style"
                        order={2}
                        name="secondUniqueKey"
                    >
                        <WalkthroughableText style={{ height: 70 }}>
                            Default text without style which can be
                            skipped after disabling the switch
                        </WalkthroughableText>
                    </CopilotStep>

                    <Switch
                        onValueChange={(secondStepAction) => setSecondStepAction(secondStepAction)}
                        value={secondStepAction}
                    />
                </View>
                {/* Button to start the walkthrough */}
                <View style={styles.middleView}>
                        <TouchableOpacity style={styles.button} onPress={()=>onStartAppTour()}>
                            <Text style={styles.buttontext}>Start App Tour</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingTop: 5
};

const Foo = (props) => {
    console.log(foo);
    global.foo = false;
    console.log(foo);
}


export default copilot({
    labels:{
        skip:<TouchableOpacity onPress={() => Foo()}><Text>Skip</Text></TouchableOpacity>,
        finish:'Next Screen'
    },
    verticalOffset: 24,
    arrowColor: '#FF00FF',
    tooltipStyle: style,
    backdropColor: "rgba(50, 50, 100, 0.9)",
    overlay: "svg",//or view
    animated: true
})(FirstPage);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
    },
    middleView: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 20,
        height: 70
    },
    activeSwitchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center',
        paddingHorizontal: 40
    },
    image: {
        width: 140,
        height: 140,
        borderRadius: 70,
        marginVertical: 20
    },
    left: {
        position: 'absolute', left: 25,
        fontSize: 18,
        margin: 5,
        height: 40
    },
    right: {
        position: 'absolute', right: 25,
        fontSize: 18,
        margin: 5,
        height: 40
    }
});