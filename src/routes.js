import About from "./components/About";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";

const routes = [
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/profile/:id",
        element: <UserProfile />,
        errorElement: <ErrorPage/>
    }
]

export default routes;