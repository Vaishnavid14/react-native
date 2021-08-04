// React Native State – Learn How to Manage State
// https://aboutreact.com/react-native-state/

// import React in our code
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, useWindowDimensions, AppState } from 'react-native';
import FunctionContextComponent from './FunctionContextComponent'
//from here just a varaiable with value of true/false is being passed from provider

export const ThemeContext = React.createContext()

const App = () => { 
  const [darkTheme,setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevDarkTheme=>!prevDarkTheme)
  }

  return (
    <SafeAreaView>
      <View>
        <ThemeContext.Provider value={darkTheme}>
          <Button onPress={toggleTheme} title="Toggle Theme"></Button>
          <FunctionContextComponent/>
 
        </ThemeContext.Provider>
      </View>
      <Text>useContext</Text>
    </SafeAreaView>
  );
};

export default App;
