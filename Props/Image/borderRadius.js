//Example to Set Border Radius of an Image in React Native
//https://aboutreact.com/example-to-set-border-radius-of-an-image-in-react-native/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Image } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                        width: 300,
                        height: 300,
                        //Below lines will help to set the border radius
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 15,
                        borderTopRightRadius: 30,
                        borderTopLeftRadius: 15,
                        overflow: 'hidden',
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#606070',
    },
});

export default App;
