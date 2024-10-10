
const mongoose = require('mongoose'); // Variável mongoose que irá armazenar a conexão futura com o mongo

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 } // Ensure minimum length for passwords
}, { timestamps: true }); // Enable createdAt and updatedAt fields

// Define the book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        min: 0, // Validates that year is non-negative
        max: new Date().getFullYear() // Validates that year is not in the future
    },
    genre: {
        type: String // Optional: Add a genre field
    }
}, { timestamps: true }); // Enable createdAt and updatedAt fields

// Export the models
const User = mongoose.model('User', userSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports = { User, Book }; // Export both models
