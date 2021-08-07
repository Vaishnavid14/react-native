//import React in our code
import React, { useState } from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Button, Text } from 'react-native';

const App = () => {
  const [defaultStyle,setDefaultStyle] = useState(true);

  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text
          //Here we are setting the style on the basis of state
          style={defaultStyle ? styles.style1 : styles.style2}>
          About React
        </Text>
        <Button
          title="Change Default Style"
          onPress={() => setDefaultStyle(!defaultStyle)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 25,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  style1: {
    fontSize: 20,
  },
  style2: {
    fontSize: 60,
    color: 'red',
  },
});
export default App;
