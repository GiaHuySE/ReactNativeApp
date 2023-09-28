import { View, Text, StatusBarProps, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '../Context';


export const AppStatusBar: React.FC<StatusBarProps> = ({...rest}) => {
    const theme = useTheme();
    return (
        <StatusBar backgroundColor={theme.colorScheme.background} barStyle={theme.isDarkMode? 'light-content' : 'dark-content'} {...rest} />
    )
}

