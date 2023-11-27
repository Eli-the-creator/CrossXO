import {
    View,
    Pressable,
    Text,
    ScrollView,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { StackNavigationParams } from '../navigator';
import { ReactElement } from 'react';

// Components
import BtnHome from '../../components/btnHome/BtnHome';

//
type HomeProps = {
    navigation: StackNavigationProp<StackNavigationParams, 'Home'>;
};

function Home({ navigation }: HomeProps): ReactElement {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Change this View to real logo */}
                <View style={styles.logo}>
                    <Text style={styles.cross}>Cross</Text>
                    <Text style={styles.xo}>XO</Text>
                </View>
                <View style={styles.btnContainer}>
                    <BtnHome
                        title="SinglePlayer"
                        onPress={() => navigation.navigate('SinglePlayer')}
                    />
                    <BtnHome title="Multiplayer" />
                    <BtnHome title="Settings" />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        marginTop: 48,
        flexDirection: 'row',
    },
    cross: { fontSize: 62, fontFamily: 'Poppins400' },
    xo: { fontSize: 62, fontFamily: 'Poppins700', fontWeight: '700' },
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default Home;
