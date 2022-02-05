import { Text, View } from 'native-base';
import React from 'react';
import { ForgetPasswordProps } from '../types';

export const ForgetPassword = (props: ForgetPasswordProps) => {
    return (
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }} >
            <Text>Forget Password Screen</Text>
        </View>
    );
};
