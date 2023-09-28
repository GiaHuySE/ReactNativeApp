import React, { useContext ,createContext } from "react";
import { AppTheme, useSetupTheme } from "../../hooks";


const context = createContext<AppTheme>({} as AppTheme)

export const useTheme = () => useContext<AppTheme>(context)

export const ThemeProvider = context.Provider

