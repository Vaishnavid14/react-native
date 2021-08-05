//React Native WebView
//https://aboutreact.com/react-native-webview/

//import React in our code
import React from 'react';

//import all the components we are going to use
import { SafeAreaView } from 'react-native';

import { WebView } from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://aboutreact.com' }}
        style={{ flex: 1, marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default App;
