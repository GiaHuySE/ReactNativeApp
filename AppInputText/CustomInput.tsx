import { View, TextInput, Image, StyleSheet, SafeAreaView, TextInputProps, StyleProp, ViewStyle, TextProps, TextStyle } from 'react-native'
import React from 'react'
import useTheme from '../CustomHook/useTheme'
import CustomText from '../AppText/CustomText'

interface TextInputCustomProps extends TextInputProps {
    title: string,
    customTextInputStyle?: TextStyle
    borderColor: string
}

interface TextCustomProps extends TextProps {
    title: string,
    customTextStyle?: TextStyle
}

export const CustomInput: React.FC<TextInputCustomProps & TextCustomProps> = ({
    title,
    borderColor,
    customTextInputStyle,
    customTextStyle,
    ...otherProps }) => {
    return (
        <View style={styles.contain}>
            <CustomText type='inputTitle' children={title} style={customTextStyle} />
            <View style={{
                borderColor: borderColor,
                borderWidth: 1,
                borderRadius: 10,
                padding: 5,
                marginTop: 5,
                flexDirection: 'row',
            }}>
                <TextInput placeholder='PlaceHolder..' style={[{ flex: 1 }, customTextInputStyle]} {...otherProps}>
                </TextInput>
                <Image source={require('../assets/eyeIcon.png')} style={{ marginRight: 10, alignSelf: 'center' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginHorizontal: 20
    },

})

