const express = require("express");

const Pizza = require("./models/pizzaModel");

const app = express();
const db = require("./db.js");
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);  
const path = require('path')


if(process.env.NODE_ENV === 'production'){
	app.use('/', express.static('pizza/build'))

	app.get('*' , (req , res)=>{
		res.sendFile(path.resolve(__dirname , 'pizza/build/index.html'))
	})
}

// app.get("/", (req, res) => {
// 	res.send("Server Connected");
// });

const port = process.env.PORT || 8000;

app.listen(port, () => `Server running on the port`);
