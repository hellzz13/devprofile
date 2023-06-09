import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

export const AuthRoutes: React.FunctionComponent = () => {
    const Auth = createNativeStackNavigator();

    return (
        <Auth.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
        >
            <Auth.Screen name="SignIn" component={SignIn} />
            <Auth.Screen name="SignUp" component={SignUp} />
        </Auth.Navigator>
    );
};
