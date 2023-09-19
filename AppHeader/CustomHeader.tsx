import { View, Text, TextProps, TextStyle, StyleSheet, Image, TouchableOpacity, StyleProp, ViewStyle, ImageStyle } from 'react-native'
import CustomText from '../AppText/CustomText'
import React from 'react'

interface HeaderCustomProps extends TextProps {
    title: string,
    textStyle?: TextStyle,
    headerStyle: StyleProp<ViewStyle>,
    iconStyle?: ImageStyle
}

const CustomHeader: React.FC<HeaderCustomProps> = ({ title, textStyle, headerStyle, iconStyle }) => {
    return (
        <View style={[styles.container, headerStyle]}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={require('../assets/arrowBackIcon.png')} style={[{ tintColor: 'black' }, iconStyle]} />
                </TouchableOpacity>
                <Text style={[styles.headerText, textStyle]}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
    },
    header: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
})

export default CustomHeader