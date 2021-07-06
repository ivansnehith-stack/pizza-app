import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/userActions";

export default function NavBar() {
	const cartstate = useSelector((state) => state.cartReducer);
	const userstate = useSelector((state) => state.loginUserReducer);
	const { currentUser } = userstate;
	const dispatch = useDispatch();
	return (
		<div>
			<nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
				<a className="navbar-brand" href="/">
					Domino's Pizza
				</a>
				<a
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</a>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						{currentUser ? (
							<div className="dropdown ">
								<a
									className=" dropdown-toggle nav-link"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{currentUser.name}
								</a>
								<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
									<li>
										<a className="dropdown-item" href="orders">
											Orders
										</a>
									</li>
									<li>
										<a
											className="dropdown-item"
											href="#"
											onClick={() => {
												dispatch(logoutUser());
											}}
										>
											Logout
										</a>
									</li>
								</ul>
							</div>
						) : (
							<li className="nav-item">
								<a className="nav-link" href="/login">
									Login
								</a>
							</li>
						)}

						<li className="nav-item">
							<a className="nav-link" href="/cart">
								Cart {cartstate.cartItems.length}
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
