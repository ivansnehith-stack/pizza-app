import React , {useState , useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../actions/orderActions";
export default function OrdersScreen() {
	return (
		<div className='App'>
			<h2 >My Orders</h2>
		</div>
	);
}
