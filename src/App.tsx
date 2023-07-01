import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { About } from "./routes/About";
import { Upload } from "./routes/Upload";
import React, { useState } from "react";
import { ThemeContext } from "./contexts/themeContext";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/upload",
      element: <Upload />,
    },
  ], {
    basename: '/myCats'
  });


export const App = () =>{
  const initialTheme = localStorage.getItem("themeName") || "lightMode";
 const [themeName, setThemeName] = useState (initialTheme);
 const isDarkMode = themeName === "darkMode";
const toggleTheme = ()=>{
  const newThemeName = themeName === "darkMode" ? " lightMode " : "darkMode";
  setThemeName(newThemeName);
  localStorage.setItem("themeName",newThemeName);  
}

return(
<ThemeContext.Provider value = {{themeName,toggleTheme,isDarkMode}}>
    <RouterProvider router={router} />
    </ThemeContext.Provider>
      )
}