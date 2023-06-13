import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Text } from 'react-native';

import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';

import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';

const App: React.FunctionComponent = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        // i removed expo-app-loading
        // we can use expo-splash-screen
        return <Text>Carrengando...</Text>;
    }

    return (
        <NavigationContainer>
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </NavigationContainer>
    );
};

export default App;
