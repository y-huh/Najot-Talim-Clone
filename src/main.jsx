import { createRoot } from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { GlobalContext } from "./context/context.jsx"
import React from "react"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContext>
      <App />
    </GlobalContext>
  </BrowserRouter>,
)

