import React from "react";
export interface ThemeInterface{
    themeName:string;
    toggleTheme?:()=>void;
    isDarkMode:boolean;
}
export const ThemeContext = React.createContext<ThemeInterface>({
    themeName: "lightMode",
    isDarkMode:false
})
