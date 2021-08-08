// Example to Convert Text to Upper or Lower Case in React Native
// https://aboutreact.com/example-to-convert-text-to-upper-or-lower-case-in-react-native/

// Import React in our code
import React, { useState } from 'react';

// Import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';

const App = () => {
    const [defaultText, setDefaultText] = useState('About React');

    const convertTextToUpperCase = () => {
        // To convert Upper Case
        let upperCaseText = defaultText.toUpperCase();
        setDefaultText(upperCaseText);
    };

    const convertTextToLowerCase = () => {
        // To convert Lower Case
        let lowerCaseText = defaultText.toLowerCase();
        setDefaultText(lowerCaseText);
    };

    const convertTextToTitleCase = () => {
        let camelCaseText = defaultText
            .split(' ')
            .map(function (word, index) {
                // First character upper case else lower case
                return word.charAt(0)
                    .toUpperCase() + word.slice(1)
                        .toLowerCase();
            })
            .join(' ');
        setDefaultText(camelCaseText);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}> {defaultText} </Text>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="Convert Text To Upper Case"
                        onPress={convertTextToUpperCase}
                        color="#606070"
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="Convert Text To Lower Case"
                        onPress={convertTextToLowerCase}
                        color="#606070"
                    />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button
                        title="Convert Text To Title Case"
                        onPress={convertTextToTitleCase}
                        color="#606070"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 25,
        textAlign: 'center',
    },
});

export default App;
