import React from "react"
import Header from "../modules/Header"
import Navbar from "../modules/Navbar"


const DashboardLayout = ({children}) => {
    return (
        <>
            <Header/>
            <div className="flex justify-baseline">
                <Navbar/>
                <div className="w-[78%] h-[100vh] overflow-y-auto">
                    {children}
                </div>
            </div>
        </>
    )
}

export default DashboardLayout