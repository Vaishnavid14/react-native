//import React in our code
import React, { useState } from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Button, TextInput } from 'react-native';

const App = () => {
  const [inputValue,setInputValue] = useState('');

  const checkValueIsNumberOrNot = () =>{
    if(isNaN(inputValue)){
      alert('It is not Number');
    }
    else if(inputValue){
      alert('It is Number');
    }
    else{
      alert('It is Numbe');
    }
  };
  return(
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput placeholder="Enter text" onChangeText={(inputValue)=>setInputValue(inputValue)}/>
        <Button title="Check Value is Number" onPress={checkValueIsNumberOrNot} color="#606070" />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  textInputStyle: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
  },
});

export default App;
