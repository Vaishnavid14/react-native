// Restart/Reset Current Screen in React Native Without Mounting it Again
// https://aboutreact.com/react-native-restart-reset-current-screen/

// import React in our code
import React, {useState, useEffect} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
} from 'react-native';

import RNRestart from 'react-native-restart';

const App = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    // Resetting default value for the input on restart
    setValue('Default Value');
  }, []);

  const onButtonClick = () => {
    RNRestart.Restart();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.heading}>
            Example of React Native Restart
          </Text>
          <Text style={styles.paragraph}>
            Insert any value in Input and Click Restart Screen. 
            You will see blank TextInput again.
          </Text>
          <TextInput
            placeholder="Please Insert Something"
            defaultValue={value}
            placeholderTextColor="#808080"
            underlineColorAndroid="transparent"
            onChangeText={(text) => setValue(text)}
            style={styles.textInputStyle}
          />
          <View style={{marginTop: 20}}>
            <Button
              title="Restart Screen"
              onPress={onButtonClick}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          Restart/Reset Current Screen in React Native
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 16,
    textAlign: 'center',
  },
  textInputStyle: {
    fontSize: 25,
    textAlign: 'center',
    height: 50,
    backgroundColor: '#d6d6d6',
  },
});

export default App;
