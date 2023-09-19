import { View, Text, StyleSheet, TouchableOpacity, Image, TextProps, TextStyle, StyleProp, ViewStyle, ImageStyle, ImageProps } from 'react-native'
import React from 'react'

interface HomeHeaderCustomProps extends TextProps {
    title: string,
    avatar: ImageProps['source'],
    textStyle?: TextStyle,
    headerStyle?: StyleProp<ViewStyle>,
    iconStyle?: ImageStyle
}

const CustomHomeHeader: React.FC<HomeHeaderCustomProps> = ({ title, avatar, textStyle, headerStyle, iconStyle }) => {
    return (
        <View style={[styles.header, headerStyle]}>
            <Image
                source={avatar}
                style={styles.avatar}
            />
            <Text style={[styles.headerText, textStyle]}>{title}</Text>
            <TouchableOpacity >
                <Image source={require('../assets/bellIcon.png')} style={[{ tintColor: 'black' }, iconStyle]} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        elevation: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 0.9,
        textAlign: 'center',
        color: 'black',
    },

});

export default CustomHomeHeader