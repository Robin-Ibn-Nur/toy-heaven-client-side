import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Blogs from "../Pages/Blogs/Blogs";
import LogIn from "../SharedPages/LogInPage/LogIn";
import SignUp from "../SharedPages/SignUpPage/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUpAndLogInPage from "../SharedPages/SignUpAndLogInPage/SignUpAndLogInPage";
import ToyDetailsPage from "../Pages/ToyDetailsPage/ToyDetailsPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "all-toys",
                element: <AllToys />
            },
            {
                path: "my-toys",
                element: <MyToys />
            },
            {
                path: "add-a-toys",
                element: <AddToys />
            },
            {
                path: "blogs",
                element: <Blogs />
            },
            {
                path: "toys/:id",
                element: <PrivateRoute><ToyDetailsPage /></PrivateRoute>,
                // element: <ToyDetailsPage />,
                loader: ({ params }) => fetch(`https://toy-heaven-server-side.vercel.app/toys/${params.id}`)
            },
            {
                path: "signUp&logIn",
                element: <SignUpAndLogInPage />
            }
        ]
    },
])