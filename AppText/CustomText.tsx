import { View, Text, StyleSheet, ScrollView, StyleProp, ViewStyle, TextStyle, TextProps } from 'react-native'
import React from 'react'
import useTheme from '../CustomHook/useTheme';
interface CustomTextProps extends TextProps {
    children: React.ReactNode;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'text1' | 'text2' | 'button' | 'input' | 'inputTitle' | 'subTitle1' | 'subTitle2' | 'menu';
    style?: TextStyle
}

const CustomText: React.FC<CustomTextProps> = ({ children, type, style, ...rest }) => {
    const { isDarkMode, colorScheme } = useTheme(false);
    const getHeadingStyle = () => {
        switch (type) {
            case 'h1':
                return styles.h1;
            case 'h2':
                return styles.h2;
            case 'h3':
                return styles.h3;
            case 'h4':
                return styles.h4;
            case 'text1':
                return styles.text1;
            case 'text2':
                return styles.text2;
            case 'button':
                return styles.button;
            case 'input':
                return styles.input;
            case 'inputTitle':
                return styles.inputTitle;
            case 'subTitle1':
                return styles.subTitle1;
            case 'subTitle2':
                return styles.subTitle2;
            case 'menu':
                return styles.menu;
            default:
                return {};
        }
    };
    return (
        <Text style={[getHeadingStyle(), style]} {...rest}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    h1: {
        fontSize: 32,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        color: '#151414'
    },
    h2: {
        fontSize: 24,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '600',
        color: '#151414'
    },
    h3: {
        fontSize: 18,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        color: '#151414'
    },
    h4: {
        fontSize: 14,
        lineHeight: 40,
        fontFamily: 'Montserrat-Bold',
        color: '#151414',
        fontWeight: '500'
    },
    text1: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '400',
        color: '#151414'
    },
    text2: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '400',
        color: '#151414'
    },
    button: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Montserrat-Bold',
        fontWeight: '500',
        color: '#151414'
    },
    input: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',
        color: '#151414'
    },
    inputTitle: {
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',
        color: '#151414'
    },
    subTitle1: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',
        color: '#151414'
    },
    subTitle2: {
        fontSize: 12,
        lineHeight: 18,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',
        color: '#151414'
    },
    menu: {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: 'Montserrat-Medium',
        fontWeight: '400',
        color: '#151414'
    },
})
export default CustomText