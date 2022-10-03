import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Layout from '../containers/Layout';
import router from '../router';
	
const App = () => {
	return (
		<div>
			<Layout>
				<RouterProvider router={router} />
			</Layout>
		</div>
	);
}

export default App;