import React, { createContext, useState, useContext, ReactNode } from "react";
import { ThemeContext } from "styled-components";

import dark from '../Styles/Themes/light';
import light from "../Styles/Themes/light";



interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
    children?: ReactNode;
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


interface BaseLayoutProps {
    children?: ReactNode;
}

    const themeContext = createContext<IThemeContext>({} as IThemeContext);

    const ThemeProvider: React.FC<BaseLayoutProps> = ({ children }) => {
        const [theme, setTheme] = useState<ITheme>(() => {
            const themeSaved = localStorage.getItem('@MyWallet:theme');

            if(themeSaved) {
                return JSON.parse(themeSaved);
            }else{
                return dark;
            }
        });

        const toggleTheme = () => {
            if(theme.title === 'dark'){
                setTheme(light);
                localStorage.setItem('@MyWallet:theme', JSON.stringify(light));
            }else{
                setTheme(dark);
                localStorage.setItem('@MyWallet:theme', JSON.stringify(dark));
            }
        };

        return (
            <ThemeContext.Provider value= {{ ...toggleTheme, ...theme }}>
                {children}
            </ThemeContext.Provider>    
        )
    };

    function useTheme(): IThemeContext {
        const context = useContext(themeContext);
        return context;
    }

    export { ThemeProvider, useTheme };