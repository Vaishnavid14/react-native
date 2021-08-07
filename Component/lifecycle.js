/*Example of Reac Native Life Cycle*/
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CustomComponent extends Component {
  constructor() {
    super();
    console.log('Constructor Called.');
  }

  componentWillMount() {
    console.log('componentWillMount called.');
  }

  componentDidMount() {
    console.log('componentDidMount called.');
  }

  componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    return true;
  }

  componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
  }

  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Language is: {this.props.name}</Text>
      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomComponent name="C" />
      </View>
    );
  }
}
