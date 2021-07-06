const mongoose = require("mongoose");

var mongoURL = "mongodb+srv://ivan:snehith007@cluster0.rgwto.mongodb.net/Pizza"

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on("connected", () => {
	console.log("MongoDB connection succesfull");
});

db.on("error", () => {
	console.log("MongoDB connection failed");
});

module.exports = mongoose;
