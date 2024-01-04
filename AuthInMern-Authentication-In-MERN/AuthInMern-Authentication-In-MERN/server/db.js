const mongoose = require("mongoose");

const DB = 'mongodb+srv://Abhishek:dhamija@123@cluster0.linkx.mongodb.net/Login&Signup?retryWrites=true&w=majority';

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
