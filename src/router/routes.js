import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/password-recovery",
		element: <PasswordRecovery />,
	},
	{
		path: "/send-email",
		element: <SendEmail />,
	},
    {
		path: "/new-password",
		element: <NewPassword />,
	},
    {
		path: "/account",
		element: <MyAccount />,
	},
    {
		path: "/CreateAccount",
		element: <CreateAccount />,
	},
    {
		path: "/checkout",
		element: <Checkout />,
	},
    {
		path: "/orders",
		element: <Orders />,
	},
    {
		path: "*",
		element: <NotFound />,
	},
]

export default routes