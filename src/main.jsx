import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home.jsx"
import "./assets/css/main.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HeadPhones } from "./pages/Headphones/Headphones.jsx"
import { Speakers } from "./pages/Speakers/Speakers.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/headphones",
        element: <HeadPhones />,
    },
    {
        path: "/speakers",
        element: <Speakers />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
