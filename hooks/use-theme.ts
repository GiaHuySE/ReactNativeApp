import { useState, useMemo } from "react";

interface ColorScheme {
    primary: string;
    secondary: string;
    background: string;
    onBackground: string;
    error: string;
    success: string;
    warning: string;
    disabled: string;
}

export interface AppTheme {
    isDarkMode: boolean,
    colorScheme: ColorScheme,
    toggle: () => void;
    onDarkModeChange: (isDarkMode: boolean) => void
}

const lightColorScheme: ColorScheme = {
    primary: "#0b5ed7",
    secondary: "#5c636a",
    background: "#FFFFFF",
    onBackground: "#000000",
    error: "#B00020",
    success: "#157347",
    warning: "#ffca2c",
    disabled: "#5c636a",
}

const darkColorScheme: ColorScheme = {
    primary: "#0b5ed7",
    secondary: "#5c636a",
    background: "#000000",
    onBackground: "#FFFFFF",
    error: "#B00020",
    success: "#157347",
    warning: "#ffca2c",
    disabled: "#5c636a",
}

export const useSetupTheme = (initialDarkMode: boolean): AppTheme => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);
    const onDarkModeChange = (isDarkMode: boolean): void => {
        if (isDarkMode) {
            console.log('Dark mode');
        } else {
            console.log('Light mode');
        }
    }

    const toggle = () => {
        setIsDarkMode(!isDarkMode);
        onDarkModeChange(isDarkMode);
    }

    const colorScheme = useMemo(() => {
        return isDarkMode ? darkColorScheme : lightColorScheme;
    }, [isDarkMode])

    return {
        isDarkMode,
        colorScheme,
        toggle,
        onDarkModeChange,
    }
}
