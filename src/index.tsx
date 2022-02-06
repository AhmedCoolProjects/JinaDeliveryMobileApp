import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React from 'react';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { RootNavigation } from './navigation';
import { appStore } from './store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar barStyle="default" />
          <RootNavigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
