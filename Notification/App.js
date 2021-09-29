import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import PushNotification, { Importance } from 'react-native-push-notification';

const App = () => {

  useEffect(() => {
    handleNotification();
  }, []);
  

  const handleNotification = () =>{
    PushNotification.createChannel(
      {
        channelId: "test-channel", // (required)
        channelName: "Test Channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }

  const Notification = () =>{
    PushNotification.cancelAllLocalNotifications();

    PushNotification.localNotification({
      channelId: "test-channel",
      title: "You clicked on ",
      message: "largest and most beatiful",
      bigText: " is one of the largest and most beatiful cities in ",
      color: "red",
      id: '123'
    });

    PushNotification.localNotificationSchedule({
      channelId: "test-channel",
      title: "Alarm",
      message: "You clicked on 20 seconds ago",
      date: new Date(Date.now() + 20 * 1000),
      allowWhileIdle: true,
    });
  }
  

  return (
    <View style={styles.body}>
      
      <TouchableOpacity
        onPress={() => { Notification() }}
      >
        <View style={styles.item}>
          <Text style={styles.title}>Notification</Text>
          <Text style={styles.subtitle}>Push</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    margin: 10,
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  subtitle: {
    fontSize: 20,
    margin: 10,
    color: '#999999',
  }
});