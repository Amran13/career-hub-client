import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Header from '../components/Header.jsx'
import Home from "../pages/Home.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <div>Error Page</div>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

