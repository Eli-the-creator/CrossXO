import React, { ReactElement, ReactNode, useCallback } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

// Fonts
import { useFonts } from 'expo-font';
import {
    Poppins_400Regular,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

// Splash Screen
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

//
// !!! change null to loader
//
interface AppBootstrapProps {
    children: ReactNode;
}

function AppBootstrap({ children }: AppBootstrapProps): ReactElement | null {
    const [fontsLoaded] = useFonts({
        Poppins400: require('../../../assets/fonts/Poppins/Poppins-Regular.ttf'),
        Poppins700: require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        // Replace with your loader component
        return null;
    }

    return (
        <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
            {children}
        </View>
    );
}

export default AppBootstrap;
