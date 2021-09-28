import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';

export default function App() {

  

  return (
    <View style={styles.body}>
      
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  }
});