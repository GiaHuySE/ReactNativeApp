import { View, StatusBar, StatusBarProps, StatusBarStyle } from 'react-native'
import React from 'react'

interface CustomStatusBarProps extends StatusBarProps {
    statusColor?: string;
    statusStyle?: 'default' | 'light-content' | 'dark-content';
}

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({ statusColor, statusStyle }) => {
    return (
        <StatusBar backgroundColor={statusColor} barStyle={statusStyle} />
    )
}

export default CustomStatusBar