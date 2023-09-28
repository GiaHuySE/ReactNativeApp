import { View, Text, Image, TouchableOpacity, StyleSheet, ImageProps, TextStyle, StyleProp, ViewStyle, ImageStyle, TextProps } from 'react-native'
import React from 'react'
import { AppText } from '../AppText'
import { useTheme } from '../Context'

interface HomeHeaderCustomProps extends TextProps {
    title: string,
    avatar: ImageProps['source'],
}


export const AppHomeHeader:React.FC<HomeHeaderCustomProps> = ({ title, avatar }) => {
    const theme = useTheme();
    
    return (
        <View style={[styles.header,{backgroundColor:theme.colorScheme.background}]}>
            <Image source={avatar} style={styles.avatar} />
            <AppText type='h3' children={title} />
            <TouchableOpacity>
                <Image source={require('App/assets/bellIcon.png')} style={[{ tintColor: theme.colorScheme.onBackground }]} />
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


