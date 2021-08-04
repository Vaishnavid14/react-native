// React Native State – Learn How to Manage State
// https://aboutreact.com/react-native-state/

// import React in our code
import React, { useState,useCallback } from 'react';
import { SafeAreaView, Text, View, Button, TextInput } from 'react-native';
import FunctionContextComponent from './FunctionContextComponent'
import List from './List'

export const ThemeContext = React.createContext()
//difference between callback and memo is memo returns the return of function and callback returns entire function
const App = () => { 
  const [number,setNumber] = useState(1)
  const [dark,setDark] = useState(false)

  const getItems = useCallback(()=>{
    return [number,number+1,number+2]
  },[number])

  const theme={
    backgroundColor:dark?'#333':'#FFF',
    color:dark?'#FFF':'#333'
  }

  function setnum(pre){
    setNumber(parseInt(pre))
  }

  return (
    <SafeAreaView>
      <View style={theme}>
        <TextInput
          onChangeText={setnum}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
        <Button
          onPress={() => setDark(result=>!result)}
          title="toggle"
        />
      </View>
      <List getItems={getItems}/>
      <Text style={{fontSize:20,color:'#000'}}>useContext</Text>
    </SafeAreaView>
  );
};

export default App;
