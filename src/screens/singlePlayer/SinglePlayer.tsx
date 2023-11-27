// Type
import { ReactElement } from 'react';

import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';

// Components
import BtnHome from '../../components/btnHome/BtnHome';
import Board from '../../components/board/Board';

import { StackNavigationParams } from '../navigator';
import { StackNavigationProp } from '@react-navigation/stack';

import {
    Cell,
    BoardElementType,
    BoardProps,
    InitialState,
    isEmpty,
    isFull,
    getAvalibleMove,
} from '../../utils/board';

type GameProps = {
    navigation: StackNavigationProp<StackNavigationParams>;
};

function SinglePlayer({ navigation }: GameProps): ReactElement {
    const board: InitialState = [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    console.log(isEmpty(board));
    console.log(isFull(board));
    console.log(getAvalibleMove(board));
    return (
        <SafeAreaView style={styles.container}>
            <Board
                onCell={(index) => Alert.alert(`Cell index: ${index}`)}
                state={['x', 'x', null, 'x', 'o', null, 'x', 'o', null]}
            />
            <BtnHome
                title="Back"
                size="sm"
                onPress={() => navigation.navigate('Home')}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SinglePlayer;
