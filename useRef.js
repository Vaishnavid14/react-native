import React, { useRef, useState } from "react";
import { TextInput, Text, View, StyleSheet,Button } from "react-native";
//storesn the value and be persistent throughout the program and does not change even after program rerenders or stops the rerendering for the component
const App = () => {
  const textRef = useRef(null);
  const [measure, setMeasure] = useState('');

  function focus(){
    textRef.current.focus()
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.textContainer}
      >
        <TextInput style={{ borderColor: '#f0f', borderWidth:1}} ref={textRef} value={measure} onChangeText={text=>setMeasure(text)}>
        </TextInput>
        <Text>My name is {measure}</Text>
        <Button onPress={focus} title="Focus"></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  textContainer: {
    borderColor:'#f0f',
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  measure: {
    textAlign: "center",
    padding: 12,
  },
});

export default App;
