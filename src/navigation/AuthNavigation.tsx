import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ForgetPassword, Login, Register } from '../screens';


const Stack = createStackNavigator();

export const AuthNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    );
};



