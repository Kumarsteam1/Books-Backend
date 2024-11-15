const mongoose = require("mongoose");

const connectdb = async () => {
	try {
		await mongoose.connect("mongodb+srv://shinagamkumarswamy:nBbMnHBIiRhOFAVK@cluster0.86aog.mongodb.net/");
		console.log("Mongo db Database connected successfully!")
	} catch (error){
		console.log(error)
	}
}

module.exports = connectdb;