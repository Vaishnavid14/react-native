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

import { copilot, walkthroughable, CopilotStep } from "react-native-copilot"

const App = (props) => {
    const [secondStepAction, setSecondStepAction] = useState(true);
    const WalkthroughableText = walkthroughable(Text)
    const WalkThroughableImage = walkthroughable(Image)

    useEffect(() => {
        props.copilotEvents.on('stepChange', handleStepChange)
        
    }, []);

    const handleStepChange = (step) => {
        console.log(`Current step is: ${step.name}`);
    }

    const onStartAppTour = () => {
        // Start show AppTour
        // Use AppTour.start(step) to jump to step
        props.start();
    };


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>

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
                    <TouchableOpacity style={styles.button} onPress={onStartAppTour}>
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




export default copilot({
    verticalOffset: 24,
    arrowColor: '#FF00FF',
    tooltipStyle: style,
    backdropColor: "rgba(50, 50, 100, 0.9)",
    overlay: "svg",//or view
    animated: true
})(App);

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
        fontSize: 24,
        textAlign: 'center',
        margin: 20,
        height: 100
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
    }
});
