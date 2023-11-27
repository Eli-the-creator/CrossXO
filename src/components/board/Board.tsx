import React, { ReactElement } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { BoardElementType, BoardProps } from 'src/utils/board';

function BoardElement({ item, index, onCell }: BoardElementType) {
    return (
        <Pressable onPress={onCell} style={styles.cell}>
            <Text style={{ fontSize: 48, color: 'black' }}>{item}</Text>
        </Pressable>
    );
}

function Board({ state, onCell }: BoardProps): ReactElement {
    return (
        <View style={styles.board}>
            <FlatList
                data={state}
                renderItem={({ item, index }) => (
                    <BoardElement
                        onCell={() => onCell(index)}
                        item={item}
                        index={index}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    board: {
        height: 300,
        width: 300,
    },
    cell: {
        flex: 1,
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Board;
