// Components
import { AppBootstrap } from './components';
import { useCallback } from 'react';
import Navigator from './screens/navigator';

//
// Fonts
import { useFonts } from 'expo-font';
import {
    Poppins_400Regular,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

// Splash Screen
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

function App() {
    // Load Fonts before app start
    const [fontsLoaded] = useFonts({
        Poppins400: Poppins_400Regular,
        Poppins700: Poppins_700Bold,
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
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <Navigator />
        </View>
    );
}

export default App;
