import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/userActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function RegisterScreen() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const registerstate = useSelector((state) => state.registerUserReducer);
	const { error, loading, success } = registerstate;

	const dispatch = useDispatch();

	function register() {
		if (password != confirmPassword) {
			alert("Password not matched");
		} else {
			const user = {
				name: name,
				email: email,
				password: password,
			};
            console.log(user);
			dispatch(registerUser(user));
		}
	}

	return (
		<div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-5 mt-5 shadow-lg p-3 mb-5 bg-white rounded">
					{loading && <Loading />}
					{success && <Success success="User Registered Successfully" />}
					{error && <Error error="Email already registered" />}
					<h2 className="text-center m-2" style={{ fontSize: "35px" }}>
						Register
					</h2>
					<div>
						<input
							required
							type="text"
							placeholder="Name"
							className="form-control"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							required
							type="email"
							placeholder="Email"
							className="form-control"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							required
							type="password"
							placeholder="Password"
							className="form-control"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							required
							type="password"
							placeholder="Confirm Password"
							className="form-control"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
						<button className="btn mt-3 mb-3" onClick={register}>
							Register
						</button>
						<br />
						<a style={{ color: "black" }} href="/login">
							Click Here To Login
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
