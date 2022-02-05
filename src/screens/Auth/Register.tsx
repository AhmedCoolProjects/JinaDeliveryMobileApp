import { View, Text } from 'native-base';
import React from 'react';
import { RegisterProps } from '../types';

export const Register = (props: RegisterProps) => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }} >
            <Text>Register Screen</Text>
        </View>
    );
};
