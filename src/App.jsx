import "./App.css"
import DashboardRoutes from "./routes/Dashboard"
import LoginRoutes from "./routes/Login"
import getToken from "./hooks/getToken"
import React from "react"


function App() {
  const { token } = getToken()

  if (token) {
    return <DashboardRoutes />
  } else {
    return <LoginRoutes />
  }
}

export default App

