// React Native Copy to Clipboard
// https://aboutreact.com/react-native-copy-to-clipboard/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// Using Clipboard API
import Clipboard from '@react-native-community/clipboard';

// Using Clipboard Hook
import { useClipboard } from '@react-native-community/clipboard';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  // For Clipboard Hook
  const [data, setString] = useClipboard();

  const readFromClipboard = async () => {
    //To get the text from clipboard
    let clipboardContent = await Clipboard.getString();
    alert('Text from Clipboard: ' + clipboardContent);
  };

  const writeToClipboard = async () => {
    //To copy the text to clipboard
    Clipboard.setString(input1);
    alert('Copied to Clipboard!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          React Native Copy to Clipboard
        </Text>
        <Text style={styles.titleTextsmall}>
          Using Clipboard API
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(input1) => setInput1(input1)}
          value={input1}
          placeholder="Type here..."
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={writeToClipboard}>
            <Text style={styles.buttonTextStyle}>
              Copy to Clipboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={readFromClipboard}>
            <Text style={styles.buttonTextStyle}>
              Get from Clipboard
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.lineStyle} />
        <Text style={styles.titleTextsmall}>
          Using Clipboard Hook
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(input2) => setInput2(input2)}
          value={input2}
          placeholder="Type here..."
        />
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => {
              setString(input2);
              alert('Copied to Clipboard!');
            }}>
            <Text style={styles.buttonTextStyle}>
              Copy to Clipboard
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={
              () => alert('Text from Clipboard: ' + data)
            }>
            <Text style={styles.buttonTextStyle}>
              Get from Clipboard
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleTextsmall: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 16,
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    width: '50%',
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  lineStyle: {
    color: 'black',
    borderWidth: 2,
    margin: 10,
  },
});