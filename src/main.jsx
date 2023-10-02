import ReactDOM from "react-dom/client"
import Home from "./pages/Home/Home.jsx"
import "./assets/css/main.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HeadPhones } from "./pages/Headphones/Headphones.jsx"
import { Speakers } from "./pages/Speakers/Speakers.jsx"
import { Earphones } from "./pages/Earphones/Earphone.jsx"
import { NotFound } from "./pages/NotFound/NotFound.jsx"
import { Single } from "./pages/Headphones/Single.jsx"

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/headphones",
        element: <HeadPhones />,
        errorElement: <NotFound />,
    },
    {
        path: "/headphones/:id",
        element: <Single />,
        errorElement: <NotFound />,
    },
    {
        path: "/speakers",
        element: <Speakers />,
    },
    {
        path: "/earphones",
        element: <Earphones />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />)
