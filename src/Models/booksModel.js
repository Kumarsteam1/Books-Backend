// booksModel.js

const mongoose = require('mongoose');

const Books = mongoose.Schema({
	book_name: {
		type: String,
		required: true
	},
	author_name: {
		type: String,
		required: true
	},
	mail: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
    type: String // Assuming you'll use a URL or path for the image
  }
})

module.exports = mongoose.model("Books", Books)