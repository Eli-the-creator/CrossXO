import { ReactNode, ReactElement } from 'react';
import {
    View,
    Text as NativeText,
    TextProps as NativeTextProps,
} from 'react-native';

type TextProps = {
    wieght: '400' | '700';
    children: ReactNode;
    customStyle?: object;
} & NativeTextProps;

const defaultProps = {
    wieght: '700',
};

function Text({
    children,
    customStyle,
    wieght,
    ...props
}: TextProps): ReactElement {
    let fontFamily;
    if (wieght === '400') {
        fontFamily = 'Poppins_400Regular';
    }
    if (wieght === '700') {
        fontFamily = 'Poppins_700Bold';
    }

    return (
        <NativeText {...props} style={[customStyle, { fontFamily }]}>
            {children}
        </NativeText>
    );
}

Text.defaultProps = defaultProps;

export default Text;
