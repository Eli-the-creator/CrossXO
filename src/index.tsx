import { View, StyleSheet } from 'react-native';

// Components
import { AppBootstrap } from './components';
import Navigator from './screens/navigator';

//
// Fonts (relocate to AppBootstrap after re....)

// Stack Navigation

function App() {
    return (
        <View style={styles.container}>
            <AppBootstrap>
                <Navigator />
            </AppBootstrap>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
