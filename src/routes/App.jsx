import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Layout from '../containers/Layout';
import router from '../router';
import useInitialState from '../hooks/useInitialState';
import AppContex from '../contex/AppContex';


const App = () => {
	const initialState = useInitialState();
	console.log(initialState);
	return (
		<div>
		<AppContex.Provider value={initialState}>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
			</AppContex.Provider>
		</div>
	);
	
}

export default App;