import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Layout from '../containers/Layout';
import router from '../router';
import useInitialState from '../hooks/useInitialState';
import AppContex from '../contex/AppContex';


const App = () => {
	const initialState = useInitialState();
	return (
		<AppContex.Provider value={initialState}>
		<div>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</div>
		</AppContex.Provider>
	);
}

export default App;