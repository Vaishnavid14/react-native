import React from "react";
import { SafeAreaView, StyleSheet, TextInput ,Button,Text} from "react-native";
//usMemo is to create cache value which does not need to be computed again and again and is going to stay same eveytime we render 
const UselessTextInput = () => {
  const [textx, onChangeX] = React.useState();
  const [texty, onChangeY] = React.useState(null);
  const [total,setTotal] = React.useState();

  const result = React.useMemo(() => sum(textx, texty), [textx, texty]);

  function sum(textx, texty){
    return parseInt(textx)+parseInt(texty)
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeX}
        value={textx}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeY}
        value={texty}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button
        style={styles.input}
        onPress={()=>setTotal(result)}
        title="calculate"
      />
      <Text>{total}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;
