//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
//View can be Pressed but instead of onPress it has onStartShouldSetresponder
const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Main Content Here</Text>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Bottom View</Text>
        </View>
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
 bottomView:{
   width:'100%',
   height:50,
   backgroundColor:'#EE5407',
   justifyContent:'center',
   alignItems:'center',
   position:'absolute',//Here is the trick
   bottom:0,//Here is the trick
 },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
export default App;
