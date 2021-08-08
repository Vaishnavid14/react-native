//Example of onLongPress on TouchableOpacity in React Native
//https://aboutreact.com/example-of-onlongpress-on-touchableopacity-in-react-native/


//to press and long press the same button is add activeOpacity attribute in TouchableOpacity


//import React in our code
import React from 'react';

//import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

const App = () => {

    const handlerLongClick = () =>{
        alert('Button Long Pressed');
    }  
    
    const handlerClick = () =>{
        alert('Button Pressed');
    }

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    Example of onLongPress on TouchableOpacity in React Native
                </Text>
                <TouchableOpacity
                onLongPress = {handlerLongClick}
                onPress= {handlerClick}
                //here is the trick
                activeOpacity={0.6}
                style={styles.buttonStyle}
                >
                    <Text style={styles.buttonStyle}>LONG PRESS THE BUTTON</Text>
                </TouchableOpacity>   
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
    },
    buttonStyle: {
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#EE5407',
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 16,
        paddingVertical: 16,
    },
});

export default App;
