// How to Open Settings App from React Native App
// https://aboutreact.com/open-settings-app-in-react-native/

// import React in our code
import React, { useCallback } from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';

const App = () => {
  const _openAppSetting = useCallback(async () => {
    // Open the custom settings if the app has one
    await Linking.openSettings();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>
          How to open Settings App in React Native
        </Text>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={_openAppSetting}>
          <Text style={styles.buttonTextStyle}>
            Open the Settings App
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footerHeading}>
        React Native System Settings
      </Text>
      <Text style={styles.footerText}>
        www.aboutreact.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 35,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
  footerHeading: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});
export default App;