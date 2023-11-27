import { LinearGradient } from 'expo-linear-gradient';
import { ReactElement } from 'react';
import { StyleSheet } from 'react-native';

function GradientBackground(): ReactElement {
    return (
        <LinearGradient
            style={styles.gradient}
            colors={['#120318', '#221a36']}
        />
    );
}

const styles = StyleSheet.create({
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
});
export default GradientBackground;
