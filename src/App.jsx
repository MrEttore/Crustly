import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Order, { loader as orderLoader } from './features/order/Order';
import CreateOrder, {
    action as createOrderAction,
} from './features/order/CreateOrder';
import Cart from './features/cart/Cart';

// Implement a "Render-As-You-Fetch" strategy in the router.

// loaders -> fetch data for a route before rendering it (GET).
// actions -> write data to a server before rendering a route (POST, PATCH, DELETE).

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/menu',
                element: <Menu />,
                errorElement: <Error />,
                loader: menuLoader, // 2a. Provide loader to path.
            },
            { path: '/cart', element: <Cart /> },
            {
                path: '/order/new',
                element: <CreateOrder />,
                action: createOrderAction, // 2b. Provide action to path.
            },
            {
                path: '/order/:orderId',
                element: <Order />,
                errorElement: <Error />,
                loader: orderLoader,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
