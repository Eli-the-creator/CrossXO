// Type
import { ReactElement } from 'react';
// Screens
import SinglePlayer from './singlePlayer/SinglePlayer';
import Home from './home/home';

// React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export type StackNavigationParams = {
    Home: undefined;
    SinglePlayer: undefined;
};
const Stack = createStackNavigator<StackNavigationParams>();

function Navigator(): ReactElement {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerMode: 'none',
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="SinglePlayer" component={SinglePlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Navigator;
