// bookscontrollers.js
const Books = require('../Models/booksModel');



const getBooks = async (req, res) => {
	try {
		console.log("Fetching books data...");
		const data = await Books.find({});

		res.status(200).send({
			success: true,
			message: "Books data fetched successfully",
			data
		});
	} catch (error) {
		console.error("Error fetching books:", error);
		res.status(500).send({
			success: false,
			message: "INTERNAL SERVER ERROR",
			error
		});
	}
};


const addBooks = async (req, res) => {
	try {
		const { book_name, author_name, mail, phone, description } = req.body;
		const image = req.file; // `image` file is now available here

		if (!book_name || !author_name || !mail || !phone || !description || !image) {
			return res.status(400).send({
				success: false,
				message: "Missing required fields"
			});
		}

		// Save the new book data
		await new Books({
			book_name,
			author_name,
			mail,
			phone,
			description,
			image: image.path, // Store file path
		}).save();

		res.status(200).send({
			success: true,
			message: "Book added successfully",
		});
	} catch (error) {
		res.status(500).send({
			success: false,
			message: "INTERNAL SERVER ERROR",
			error: error.message,
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const delete_id = req.params.id;
		await Books.deleteOne({ _id: delete_id });
		res.status(200).send({
			success: true,
			message: "Book data Deleted successfully",
		})

	} catch (error) {
		console.log(error)
		res.status(500).send({
			success: false,
			message: "INTERNAL SERVER ERROR",
			error
		}

		)
	}
}


module.exports = { getBooks, addBooks, deleteBook }