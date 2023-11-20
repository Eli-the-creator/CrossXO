import React, { ReactElement, ReactNode, useCallback } from 'react';
import { View } from 'react-native';

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
        Poppins_400Regular,
        Poppins_700Bold,
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
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            onLayout={onLayoutRootView}
        >
            {children}
        </View>
    );
}

export default AppBootstrap;
