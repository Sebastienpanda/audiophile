import ReactDOM from "react-dom/client"
import Home from "./pages/Home/Home.jsx"
import "./assets/css/main.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { HeadPhones } from "./pages/Headphones/Headphones.jsx"
import { Speakers } from "./pages/Speakers/Speakers.jsx"
import { Earphones } from "./pages/Earphones/Earphone.jsx"
import { NotFound } from "./pages/NotFound/NotFound.jsx"
import { Single } from "./pages/Headphones/Single.jsx"
import { Test } from "./pages/Test.jsx"
import { Checkout } from "./pages/Payement/Checkout.jsx"
import { UserContextProvider } from "./hooks/userContext.jsx"
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
        path: "/headphones/:slug",
        element: <Single />,
        errorElement: <NotFound />,
    },
    {
        path: "/speakers",
        element: <Speakers />,
    },
    {
        path: "/speakers/:slug",
        element: <Single />,
    },
    {
        path: "/earphones",
        element: <Earphones />,
    },
    {
        path: "/earphones/:slug",
        element: <Single />,
    },
    {
        path: "/test",
        element: <Test />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserContextProvider>
        <RouterProvider router={router} />
    </UserContextProvider>
)
