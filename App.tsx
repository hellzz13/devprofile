import React from 'react';

import { ThemeProvider } from 'styled-components';
import { Home } from './src/screens/Home';
import {
    useFonts,
    Roboto_400Regular,
    Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';
import AppLoading from 'expo-app-loading';
import { SignIn } from './src/screens/SignIn';

const App: React.FunctionComponent = () => {
    const [fontsLoaded] = useFonts({
        Roboto_400Regular,
        Roboto_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            {/* <Home /> */}
            <SignIn />
        </ThemeProvider>
    );
};

export default App;
