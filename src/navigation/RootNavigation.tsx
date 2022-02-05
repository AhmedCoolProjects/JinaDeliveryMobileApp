import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { AuthNavigation, ContainerNavigation } from ".";

const IS_NOT_LOGIN = true;


const Stack = createStackNavigator();

export const RootNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            {IS_NOT_LOGIN ? (
                <Stack.Screen name="Auth" component={AuthNavigation} />
            ) : (
                <Stack.Screen name="Container" component={ContainerNavigation} />
            )}
        </Stack.Navigator>
    );
};
