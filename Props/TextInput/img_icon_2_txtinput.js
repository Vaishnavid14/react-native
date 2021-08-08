//Image Icon in React Native TextInput
//https://aboutreact.com/image-icon-with-react-native-textinput/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, TextInput, Image } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_username.png',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Enter Your Name Here"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image
                        source={{
                            uri:
                                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/input_phone.png',
                        }}
                        style={styles.imageStyle}
                    />
                    <TextInput
                        style={{ flex: 1 }}
                        placeholder="Enter Your Mobile No Here"
                        underlineColorAndroid="transparent"
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
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 40,
        borderRadius: 5,
        margin: 10,
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});

export default App;
