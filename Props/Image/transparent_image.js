//Example of onLongPress on TouchableOpacity in React Native
//https://aboutreact.com/example-of-onlongpress-on-touchableopacity-in-react-native/

//import React in our code
import React from 'react';

//to make a image transparent use opacity

//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
const App = () => {

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text>Original</Text>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'center',
                    }}
                />
                <Text>With Alpha Opacity</Text>
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        resizeMode: 'center',
                        //resizeMode can be
                        //cover, contain, stretch, repeat, center
                        opacity: 0.2,
                        //you can set between 0 to 1
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 30,
        padding: 30,
        alignItems: 'center',
    },
});

export default App;
