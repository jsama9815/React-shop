import React, {useRef} from 'react';
import '@styles/Login.scss';

const Login = () => {
	const form = useRef(null);
	const handlesubmit = (event) =>{
		event.preventDefault();
		const formdata = new FormData(form.current);
		const data ={
			username: formdata.get('email'),
			password : formdata.get('password')
		}
	}
	return (
		<div className="Login">
			<div className="Login-container">
				<img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="test@example.com" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button type="submit"
					className="primary-button login-button"
					onClick={handlesubmit}>
					log in
					</button>
					<a href="/">Forgot my password</a>
				</form>
				<button className="secondary-button signup-button" >Sign up</button>
			</div>
		</div>
	);
}

export default Login;
