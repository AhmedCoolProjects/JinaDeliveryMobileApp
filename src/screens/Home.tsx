import { View, Text, Switch, useColorMode } from 'native-base';
import React from 'react';
import { HomeProps } from './types';

export const Home = (props: HomeProps) => {
  const { navigation } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View
      _dark={{
        bg: '#000',
      }}
      flex={1}
      alignItems="center"
      justifyContent="center">
      <Text>Home Screen</Text>
      <Text>Color Mode: {colorMode}</Text>
      <Switch
        isChecked={colorMode === 'dark'}
        onValueChange={toggleColorMode}
      />
    </View>
  );
};
