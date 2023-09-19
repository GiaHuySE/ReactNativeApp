import { useState, useMemo, useEffect } from "react";

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


interface Theme {
    isDarkMode: boolean,
    colorScheme: ColorScheme,
    toggle: () => void;
    // onDarkModeChange: (isDarkMode: boolean) => boolean
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

const useTheme = (initialDarkMode: boolean): Theme => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(initialDarkMode);
    // const [colorScheme, setColorScheme] = useState<ColorScheme>(isDarkMode ? darkColorScheme : lightColorScheme);


    const colorScheme = useMemo(() => {
        return isDarkMode ? darkColorScheme : lightColorScheme;
    }, [isDarkMode])

    const toggle = () => {
        setIsDarkMode(!isDarkMode);
        onDarkModeChange(isDarkMode);
    }

    const onDarkModeChange = (isDarkMode: boolean): void => {
        if (isDarkMode) {
            console.log('Dark mode');
        } else {
            console.log('Light mode');
        }
    }
    return {
        isDarkMode,
        colorScheme,
        toggle,
        onDarkModeChange,
    };
}

export default useTheme