import React from "react";
import { useDispatch , useSelector} from "react-redux"
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../actions/orderActions";
import Success from "../components/Success";
import Loading from "../components/Loading";
import Error from "../components/Error";


export default function Checkout({ subtotal }) {
    const orderstate = useSelector((state)=> state.placeOrderReducer)
	const {loading, error, success} = orderstate
    const dispatch = useDispatch();

	function tokenHandler(token) {
		console.log(token);
        dispatch(placeOrder(token , subtotal))
	}
	return (
		<div>
			{loading && <Loading />}
			{error && <Error error = 'Something went wrong' />}
			{success && <Success success = 'Order Places Successfully' />}
			<StripeCheckout
				amount={subtotal * 100}
				shippingAddress
				token={tokenHandler}
				currency="INR"
				stripeKey="pk_test_51J9GYkSGV9IRNtpBI85AiNIT8kkWlmfyE76bwB9u5V65oEYhK5GQ5o3F7yJlzJX5Nntf5Tj78GXoJXIdVrOT7LTB00JfTSJKDP"
			>
				<button className="btn-success">Place Order</button>
			</StripeCheckout>
		</div>
	);
}
