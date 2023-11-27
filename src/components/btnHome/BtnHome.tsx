import React from 'react';
import {
    View,
    Text,
    Pressable,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';

interface BtnHomeProps {
    title: string;
    size?: 'sm' | 'xl' | 'xxl'; // Optional prop for button size
    onPress: () => void;
}

const BtnHome: React.FC<BtnHomeProps> = ({ title, size = 'xl', onPress }) => {
    // Define styles based on the specified size
    const buttonSizeStyles: StyleProp<ViewStyle> = {
        paddingHorizontal: size === 'sm' ? 24 : size === 'xl' ? 74 : 120,
        paddingVertical: size === 'sm' ? 8 : size === 'xl' ? 14 : 20,
        borderRadius: size === 'sm' ? 5 : size === 'xl' ? 9 : 12,
    };

    const textStyles: StyleProp<TextStyle> = {
        fontSize: size === 'sm' ? 16 : size === 'xl' ? 32 : 48,
    };

    return (
        <View style={[styles.container, buttonSizeStyles]}>
            <Pressable onPress={onPress}>
                <Text style={[styles.text, textStyles]}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        marginTop: 12,
        marginBottom: 12,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Poppins400',
    },
});

export default BtnHome;
