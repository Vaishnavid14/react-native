//Example to Hide Show Component in React Native
//https://aboutreact.com/example-to-hide-show-component-in-react-native/

//React Native Strikethrough Text
//https://aboutreact.com/react-native-strike-through-text/

//import React in our code
import React,{ useState } from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
const App = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
       <Text styel={styles.textStyle}>
          Example of {''}
          <Text style={styles.strikeThroughtextStyle}>Strike Through</Text>
       </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
  },
  strikeThroughtextStyle :{
    textDecorationLine : 'line-through',
  },
});

export default App;
