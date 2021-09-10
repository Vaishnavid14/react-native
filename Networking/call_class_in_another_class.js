/*This is an Example of Calling Other Class Function in React Native*/
import React, { Component } from 'react';
//import React in our project
import { StyleSheet, View, Alert, Platform, Button } from 'react-native';
//import all the components we will need in our project

export default class App extends Component {
  handlerSimpleCall = () =>{
    new OtherClass().functionWithoutArg();
  };

  handlerArgCall = () =>{
    new OtherClass().functionWithArg('About React');
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#F5FCFF',
        }}>
        <View style={{ margin: 10 }}>
          <Button
            title="Function Without Argument"
            onPress={this.handlerSimpleCall}
            color="#606070"
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title=" Function With Argument"
            onPress={this.handlerArgCall}
            color="#606070"
          />
        </View>
      </View>
    );
  }
}

class OtherClass extends Component {
  functionWithoutArg = () =>{
    alert('Function Called Without Argument ');
  }

  functionWithArg = Value =>{
    alert(Value);
  }
}
