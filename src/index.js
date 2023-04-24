import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./pages/About"
/* this will be my command centre */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: "/about/",
        element: <p>this is the elemest</p>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(<RouterProvider router={router} />)
