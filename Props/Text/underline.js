//React Native Underline Text
//https://aboutreact.com/react-native-underline-text/

//import React in our code
import React from 'react';

//import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          Example of{' '}
          <Text style={styles.underlineTextStyle}>Underline Text</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  underlineTextStyle: {
    textDecorationLine: 'underline',
    //line-through is the trick
  },
});

export default App;
