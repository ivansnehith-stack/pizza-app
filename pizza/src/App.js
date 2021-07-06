import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import cartScreen from "./screens/cartScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap'
import OrdersScreen from "./screens/OrdersScreen";

function App() {
	return (
		<div>
			<NavBar />
			<BrowserRouter>
				<Route path="/" exact component={HomeScreen} />
				<Route path="/cart" exact component={cartScreen} />
				<Route path="/register" excat component={RegisterScreen} />
				<Route path="/login" excat component={LoginScreen} />
				<Route path="/orders" excat component={OrdersScreen} />
			</BrowserRouter>
		</div>
	);
}

export default App;
