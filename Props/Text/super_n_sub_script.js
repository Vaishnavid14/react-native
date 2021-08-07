//Example to Hide Show Component in React Native
//https://aboutreact.com/example-to-hide-show-component-in-react-native/

//React Native Strikethrough Text
//https://aboutreact.com/react-native-strike-through-text/



//normal script has height 30
//subscript up and subscript down supersccript line spacing is 18 and subscript line spacing is 37
//import React in our code
import React,{ useState } from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
const App = () => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/*View to wrap multiple text*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start'
          }}>
          {/*View to wrap multiple text*/}
          <Text style={{ fontSize: 20, lineHeight: 30 }}>
            Time is 10
          </Text>
          {/*Superscript*/}
          <Text style={{ fontSize: 15, lineHeight: 18 }}>
            am
          </Text>
          <Text style={{ fontSize: 20, lineHeight: 30 }}>
            {' '}
            and I am late or the class
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            marginTop: 30,
          }}>
          {/*View to wrap multiple text*/}
          <Text style={{ fontSize: 20, lineHeight: 30 }}>
            Time is 10
          </Text>
          {/*Subscript*/}
          <Text style={{ fontSize: 15, lineHeight: 37 }}>
            am
          </Text>
          <Text style={{ fontSize: 20, lineHeight: 30 }}>
            {' '}
            and I am late or the class
          </Text>
        </View>
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
});

export default App;
