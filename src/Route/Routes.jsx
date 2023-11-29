import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Page/HomePage/HomePage";
import LoginPage from "../Page/AuthForms/LoginPage";
import RegisterPage from "../Page/AuthForms/RegisterPage";
import TeacherForm from "../Page/JoiningForm/Join_teacher/TeacherForm";
import Dashboard from "../Layout/Dashboard";
import PrivateRoutes from './../AuthGaurds/PrivateRoutes';
import MyEnrolled from "../Page/MyEnrolled Class/MyEnrolled";
import TeacherReq from "../Page/Teacher Req/TeacherReq";
import AllUsers from "../Page/Allusers/AllUsers";
import MyProfile from "../Page/MyProfile/MyProfile";
import AddClass from "../Page/Add-class/AddClass";
import AllClass from "../Page/All Class/allClass";
import MyClass from "../Page/My Class/MyClass";
import UpdateClass from "../Page/My Class/UpdateClass";
import ClassDetails from "../Page/ClassDetails/ClassDetails";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const axiosPrivate = useAxiosPrivate();

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
            },
            {
                path: 'teacher-req',
                element: <TeacherReq></TeacherReq>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'all-class', 
                element: <AllClass></AllClass>
            },
            {
                path: 'my-class',
                element: <MyClass></MyClass>
            },
            {
                path: 'update/:id',
                element: <UpdateClass></UpdateClass>
            },
            {
                path: 'class/details/:id',
                loader: ({params}) => axiosPrivate.get(`/classes/single/${params.id}`),
                element: <ClassDetails></ClassDetails>
            }
        ]
    }

])

export default routes;