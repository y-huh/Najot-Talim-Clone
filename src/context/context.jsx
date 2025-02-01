import { useState } from "react";
import { createContext } from "react";
import React from "react";
export const Context = createContext()

export const GlobalContext = ({children}) => {
    const [token , setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)

    localStorage.setItem("token" ,JSON.stringify(token))
    return(
        <Context.Provider value={{token,setToken}}>{children}</Context.Provider>
    )
}