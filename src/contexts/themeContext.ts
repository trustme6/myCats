import React from "react";
export interface ThemeInterface{
    themeName:string,
    setThemeName?:(themeName:string)=>void
}
export const ThemeContext = React.createContext<ThemeInterface>({
    themeName: "lightMode",
})