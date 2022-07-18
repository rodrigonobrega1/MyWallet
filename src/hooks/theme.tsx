import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThemeContext } from "styled-components";

import dark from '../Styles/Themes/light';
import light from "../Styles/Themes/light";

interface IThemeContext {
   
    toggleTheme(): void;
    theme: ITheme;
}

interface BaseLayoutProps {
    children?: ReactNode
}

interface ITheme {

    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

    const themeContext = createContext<IThemeContext>({} as IThemeContext);

    const ThemeProvider: React.FC<BaseLayoutProps> = ({ children }) => {
        const [theme, setTheme] = useState<ITheme>(dark);

        const toggleTheme = () => {
            if(theme.title === 'dark'){
                setTheme(light);
            }else{
                setTheme(dark);
            }
        };

        return (
            <ThemeContext.Provider value={{ toggleTheme, theme}}>
                {children}
            </ThemeContext.Provider>    
        )
    };

    function useTheme(): IThemeContext {
        const context = useContext(themeContext);
        return context;
    }

    export { ThemeProvider, useTheme };