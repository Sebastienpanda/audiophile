import ReactDOM from "react-dom/client"
import Home from "./pages/Home.jsx"
import "./assets/css/main.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HeadPhones } from "./pages/Headphones/Headphones.jsx"
import { Speakers } from "./pages/Speakers/Speakers.jsx"
import { Earphones } from "./pages/Earphones/Earphone.jsx"
import { OneHeadphone } from "./pages/Headphones/OneHeadphone.jsx"
import { NotFound } from "./pages/NotFound/NotFound.jsx"

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
        path: "/headphones/:id",
        element: <OneHeadphone />,
    },
    {
        path: "/speakers",
        element: <Speakers />,
    },
    {
        path: "/earphones",
        element: <Earphones />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
