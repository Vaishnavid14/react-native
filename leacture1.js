/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
//import type {Node} from 'react';
import {StyleSheet, Text, View,TouchableOpacity,ActivityIndicator,Button} from 'react-native';
import IconEnt from 'react-native-vector-icons/Entypo';
import IconFont from 'react-native-vector-icons/FontAwesome';

class App extends Component {
  state = {
    name: ["A","B","C","D","E"],
    isloading:false,
  }

  changeState=()=>{
    this.setState({isloading:!this.state.isloading})
  }

  /* onChange = () => {
    this.setState({ isloading: false })
  }*/

  render() {
    return (
      <View style={styles.sectionContainer}>
        <View style={styles.highlight}>
          {/* {
            this.state.name.map((item,index)=>{
              return(
              <Text key={index} style={{padding:30, backgroundColor:"red", marginTop:"5%",fontSize:25,}}>{item}</Text>)
            })
          } */}
          <View style={{ flexDirection: "row", height: "40%", width: "90%", marginTop: "15%", justifyContent: 'space-evenly'}}>
            <TouchableOpacity>
              <IconEnt name={"home"} size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconEnt name={"chat"} size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconEnt name={"map"} size={35} />
            </TouchableOpacity>
            <TouchableOpacity>
              <IconFont name={"search"} size={35} />
            </TouchableOpacity>
          </View>
        </View>
        {/* <Text>May be {this.state.name.map((item,index)=>{
            return(
              //for {item}, Text tag is parent which must have a unique id in this case it is indexs
                <Text key={index}>{item}</Text>
            );
        })}</Text> */}
        <View style={{ height: "100%", width: "100%", justifyContent:"center",alignItems:"center"}}>
          <ActivityIndicator size="large" color="#0000ff" animating={this.state.isloading}/>
          <View style={{flexDirection:"row",marginRight:10}}>
            {
              this.state.isloading ? <Button title="Stop" onPress={this.changeState}></Button> : <Button title="Start" onPress={this.changeState}></Button>
            }
            {/* <Button title="Start" onPress={this.changeState}></Button>
            <Button title="Stop" onPress={this.onChange}></Button> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    /* justifyContent: 'center',
    alignItems: 'center', */
    backgroundColor: 'white',
  },
  highlight: {
    backgroundColor: 'pink',
    height: '15%',
    width: '100%',
    justifyContent: 'center',
    flexDirection: "row",
  },
});

export default App;
