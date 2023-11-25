import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage/HomePage";
import LoginPage from "../Page/AuthForms/LoginPage";
import RegisterPage from "../Page/AuthForms/RegisterPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/login', 
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    },

    {
        path: '/dashboard'
    }

])

export default routes;