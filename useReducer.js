// React Native State – Learn How to Manage State
// https://aboutreact.com/react-native-state/

// import React in our code
import React, { useState,useReducer } from 'react';
import { SafeAreaView, Text, View, Button, useWindowDimensions, AppState } from 'react-native';
import FunctionContextComponent from './FunctionContextComponent'
//from here just a varaiable with value of true/false is being passed from provider

export const ThemeContext = React.createContext()

const reducer=(state,action)=>{
  switch(action.type){
    case 'INC_COUNTER':
      return{count:state.count+1}
    case 'DEC_COUNTER':
      return {count: state.count-1}
    default:
      return state;
  }
}

const App = () => { 
  const [state,dispatch] = useReducer(reducer,{count:0})

  function increment(){
    dispatch({ type: 'INC_COUNTER' })
  }
  function decrement() {
    dispatch({ type: 'DEC_COUNTER' })
  }

  return (
    <SafeAreaView>
      <Button title="Increment" onPress={increment}></Button>
      <Button title="Decrement" onPress={decrement}></Button>
      <Text>current count:{state.count}</Text>
      <Text style={{fontSize:20,color:'#000'}}>useContext</Text>
    </SafeAreaView>
  );
};

export default App;
