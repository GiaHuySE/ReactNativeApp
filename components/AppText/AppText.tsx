import { View, Text, TextProps, TextStyle, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../Context';

interface CustomTextProps extends TextProps {
    type: keyof typeof styles;
    style?: TextStyle
}
export const AppText: React.FC<CustomTextProps>= ({ type = 'text1', style: $overrideStyle, ...rest }) => {

    const theme = useTheme();
    const $themeStyle: TextStyle = {
        color: theme.colorScheme.onBackground
    }

    return (
        <Text style={[styles[type], $themeStyle, $overrideStyle]} {...rest} />
    )
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
    },
    h2: {
        fontSize: 24,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
    },
    h3: {
        fontSize: 18,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
    },
    h4: {
        fontSize: 14,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '500'
    },
    text1: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '400',
    },
    text2: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '400',
    },
    button: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '500',

    },
    input: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',

    },
    inputTitle: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',

    },
    subTitle1: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',

    },
    subTitle2: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',

    },
    menu: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',

    },
})

