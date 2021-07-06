const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
	"sk_test_51J9GYkSGV9IRNtpBunGkyGk34qEvUIVA1FbjBW9pNpToUiRQ6CflpT1fwaZcnrRKmHfo3SNkgm82HhzfuRcPtZgZ005jaqhlQL"
);
const Order = require("../models/orderModel");
const { v4: uuidv4 } = require("uuid");

router.post("/placeorder", async (req, res) => {
	const { token, subtotal, currentUser, cartItems } = req.body;

	try {
		const customer = await stripe.customers.create({
			email: token.email,
			source: token.id,
		});

		const payment = await stripe.charges.create(
			{
				amount: subtotal * 100,
				currency: "inr",
				customer: customer.id,
				receipt_email: token.email,
			},
			{
				idempotencyKey: uuidv4(),
			}
		);

		if (payment) {
			const neworder = new Order({
				name: currentUser.name,
				email: currentUser.email,
				userid: currentUser._id,
				orderItems: cartItems,
				orderAmount: subtotal,
				shippingAddress: {
					street: token.card.address_line1,
					city: token.card.address_city,
					country: token.card.address_country,
					pincode: token.card.address_zip,
				},
				transactionId: payment.source.id,
			});

			neworder.save();
			res.send("Order placed successfully");
		} else {
			res.send("Payment failed");
		}
	} catch (error) {
		return res.status(400).json({ message: "Something went wrong" + error });
	}
});

router.post("/getuserorders", async (req, res) => {
	const { userid } = req.body;
	try {
		const orders = await Order.find({ userid: userid });
		res.send(orders);
	} catch (error) {
		return res.status(400).json({ message: "Something went wrong" + error });
	}
});

module.exports = router;
