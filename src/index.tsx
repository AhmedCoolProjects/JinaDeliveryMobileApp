import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import {
  LogBox,
  StatusBar,
  useColorScheme,
} from 'react-native';
import { RootNavigation } from './navigation';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};



export default App;
