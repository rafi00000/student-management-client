import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage/HomePage";
import LoginPage from "../Page/AuthForms/LoginPage";
import RegisterPage from "../Page/AuthForms/RegisterPage";
import TeacherForm from "../Page/JoiningForm/Join_teacher/TeacherForm";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from './../AuthGaurds/PrivateRoutes';
import MyEnrolled from "../Page/MyEnrolled Class/MyEnrolled";

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
            },
            {
                path: 'join-teacher',
                element: <TeacherForm></TeacherForm>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
            {
                path: 'my-enrolled-class',
                element: <MyEnrolled></MyEnrolled>
            }
        ]
    }

])

export default routes;