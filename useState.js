// React Native State – Learn How to Manage State
// https://aboutreact.com/react-native-state/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View,Button } from 'react-native';

const App = () => {//render statements only once
  const [state,setCount] = useState({count:4,theme:'blue'})
  const count = state.count
  const theme = state.theme

  function decrementCount(){
    setCount(preCount=>{ return {...preCount,count:preCount.count - 1}})
  }

  function incrementCount() {
    //         the default value
    //setCount(count + 1)
    //       previous version => new version
    //setCount(preCount => preCount + 1)
    //...preCount take the other old parameters of useState with new version of the parameter 
    setCount(preCount => { return {...preCount, count: preCount.count + 1}})
  }

  return (
    <SafeAreaView>
      <View>
        <Button onPress={decrementCount} title="-"></Button>
        <Text>{state.count}</Text>
        <Text>{state.theme}</Text>
        <Button onPress={incrementCount} title="+"></Button>
      </View>
    </SafeAreaView>
  );
};

export default App;
