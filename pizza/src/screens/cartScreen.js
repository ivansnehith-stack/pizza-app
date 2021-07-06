import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {deleteFromCart} from '../actions/cartActions'
import Checkout from "../components/Checkout";

export default function CartScreen() {
	const dispatch = useDispatch();
	const cartstate = useSelector((state) => state.cartReducer);
	const cartItems = cartstate.cartItems;
    var subTotal = cartItems.reduce((x , item)=> x + item.price , 0)
	return (
		<div>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<h4 style={{ fontSize: "25px" }}>Cart</h4>

					{cartItems.map((item) => {
						return (
							<div className="flex-container">
								<div className="text-left m-1 w-100">
									<h1>
										{item.name} ({item.varient})
									</h1>
									<h1>
										price: {item.quantity} * {item.prices[0][item.varient]} =
										{item.price}
									</h1>
									<h1 style={{ display: "inline" }}>Quantity : </h1>
									<i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity+1, item.varient))}}></i>
									<b>{item.quantity}</b>
									<i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item, item.quantity-1 , item.varient))}}></i>
									<hr />
								</div>

								<div className='m-1 w-100'>
									<img
										src={item.image}
										style={{ height: "80px", height: "80px" }}
									/>
								</div>

								<div className='m-1 w-100'>
                                <i className="fa fa-trash mt-5 pointer" aria-hidden="true"  onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                                </div>
							</div>
						);
					})}
				</div>

				<div className="col-md-4 text-right">
                    <h4 style ={{fontSize: '25px'}}>Grand Total $ {subTotal}</h4>
                    <Checkout subtotal={subTotal}/>
                </div>
			</div>
		</div>
	);
}
