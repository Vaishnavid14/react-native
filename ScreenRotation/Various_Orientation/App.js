// Get Device Orientation and Set Preferred Orientation in React Native
// https://aboutreact.com/device-orientation/

// import React in our code
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// import Orientation
import Orientation from 'react-native-orientation';

const App = () => {
  const [currentOrientation, setCurrentOrientation] = useState('');

  useEffect(() => {
    // Getting initial Orientation
    const initial = Orientation.getInitialOrientation();
    setCurrentOrientation('Current Device Orientation: ' + initial);

    // Listner for orientation change LANDSCAPE / PORTRAIT
    Orientation.addOrientationListener(orientationChange);

    return () => {
      // Remember to remove listener
      Orientation.removeOrientationListener(orientationChange);
    };
  }, []);

  const orientationChange = (orientation) => {
    setCurrentOrientation(
      'Current Device Orientation: ' + orientation
    );
  };

  const getCurrentOrientation = () => {
    Orientation.getOrientation((err, orientation) => {
      alert('Orientation: ' + orientation);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleText}>
          Get and Set Device Orientation in React Native
        </Text>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.textLarge}>
              Example of React Native Orientation
            </Text>
            <Text style={styles.textSmall}>
              {currentOrientation}
            </Text>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={getCurrentOrientation}>
              <Text style={styles.buttonTextStyle}>
                get Current Orientation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToPortrait()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Portrait Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToLandscape()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Landscape Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToLandscapeLeft()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Right Landscape Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.lockToLandscapeRight()}>
              <Text style={styles.buttonTextStyle}>
                Locks the View to Left Landscape Mode
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => Orientation.unlockAllOrientations()}>
              <Text style={styles.buttonTextStyle}>
                Unlocks any Previous Locked Orientations
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
    marginRight: 2,
    marginLeft: 2,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});