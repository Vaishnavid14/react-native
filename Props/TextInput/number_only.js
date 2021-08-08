//Example to Get Only Numeric Value From TextInput in React Native
//https://aboutreact.com/example-to-get-only-numeric-value-from-textinput-in-react-native/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TextInput } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInputStyle}
                    placeholder="Enter Numeric Values Only"
                    placeholderTextColor="#60605e"
                    numeric
                    keyboardType={'numeric'}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 1,
    },
    textInputStyle: {
        width: 250,
        backgroundColor: '#dde8c9',
        padding: 16,
    },
});

export default App;
