import { View, Text } from 'native-base';
import React from 'react';
import { HomeProps } from './types';

export const Home = (props: HomeProps) => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }} >
            <Text >Home Screen</Text>
        </View>
    );
};