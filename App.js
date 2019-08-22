/**
 * @format
 * @flow
 */

import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  onLoadStart = (event) => {
		console.log(`onLoadStart`);
		console.log(event);
  };
  
  return (
    <WebView
      source={{ uri: 'https://www.spotify.com/it/account/overview/' }}
      onLoadStart={onLoadStart}
    />
  );
};

export default App;
