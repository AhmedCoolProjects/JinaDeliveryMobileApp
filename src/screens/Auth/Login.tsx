import { View, Text } from 'native-base';
import React from 'react';
import { LoginProps } from '../types';

export const Login = (props: LoginProps) => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }} >
            <Text>Login Screen</Text>
        </View>
    );
};

