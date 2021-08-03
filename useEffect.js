// React Native State – Learn How to Manage State
// https://aboutreact.com/react-native-state/

// import React in our code
import React, { useState , useEffect} from 'react';

// import all the components we are going to use
import { SafeAreaView, Text, View, Button, useWindowDimensions, AppState } from 'react-native';
//side effect of whatever happens in the code is useEffect
const App = () => {//render statements only once
  const [resourceType,setResourceType] = useState('posts')
  const [items,setItem] = useState([])
  console.warn("will render everytime")

--------------------------------------------------------
  //only render when whatever value in the array changes
  //empty array means change only when mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/${resourceType}')
      .then(response => response.json())
      .then(json => setItem(json))
    //console.warn("change only if the value is changed")
  },[resourceType])

---------------------------------------------------------
  const txtHandler = () => {
    setResourceType("Posts");
  };
  const txtHandlr = () => {
    setResourceType("Users");
  };
  const txtHandle = () => {
    setResourceType("Comments");
  };


  return (
    <SafeAreaView>
      <View>
        <Button onPress={txtHandler} title="Post"></Button>
        <Button onPress={txtHandlr} title="Users"></Button>
        <Button onPress={txtHandle} title="Comments"></Button> */}
        
      </View>
      <Text>{resourceType}</Text>
    </SafeAreaView>
  );
};

export default App;
{/* map - Calls a defined callback function on each element of an array, and returns an array that contains the results. */ }
{/* list = () => {
        return (items.map((item) => {
      return (

      <Text>{item}</Text>

      );
    }));
  }; */}
