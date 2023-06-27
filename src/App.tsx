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
  ]);


export const App = () =>{
 const [themeName, setThemeName] = useState ("lightMode");
      return(
<ThemeContext.Provider value = {{themeName,setThemeName}}>
    <RouterProvider router={router} />
    </ThemeContext.Provider>
      )
}