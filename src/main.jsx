import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './Layout';
import Home from './Routes/Home';
import Coverage from './Routes/Coverage';
import SendItem from './Routes/SendItem';
import Authentication from './Routes/Authentication';
import Login from './Components/Auth/Login';
import Registration from './Components/Auth/Registration';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './Routes/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className='main-font'>
            <Layout></Layout>
        </div>,
        children: [
            {index: true, Component: Home}, 
            {
                path: "/coverage", 
                element: <Coverage></Coverage>
            },
            {
                path: "/send-item", 
                element: <SendItem></SendItem>
            }, 
            {
                path: "/dashboard", 
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path: "/",
        element: <Authentication></Authentication>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            }, 
            {
                path: "/registration",
                element: <Registration></Registration>
            }
        ]
    }
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
)
